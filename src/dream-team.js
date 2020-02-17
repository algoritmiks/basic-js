module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  let newArr = [];
  arr.forEach(element => {
    if (typeof (element) == "string") {
      newArr = [...newArr, /[a-z]/i.exec(element)[0].toUpperCase()];
    }
  });
  return newArr.sort().join('');
};