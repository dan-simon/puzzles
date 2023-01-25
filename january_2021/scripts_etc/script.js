// You can read this file if you want, but it's not needed or helpful for any puzzles.
// Obviously, don't modify your local storage in console or do anything of that sort.

let getGuessesLeft = function (puzzleName) {
  return Math.floor(5 + (Date.now() - getUnlockTime(puzzleName)) / 1.8e6 - state.guesses.filter(x => x[1] === puzzleName).length);
}

let getWrongGuessesMade = function (puzzleName) {
  return state.guesses.filter(x => x[1] === puzzleName && x[3] === false).map(x => x[2]);
}

let isSolved = function (puzzleName) {
  return state.guesses.some(x => x[1] === puzzleName && x[3] === true);
}

let getAnswer = function (puzzleName) {
  let correct = state.guesses.filter(x => x[1] === puzzleName && x[3] === true);
  return correct.length ? correct[0][2] : 'none';
}

let isUnlocked = function (x) {
  return getUnlockTime(x) <= Date.now();
}

let maybeCheckThisAnswer = function (e) {
  if (e.keyCode === 13) {
    checkThisAnswer();
  }
}

let checkThisAnswer = function () {
  checkAnswer(document.getElementsByTagName('h2')[0].innerHTML);
}

let updateStatusText = function (puzzleName) {
  if (puzzleName === 'List of Puzzles') {
    updateHuntHeader();
    return;
  }
  if (puzzleName === 'Explanation') {
    return;
  }
  let el = document.getElementById('answer-status');
  if (el === null) return;
  let solved = isSolved(puzzleName);
  el.className = solved ? 'correct' : 'incorrect';
  let guesses = getGuessesLeft(puzzleName);
  el.innerHTML = (solved ? 'Solved with ' + getAnswer(puzzleName) : 'Unsolved') +
  ' (incorrect: ' + (getWrongGuessesMade(puzzleName).join(', ') || 'none') +
  (solved ? '' : ', ' + guesses + ' guess' + (guesses === 1 ? '' : 'es') + ' left') + ')';
}

let updateStatus = function (time, puzzleName, guess, correct) {
  state.guesses.push([time, puzzleName, guess, correct]);
  updateStatusText(puzzleName);
  saveHuntState();
}

function colorInit() {
  setColorWithinPage(state.color);
  let el = document.getElementById('color-select');
  el.onchange = updateColor;
}

function setColorWithinPage(c) {
  document.documentElement.style.setProperty('--background', c);
  document.documentElement.style.setProperty('--incorrect', c === 'red' ? 'orange' : 'red');
  document.documentElement.style.setProperty('--correct', c === 'green' ? 'lime' : 'green');
  document.documentElement.style.setProperty('--link', c === 'blue' ? 'aqua' : 'blue');
  let el = document.getElementById('color-select');
  el.value = c;
  state.color = c;
}

function checkForChangedPuzzleNames() {
  let nameChanges = puzzleNameChangeList();
  for (let i of nameChanges) {
    for (let j of state.guesses) {
      if (j[1] === i[0]) {
        j[1] = i[1];
      }
    }
  }
}

function updateColor() {
  loadHuntState(true, false);
  let el = document.getElementById('color-select');
  setColorWithinPage(el.value);
  saveHuntState();
}

function initialHuntState() {
  return {
    guesses: [],
    color: 'white',
    start: Date.now()
  }
}

function getHuntState() {
  return localStorage.getItem('january-2021-hunt-state') ?
    JSON.parse(atob(localStorage.getItem('january-2021-hunt-state'))) : initialHuntState();
}

function loadHuntState(stateText, colorText) {
  let newState = getHuntState();
  for (let i in newState) {
    if (!(i === 'guesses')) {
      state[i] = newState[i];
    }
  }
  for (let i of newState.guesses) {
    if (!(state.guesses.map(j => j.join(',')).includes(i.join(',')))) {
      state.guesses.push(i);
    }
  }
  state.guesses.sort((a, b) => a[0] - b[0]);
  if (stateText) {
    let puzzleName = document.getElementsByTagName('h2')[0].innerHTML;
    updateStatusText(puzzleName);
  }
  if (colorText) {
    setColorWithinPage(state.color);
  }
}

function saveHuntState() {
  loadHuntState();
  localStorage.setItem('january-2021-hunt-state', btoa(JSON.stringify(state)));
}

let state;

window.onload = function () {
  state = getHuntState();
  checkForChangedPuzzleNames();
  saveHuntState();
  colorInit();
  let puzzleName = document.getElementsByTagName('h2')[0].innerHTML;
  if (!isUnlocked(puzzleName)) {
    document.body.innerHTML = '<h2 class="incorrect">You shouldn\'t access this puzzle yet!</h2>'
  }
  updateStatusText(puzzleName);
}

setInterval(loadHuntState, 10000);
