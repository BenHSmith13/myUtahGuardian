"use strict";
var _    = require("lodash");
var data = require("./big_data.json");
var Levenshtein = require("levenshtein");

_.each(data, function(item){
  switch(item.TransactionCategoryId) {
    case 182:
      if(item.Amount > 7000){
        item.flag = 4;
        write(item)
      } else if (item.Amount > 1000){
        item.flag = 3;
        write(item)
      } else if (item.Amount > 600){
        item.flag = 2;
        write(item)
      } else if (item.Amount > 300){
        item.flag = 1;
        write(item)
      }
      break;
    case 183:
      if(item.Amount > 250){
        item.flag = 4;
        write(item)
      } else if (item.Amount > 100){
        item.flag = 3;
        write(item)
      } else if (item.Amount > 50){
        item.flag = 2;
        write(item)
      } else if (item.Amount > 20){
        item.flag = 1;
        write(item)
      }
      break;
    case 186:
      if(item.Amount > 10000){
        item.flag = 4;
        write(item)
      } else if (item.Amount > 5000){
        item.flag = 3;
        write(item)
      } else if (item.Amount > 2500){
        item.flag = 2;
        write(item)
      } else if (item.Amount > 1000){
        item.flag = 1;
        write(item)
      }
      break;
    case 187:
      if(item.Amount > 1000){
        item.flag = 4;
        write(item)
      } else if (item.Amount > 750){
        item.flag = 3;
        write(item)
      } else if (item.Amount > 500){
        item.flag = 2;
        write(item)
      } else if (item.Amount > 300){
        item.flag = 1;
        write(item)
      }
      break;
    case 189:
      if(item.Amount > 1000){
        item.flag = 4;
        write(item)
      } else if (item.Amount > 500){
        item.flag = 3;
        write(item)
      } else if (item.Amount > 250){
        item.flag = 2;
        write(item)
      } else if (item.Amount > 150){
        item.flag = 1;
        write(item)
      }
      break;
    case 193:
      if(item.Amount > 25000){
        item.flag = 4;
        write(item)
      } else if (item.Amount > 10000){
        item.flag = 3;
        write(item)
      } else if (item.Amount > 4000){
        item.flag = 2;
        write(item)
      } else if (item.Amount > 2000){
        item.flag = 1;
        write(item)
      }
      break;
    case 194:
      if(item.Amount > 10000){
        item.flag = 4;
        write(item)
      } else if (item.Amount > 5000){
        item.flag = 3;
        write(item)
      } else if (item.Amount > 2500){
        item.flag = 2;
        write(item)
      } else if (item.Amount > 1000){
        item.flag = 1;
        write(item)
      }
      break;
    case 196:
      if(item.Amount > 500){
        item.flag = 4;
        write(item)
      } else if (item.Amount > 200){
        item.flag = 3;
        write(item)
      } else if (item.Amount > 100){
        item.flag = 2;
        write(item)
      } else if (item.Amount > 50){
        item.flag = 1;
        write(item)
      }
      break;
    case 197:
      if(item.Amount > 500){
        item.flag = 4;
        write(item)
      } else if (item.Amount > 375){
        item.flag = 3;
        write(item)
      } else if (item.Amount > 250){
        item.flag = 2;
        write(item)
      } else if (item.Amount > 150){
        item.flag = 1;
        write(item)
      }
      break;
    case 199:
      if(item.Amount > 10000){
        item.flag = 4;
        write(item)
      } else if (item.Amount > 5000){
        item.flag = 3;
        write(item)
      } else if (item.Amount > 2500){
        item.flag = 2;
        write(item)
      } else if (item.Amount > 1000){
        item.flag = 1;
        write(item)
      }
      break;
    case 200:
      if(item.Amount > 1000){
        item.flag = 4;
        write(item)
      } else if (item.Amount > 600){
        item.flag = 3;
        write(item)
      } else if (item.Amount > 400){
        item.flag = 2;
        write(item)
      } else if (item.Amount > 200){
        item.flag = 1;
        write(item)
      }
      break;
    case 202:
      if(item.Amount > 10000){
        item.flag = 4;
        write(item)
      } else if (item.Amount > 5000){
        item.flag = 3;
        write(item)
      } else if (item.Amount > 2500){
        item.flag = 2;
        write(item)
      } else if (item.Amount > 1000){
        item.flag = 1;
        write(item)
      }
      break;
    case 203:
      if(item.Amount > 5000){
        item.flag = 4;
        write(item)
      } else if (item.Amount > 2500){
        item.flag = 3;
        write(item)
      } else if (item.Amount > 1000){
        item.flag = 2;
        write(item)
      } else if (item.Amount > 500){
        item.flag = 1;
        write(item)
      }
      break;
    case 212:
      if(item.Amount > 10000){
        item.flag = 4;
        write(item)
      } else if (item.Amount > 2500){
        item.flag = 3;
        write(item)
      } else if (item.Amount > 1000){
        item.flag = 2;
        write(item)
      } else if (item.Amount > 500){
        item.flag = 1;
        write(item)
      }
      break;
    case 213:
      if(item.Amount > 10000){
        item.flag = 4;
        write(item)
      } else if (item.Amount > 5000){
        item.flag = 3;
        write(item)
      } else if (item.Amount > 2500){
        item.flag = 2;
        write(item)
      } else if (item.Amount > 1000){
        item.flag = 1;
        write(item)
      }
      break;
    case 214:
      if(item.Amount > 4000){
        item.flag = 4;
        write(item)
      } else if (item.Amount > 2000){
        item.flag = 3;
        write(item)
      } else if (item.Amount > 1000){
        item.flag = 2;
        write(item)
      } else if (item.Amount > 500){
        item.flag = 1;
        write(item)
      }
      break;
    case 216:
      if(item.Amount > 10000){
        item.flag = 4;
        write(item)
      } else if (item.Amount > 5000){
        item.flag = 3;
        write(item)
      } else if (item.Amount > 2500){
        item.flag = 2;
        write(item)
      } else if (item.Amount > 1000){
        item.flag = 1;
        write(item)
      }
      break;
    case 221:
      if(item.Amount > 4000){
        item.flag = 4;
        write(item)
      } else if (item.Amount > 2000){
        item.flag = 3;
        write(item)
      } else if (item.Amount > 1000){
        item.flag = 2;
        write(item)
      } else if (item.Amount > 500){
        item.flag = 1;
        write(item)
      }
      break;
    case 229:
      if(item.Amount > 10000){
        item.flag = 4;
        write(item)
      } else if (item.Amount > 5000){
        item.flag = 3;
        write(item)
      } else if (item.Amount > 2500){
        item.flag = 2;
        write(item)
      } else if (item.Amount > 1000){
        item.flag = 1;
        write(item)
      }
      break;
    case 230:
      if(item.Amount > 2000){
        item.flag = 4;
        write(item)
      } else if (item.Amount > 1500){
        item.flag = 3;
        write(item)
      } else if (item.Amount > 1000){
        item.flag = 2;
        write(item)
      } else if (item.Amount > 500){
        item.flag = 1;
        write(item)
      }
      break;
    case 233:
      if(item.Amount > 400){
        item.flag = 4;
        write(item)
      } else if (item.Amount > 300){
        item.flag = 3;
        write(item)
      } else if (item.Amount > 250){
        item.flag = 2;
        write(item)
      } else if (item.Amount > 150){
        item.flag = 1;
        write(item)
      }
      break;
    case 236:
      if(item.Amount > 300){
        item.flag = 4;
        write(item)
      } else if (item.Amount > 200){
        item.flag = 3;
        write(item)
      } else if (item.Amount > 250){
        item.flag = 2;
        write(item)
      } else if (item.Amount > 150){
        item.flag = 1;
        write(item)
      }
      break;
    case 239:
      if(item.Amount > 4000){
        item.flag = 4;
        write(item)
      } else if (item.Amount > 3000){
        item.flag = 3;
        write(item)
      } else if (item.Amount > 2000){
        item.flag = 2;
        write(item)
      } else if (item.Amount > 1000){
        item.flag = 1;
        write(item)
      }
      break;
    default:
      break
  }

  if(_.contains(item.Description, 'cash') || _.contains(item.Description, 'Cash')){
    if(item.Amount > 4000){
      item.flag = 4;
      write(item)
    } else if (item.Amount > 3000){
      item.flag = 3;
      write(item)
    } else if (item.Amount > 2000){
      item.flag = 2;
      write(item)
    } else if (item.Amount > 1000){
      item.flag = 1;
      write(item)
    }
  }

  var flagWords1 = ["Gander Mountain", "Tobacco", "Smokes"];
  var flagWords2 = ["Cigar", "Casino", "Pawn"];
  var flagWords3 = ["Liquor", "Victoria's Secret", "Payday"];
  var flagWords4 = ["Hot Flixx", "AsianBeauties"];

  if(item.Description && item.Description.length){
    var descriptionWords = item.Description.split(" ");

    _.each(descriptionWords, function(dword){
      _.each(flagWords4, function(word){
        if(new Levenshtein(word, dword).distance < dword.length / 3){
          item.flag = 4;
          write(item);
        }
      });
      _.each(flagWords3, function(word){
        if(new Levenshtein(word, dword).distance < dword.length / 3){
          item.flag = 3;
          write(item);
        }
      });
      _.each(flagWords2, function(word){
        if(new Levenshtein(word, dword).distance < dword.length / 3){
          item.flag = 2;
          write(item);
        }
      });
      _.each(flagWords1, function(word){
        if(new Levenshtein(word, dword).distance < dword.length / 3){
          item.flag = 1;
          write(item);
        }
      });
    });

  }
});

function write(item){
  var fs = require('fs');
  fs.appendFile('./processed_data.json', JSON.stringify(item) + ',\n', function (err) {
    console.log(err)
  });
}