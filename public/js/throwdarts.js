function ScoreThrows (arr) {
  var score = 0;
  var bonusArr = [];

  if (arr === []) {
    return score;
  }

  for (var i = 0; i < arr.length; i++) {
    var currentThrow = arr[i];

    if (currentThrow < 5) {
      bonusArr.push(currentThrow);
      score += 10;
    }

    if (currentThrow >= 5 && currentThrow <= 10) {
      score += 5;
    }

    if (currentThrow > 10) {
      score += 0;
    }
  }

  if (bonusArr.length !== 0 && bonusArr.length === arr.length) {
    score += 100;
  }

  return score;
}





