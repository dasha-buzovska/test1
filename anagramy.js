function aclean(arr) {
      for (var i = 0; i < arr.length; i++) {
        var tmp = arr[i].split('').sort().join('').toLowerCase();
        for (var j = i+1; j < arr.length; j++ ) {
          if (tmp === arr[j].split('').sort().join('').toLowerCase()) { 
            arr.splice(j,1); j--;
          }
        }
      } 
      return arr;
    }

    var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];