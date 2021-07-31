// a-z 97 to 122
// A-Z 65 to 90
// 0-9 48 to 57
// . 46 , 44 ? 63 ! 33 - 45
// + - * / & 43 45 42 47 = 61




document.addEventListener('keypress', logKey);

function logKey(e) {
  let letter = document.querySelector('.letter');

  if (keyCheck(e.charCode)) {
    letter.textContent += e.key;
  }
}

function keyCheck(char) {

  if (char >= 97 && char <= 122) return true;
  else if (char >= 65 && char <= 90) return true;
  else if (char >= 48 && char <= 57) return true;
  else if ([33, 44, 45, 46, 63, 43, 45, 42, 47, 61].includes(char)) return true;

  return false;
}