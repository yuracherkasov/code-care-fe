angular
  .module("ccApp")
  .service('transformResults', transformResults)

function transformResults() {

  this.parseTextOnParagraf = function(str) {
    var target = "\r\n";
    var paragrafArray = str.split(target);
    return  paragrafArray;
  };

  this.parseTextOnNewLine = function(str){
    var modifyLine = "";
    var target = "\r\n";
    var arr = str.split(target);
    modifyLine = arr.join(' <br />');
    return modifyLine;
  };

  this.lowercaseWithArray = function(array){
    var modifyArray = [];
    for (var i = 0; i < array.length; i++) {
      var modifyValue = array[i].toLowerCase();
      modifyArray.push(modifyValue);
    }
    return modifyArray;
  };

  this.getDevsById = function(targetDevs, allDevs){
    var obj = {};
    if(angular.isArray(targetDevs) && angular.isArray(allDevs)){
      for (var i = 0; i < allDevs.length; i++) {
        var num = allDevs[i].id;
        for (var j = 0; j < targetDevs.length; j++) {

          if(num === targetDevs[j]) {
            obj[num] = allDevs[i].image;
          }
        }
      }            
    }
    return obj;    
  }


};