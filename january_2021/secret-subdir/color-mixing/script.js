// Spoilers









































let data = [[['darkgoldenrod', 'Dark Goldenrod', [184, 134, 11], 5, 13], ['seagreen', 'Sea Green', [46, 139, 87], 2, 8], ['darkturquoise', 'Dark Turquoise', [0, 206, 209], 5, 13], ['moccasin', 'Moccasin', [255, 228, 181], 3, 8], ['crimson', 'Crimson', [220, 20, 60], 6, 7], ['mediumslateblue', 'Medium Slate Blue', [123, 104, 238], 1, 15], ['midnightblue', 'Midnight Blue', [25, 25, 112], 1, 12], ['snow', 'Snow', [255, 250, 250], 3, 4], ['rosybrown', 'Rosy Brown', [188, 143, 143], 9, 9], ['gold', 'Gold', [255, 215, 0], 3, 4], ['firebrick', 'Firebrick', [178, 34, 34], 4, 9]], [['antiquewhite', 'Antique White', [250, 235, 215], 3, 12], ['lightpink', 'Light Pink', [255, 182, 193], 5, 9], ['skyblue', 'Sky Blue', [135, 206, 235], 7, 7], ['ivory', 'Ivory', [255, 255, 240], 4, 5], ['forestgreen', 'Forest Green', [34, 139, 34], 1, 11], ['brown', 'Brown', [165, 42, 42], 2, 5], ['olive', 'Olive', [128, 128, 0], 1, 5], ['limegreen', 'Lime Green', [50, 205, 50], 3, 9], ['palegreen', 'Pale Green', [152, 251, 152], 4, 9], ['lightcyan', 'Light Cyan', [224, 255, 255], 8, 9], ['black', 'Black', [0, 0, 0], 4, 5]], [['lightcoral', 'Light Coral', [240, 128, 128], 4, 10], ['navajowhite', 'Navajo White', [255, 222, 173], 10, 11], ['lightsalmon', 'Light Salmon', [255, 160, 122], 4, 11], ['springgreen', 'Spring Green', [0, 255, 127], 3, 11], ['deepskyblue', 'Deep Sky Blue', [0, 191, 255], 2, 11], ['beige', 'Beige', [245, 245, 220], 2, 5], ['gainsboro', 'Gainsboro', [220, 220, 220], 4, 9], ['darkgreen', 'Dark Green', [0, 100, 0], 2, 9], ['mistyrose', 'Misty Rose', [255, 228, 225], 1, 9], ['darkorange', 'Dark Orange', [255, 140, 0], 10, 10], ['steelblue', 'Steel Blue', [70, 130, 180], 1, 9]]];

let sorted = data.flatMap(i => i);

sorted.sort((x, y) => (x[0] > y[0]) ? 1 : ((y[0] > x[0]) ? -1 : 0));

let index = Object.fromEntries(sorted.map((i, ind) => [i[0], ind]));

let progress = (localStorage.getItem('progress') !== null) ? JSON.parse(localStorage.getItem('progress')) : [...Array(33)].map(() => [null, null]);

window.onload = function () {
  setupDropdowns([...Array(33)].map((_, i) => i));
}

let saveProgress = function () {
  localStorage.setItem('progress', JSON.stringify(progress));
}

let setupDropdowns = function (inds) {
  let selects = [...document.getElementsByTagName('select')].slice(3);
  for (let i of inds) {
    for (let s of selects) {
      let v = s.children[i];
      v.disabled = (progress[i][0] === null);
      v.innerText = (progress[i][0] || '?'.repeat(sorted[i][4])) + ' (' + (progress[i][1] || '?') + '/' + sorted[i][4] + ')';
    }
  }
}

let updateProgress = function (ind, vals) {
  let change = false;
  for (let i of [0, 1]) {
    if (vals[i] !== null && progress[ind][i] === null) {
      change = true;
      progress[ind][i] = vals[i];
    }
  }
  if (change) {
    saveProgress();
    setupDropdowns([ind]);
  }
}

let mix1 = function () {
  let selects = [...document.getElementsByTagName('select')].slice(0, 3).map(i => +i.value - 1);
  let inputs = selects.map((x, i) => data[i][x][2]);
  let result = [0, 1, 2].map(i => inputs.map(j => j[i]).reduce((a, b) => a + b) / 3);
  let dists = sorted.map(i => [0, 1, 2].map(j => Math.pow(i[2][j] - result[j], 2)).reduce((a, b) => a + b));
  let rout = dists.indexOf(Math.min(...dists));
  let out = sorted[rout];
  let res = document.getElementById('res1');
  res.style.color = out[0];
  res.innerText = 'Result: ' + out[1] + ' (' + out[3] + '/' + out[4] + ')';
  updateProgress(index[out[0]], [out[1], out[3]]);
}

let mix2 = function () {
  let selects = [...document.getElementsByTagName('select')].slice(3).map(i => +i.value - 1);
  if (selects.includes(-1)) {
    alert('You can only mix known colors.');
    return;
  }
  let inputs = selects.map(x => sorted[x][2]);
  let result = [0, 1, 2].map(i => inputs.map(j => j[i]).reduce((a, b) => a + b) / 3);
  let dists = sorted.map(i => [0, 1, 2].map(j => Math.pow(i[2][j] - result[j], 2)).reduce((a, b) => a + b));
  let rout = dists.indexOf(Math.min(...dists));
  let out = sorted[rout];
  let res = document.getElementById('res2');
  res.style.color = out[0];
  res.innerText = 'Result: ' + out[1] + ' (' + (progress[rout][1] || '?') + '/' + out[4] + ')';
  updateProgress(index[out[0]], [out[1], null]);
}
