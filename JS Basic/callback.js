function checkMood(mood, goodCallback, badCallback) {
  if (mood === 'good') {
    goodCallback();
  } else {
    badCallback();
  }
}
function cry() {
  console.log('Action :: CRY');
}

function sing() {
  console.log('Action :: SING');
}

function dance() {
  console.log('Action :: Dance');
}
checkMood('sad', sing, cry);

//Callback 함수의 파라미터로 함수를 넘기는 것
