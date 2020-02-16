module.exports = function countCats( matrix ) {
  throw 'Not implemented';
  let totalCats = 0;
  matrix.forEach(el => {
    el.forEach(elem => {
      elem === "^^" ? totalCats += 1 : null;
    })
  });
  return totalCats;
};