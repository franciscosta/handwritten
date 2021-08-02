// a-z 97 to 122
// A-Z 65 to 90
// 0-9 48 to 57
// . 46 , 44 ? 63 ! 33 - 45
// + - * / & 43 45 42 47 = 61

let WORD_COUNTER = 1;

function initWord() {

  WORD_COUNTER += 1;

  let word = document.createElement('div');
  word.classList = `word-${WORD_COUNTER}`;
  document.querySelector('.letter').appendChild(word);
}

function deleteWord() {
  const word = document.querySelector(`.letter`);
  if (word.firstChild) word.removeChild(word.lastChild);

  WORD_COUNTER -= 1;

  if (word.childElementCount === 0) {
    WORD_COUNTER = 0;
    initWord();
  }

}

function keyCheck(char) {

  if (char >= 97 && char <= 122) return true;
  else if (char >= 65 && char <= 90) return true;
  else if (char >= 48 && char <= 57) return true;
  else if ([33, 44, 45, 46, 63, 43, 45, 42, 47, 61].includes(char)) return true;

  return false;
}

function appendCursor() {

  // ????

}

function keyboard(e) {

  const word = document.querySelector(`.word-${WORD_COUNTER}`);

  // Keys 
  if (keyCheck(e.charCode)) {

    let img = document.createElement('img');
    img.src = `letters/${e.charCode}.svg`;
    word.appendChild(img);
  } 
  
  // Space
  if (e.code === 'Space') {
    let img = document.createElement('img');
    img.src = `letters/space.svg`;
    word.appendChild(img); 

    initWord();
  }

  // Delete
  if (e.code === 'Backspace') {
    deleteWord();
  }

}

document.addEventListener('keypress', keyboard);


// Save as image

document.getElementById('button').onclick = function() {
  domtoimage.toBlob(document.getElementById('save-this'))
    .then(function(blob) {
      window.saveAs(blob, 'handwritting.png');
    });
}