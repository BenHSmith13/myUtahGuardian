import Firebase from "firebase";
import _       from "lodash";
import Levenshtein from "levenshtein";
const flagWords = [
  "liquor",
  "victorias secret",
  "flixx",
  "asianbeauties",
  "porn",
  "alcohol",
  "tobacco",
  "smokes",
  "cigarrettes",
  "payday"
];
export default class Processor {
  static processTransaction(transaction, uid){
    var fireRef = new Firebase("https://myutahguardian.firebaseio.com/transactions/"+uid);
    var problemCounts = {};
    fireRef.on("value", (snapshot)=>{
      var transactions = snapshot.val();
      _.each(transactions, (trans)=>{
        var descriptionWords = trans.description.split(" ");
        _.each(descriptionWords, (dword)=>{
          _.each(flagWords, (word)=>{
            if(new Levenshtein(word, dword).distance < dword.length / 3){
              if(problemCounts[word]){
                problemCounts[word].count++;
                problemCounts[word].inputWords.push(dword);
              } else {
                problemCounts[word] = {
                  count:  1,
                  inputWords: [dword],
                  ids: [dword]
                }
              }
            }
          });
        });
      });
      var fbTransRef = new Firebase("https://myutahguardian.firebaseio.com/red_flags/")
      _.each(problemCounts,(val, key)=>{
        if(val.count >= 5){
          var isInThisTransaction = false;
          _.each(val.inputWords, word=>{
            if(transaction.description.indexOf(word) > -1) isInThisTransaction = true;
          });
          if(isInThisTransaction){
            fbTransRef.push({level: 4, uid, ...transaction});
          }
        }
        else if(val.count > 3){
          var isInThisTransaction = false;
          _.each(val.inputWords, word=>{
            if(transaction.description.indexOf(word) > -1) isInThisTransaction = true;
          });
          if(isInThisTransaction){
            fbTransRef.push({level: 3, uid, ...transaction});
          }
        }
        else if(val.count > 1){
          var isInThisTransaction = false;
          _.each(val.inputWords, word=>{
            if(transaction.description.indexOf(word) > -1) isInThisTransaction = true;
          });
          if(isInThisTransaction){
            fbTransRef.push({level: 2, uid, ...transaction});
          }
        }

      });
    });
  }
}