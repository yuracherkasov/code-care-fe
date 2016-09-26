angular
  .module("ccApp")
  .service('transformResults', transformResults)

function transformResults() {

  this.parseText = function(str) {
    var paragrafArray = [];
    var target = "\r\n";
    var pos = 0;
    
    while (true) {
      var foundPos = str.indexOf(target, pos);
      var subStr = str.slice(pos, foundPos);
      paragrafArray.push(subStr);
      pos = foundPos + 1;
      if (foundPos == -1) break;
    }
    return paragrafArray;

  };

};