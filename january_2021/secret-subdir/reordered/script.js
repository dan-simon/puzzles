// Don't look at this, we'll obfuscate it or make it server-side.


















let alphaUpper = [
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  'ETAOINSHRDLUCMFWYPVBGKJQXZ',
  'QWERTYUIOPASDFGHJKLZXCVBNM',
  'THEQUICKBROWNFXJMPSVLAZYDG'
];

let alphaLower = [
  'abcdefghijklmnopqrstuvwxyz',
  'etaoinshrdlucmfwypvbgkjqxz',
  'qwertyuiopasdfghjklzxcvbnm',
  'thequickbrownfxjmpsvlazydg'
];

function getInputs(n) {
  return [document.getElementById(n + 'a'), document.getElementById(n + 'b')];
}

function isLetter(c) {
  return c.length === 1 && (('A' <= c && c <= 'Z') || ('a' <= c && c <= 'z'));
}

function getCVal(c, n) {
  if ('A' <= c && c <= 'Z') {
    return alphaUpper[n - 1].indexOf(c);
  } else if ('a' <= c && c <= 'z') {
    return alphaLower[n - 1].indexOf(c);
  }
}

function getRes(n) {
  let inputs = [document.getElementById(n + 'a'), document.getElementById(n + 'b')];
  let vals = inputs.map(i => i.value);
  if (!vals.every(isLetter)) {
    return '(put single letters in both input boxes)';
  } else {
    return getCVal(vals[0], n) - getCVal(vals[1], n);
  }
}

function recalc(i) {
  return () => document.getElementById(i + 'c').innerText = getRes(i);
}

window.onload = function () {
  for (let i = 1; i <= 4; i++) {
    let inputs = getInputs(i);
    inputs.forEach(j => j.oninput = recalc(i));
  }
}
