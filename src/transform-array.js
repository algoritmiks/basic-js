module.exports = function transform(arr) {

    if (!Array.isArray(arr)) {
        throw new Error();
    }
    res = [];
    for ( let elemIndex=0; elemIndex < arr.length; elemIndex++ ) {
      switch(arr[elemIndex]){
          case '--double-next':
              if (elemIndex < arr.length-1) {
                  res.push(arr[elemIndex+1]);
              }
              break;
          case '--discard-prev':
              res.pop();
              break;
          case '--discard-next':
              if (elemIndex < arr.length-1) {
                  elemIndex+=1;
              }
              break;
          case '--double-prev':
              if ( elemIndex > 0 ) {
              res.push(arr[elemIndex-1]);
              }
              break;
          default: 
              res.push(arr[elemIndex]);
          }
      }
      return res;
};