module.exports = function countCats( matrix ) {
  let totalCats = 0;
  matrix.forEach(el => {
    el.forEach(elem => {
      elem === "^^" ? totalCats += 1 : null;
    })
  });
  return totalCats;
};