// Don't look at this file, it has spoilers.








































let data = [[1, 2, 3, 5, 8, 13, 21, 34], [1, 2, 4, 8, 16, 32], [1, 4, 9, 16, 25, 36], [1, 3, 6, 10, 15, 21, 28, 36]];

let ds = [{}, {}, {}, {}, {}];

let r = [...Array(20)].map((_, i) => '' + (i + 1));

window.onload = function () {
  for (let i = 1; i <= 4; i++) {
    onNewline(document.getElementById('a' + i), tryColorBoxes('a' + i, 'b' + i, i));
    onNewline(document.getElementById('b' + i), tryColorBoxes('b' + i, 'a' + i, i));
  }
}

let onNewline = function (a, f) {
  a.addEventListener('keyup', function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      event.preventDefault();
      f();
    }
  });
}

let tryColorBoxes = function (a, b, x) {
  return function () {
    if (document.getElementById(b).value === '') {
      document.getElementById(b).focus();
    } else if (document.getElementById(a).value === '') {
      document.getElementById(a).focus();
    } else {
      colorBoxes(x);
    }
  }
}

let colorBoxes = function (x) {
  let l = data[x - 1];
  let d = ds[x - 1];
  let a = document.getElementById('a' + x).value;
  let b = document.getElementById('b' + x).value;
  if (!r.includes(a) | !r.includes(b)) {
    alert('Put in valid inputs (integers between 1 and 20).');
    return;
  }
  a = +a;
  b = +b;
  let k = a + ', ' + b;
  d[k] = (d[k] || 0) + 1;
  let c = d[k];
  if (c > 20) {
    // Hint to what's going on (same error message as if one of the inputs under user control isn't big enough).
    alert('Put in valid inputs (integers between 1 and 20).');
    return;
  }
  // Only update UI stuff with valid values (by this point we know we won't return)
  document.getElementById('a' + x).value = '';
  document.getElementById('b' + x).value = '';
  document.getElementById('a' + x).focus();
  let rs = [a, b].concat([a + b, a + c, b + c].map(i => l.includes(i) ? '✅' : '❌'));
  let t = document.getElementById('o' + x).children[0];
  for (let i = 0; i < 5; i++) {
    let td = document.createElement('td');
    td.style = 'width: 50px; text-align: center;';
    td.innerText = rs[i];
    t.children[i].appendChild(td);
  }
}
