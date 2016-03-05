import Firebase from "firebase";
import _       from "lodash";
import Levenshtein from "levenshtein";
const flagWords = [
  "liquor",
  "victorias secret",
  "flixx",
  "asianbeauties",
  "pawn",
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
    var descriptionWords = transaction.description.split(" ");
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
    var fbTransRef = new Firebase("https://myutahguardian.firebaseio.com/red_flags/");
    console.log(problemCounts);
    _.each(problemCounts,(val, key)=>{
      if(val.count >= 1){
        if(_.includes(["flixx", "asianbeauties"], key)){
          //do four stuff
          fbTransRef.push({level: 4, uid, ...transaction});
        }
        if(_.includes(["liquor", "victorias secret", "payday", "alcohol"], key)){
          fbTransRef.push({level: 3, uid, ...transaction});
        }
        if(_.includes(["cigar", "casino", "pawn"], key)){
          fbTransRef.push({level: 2, uid, ...transaction});
        }
        if(_.includes(["tobacco", "smokes", "cigarrete"], key)){
          fbTransRef.push({level: 1, uid, ...transaction});
        }

      }
    });
  }

}