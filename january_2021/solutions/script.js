// This file is from solutions. Do not look at it.








































let secretSolutionsFunctionDontCallThisInConsole = (function () {
  // This function is part of solutions and this is filler
  
  
  
  
  
  
  
  
  
  
  
  let feederTable = {
    'Meta 0: Zero-Sum': ['Interlocking', 'Easy as 1, 2, 3, 4, ...', 'Zero Pole', 'Redacted Sudoku', 'Debugging'],
    'Meta 1: First': ['Interlocking', 'Upright', 'Inserted', 'Password Reset', 'Roots'],
    'Meta 2: Doubles': ['Easy as 1, 2, 3, 4, ...', 'Upright', 'Polynomial Growth', 'Strange Arithmetic', 'A Special Puzzle'],
    'Meta 3: Sequences': ['Zero Pole', 'Inserted', 'Polynomial Growth', 'Synesthesia', 'Four in One'],
    'Meta 4: Traveling': ['Redacted Sudoku', 'Password Reset', 'Strange Arithmetic', 'Synesthesia', 'Shells'],
    'Meta 5: Vowels': ['Debugging', 'Roots', 'A Special Puzzle', 'Four in One', 'Shells'],
    'Metameta': ['Meta 0: Zero-Sum', 'Meta 1: First', 'Meta 2: Doubles', 'Meta 3: Sequences', 'Meta 4: Traveling', 'Meta 5: Vowels']
  }
  let words = null;
  let tempPassword = null;
  let checkPassword = function () {
    let responseDiv = document.getElementById('response');
    for (let i of [...response.children]) {
      responseDiv.removeChild(i);
    }
    if (!(words.includes(tempPassword))) {
      let s = document.createElement('span');
      s.className = 'incorrect';
      s.innerHTML = tempPassword + ': Invalid password! Violates Rule 0: Passwords must be SOWPODS words.';
      responseDiv.appendChild(s);
    } else {
      let ruleConstraints = [
        (x => x.length >= 5), (x => x[x.length - 1] === 'E'), (x => 'AEILNORSTU'.includes(x[0])),
        (x => !(words.includes(x.slice(1)))), (x => !(x.includes('A'))),
        (x => [...Array(x.length - 1)].some((_, i) => !('AEIOU'.includes(x[i]) || 'AEIOU'.includes(x[i + 1]))))
      ];
      let results = ruleConstraints.map(f => f(tempPassword));
      if (results.includes(false)) {
        let s = document.createElement('span');
        s.className = 'incorrect';
        s.innerHTML = tempPassword + ': Invalid password! Violates Rule ' + (results.indexOf(false) + 1) + '.';
        responseDiv.appendChild(s);
      } else {
        let specialString = '✓✓✗✓✗✓✗?✗?✗???????????????????'
        let s = document.createElement('span');
        s.className = 'correct';
        s.innerHTML = tempPassword + ': Valid password!';
        responseDiv.appendChild(s);
        let t = document.createElement('table');
        t.style.border = 'none';
        t.style.borderCollapse = 'collapse';
        let tb = document.createElement('tbody');
        for (let i of [0, 1, 2, 3, 4, 5]) {
          let tr = document.createElement('tr');
          let td = document.createElement('td');
          td.innerHTML = 'Rule ' + (i + 1) + ':';
          tr.appendChild(td);
          for (let j of [0, 1, 2, 3, 4]) {
            td = document.createElement('td');
            td.style.width = '20px';
            td.style.textAlign = 'center';
            let c = specialString[i * 5 + j];
            td.innerHTML = c;
            if (c === '✗') {
              td.className = 'incorrect';
            }
            if (c === '✓') {
              td.className = 'correct';
            }
            tr.appendChild(td);
          }
          td = document.createElement('td');
          td.style.width = '20px';
          td.style.textAlign = 'center';
          td.innerHTML = '✓';
          td.className = 'correct';
          td.style.borderLeft = '1px solid black';
          tr.appendChild(td);
          tb.appendChild(tr);
        }
        t.appendChild(tb);
        responseDiv.appendChild(t);
      }
    }
    tempPassword = null;
  }
  let strangeArithmeticWords = ['one', 'thousand', 'randomly', 'assigned', 'numbers', 'twenty', 'four', 'unassigned', 'cause', 'errors'];
  let strangeArithmeticErrorList = ['-1114', '-1001', '-913', '-805', '-715', '-606', '-517', '-421', '-305', '-219', '-120', '009', '115', '214', '313', '401', '518', '611', '705', '818', '918', '1015', '1118'];
  let strangeArithmeticNumbers = [
    836, 949, 52, 760, 718, 286, 565, 70, 112, 668, 821, 589, 240, 878, 319, 12, 581, 25, 164, 847,
    988, 332, 307, 646, 788, 578, 411, 58, 409, 81, 160, 429, 695, 220, 914, 284, 203, 29, 470, 367,
    490, 108, 833, 154, 875, 918, 814, 802, 291, 271, 720, 254, 472, 501, 929, 710, 627, 885, 818, 325,
    749, 794, 517, 134, 228, 934, 932, 435, 491, 853, 585, 341, 169, 468, 642, 15, 305, 731, 744, 534,
    601, 159, 645, 63, 475, 897, 900, 270, 127, 915, 424, 281, 911, 828, 701, 463, 119, 196, 495, 156,
    370, 224, 100, 705, 84, 863, 239, 776, 997, 974, 408, 34, 318, 422, 115, 485, 294, 571, 494, 121,
    74, 707, 883, 109, 249, 64, 724, 913, 253, 561, 931, 354, 120, 593, 852, 520, 201, 26, 274, 656,
    238, 152, 364, 125, 91, 102, 763, 761, 871, 732, 365, 745, 742, 155, 124, 909, 388, 416, 526, 894,
    659, 783, 751, 67, 360, 778, 881, 267, 525, 614, 391, 579, 574, 250, 541, 279, 412, 851, 395, 769,
    373, 380, 740, 385, 202, 857, 173, 960, 925, 1005, 535, 95, 898, 105, 952, 170, 907, 994, 824, 483,
    577, 62, 321, 598, 302, 644, 933, 743, 232, 889, 303, 712, 635, 189, 19, 774, 548, 133, 88, 14,
    762, 730, 663, 757, 297, 706, 868, 782, 168, 678, 587, 466, 608, 522, 358, 576, 437, 471, 837, 210,
    966, 835, 728, 142, 864, 620, 607, 825, 823, 992, 381, 252, 592, 450, 330, 692, 787, 444, 92, 386,
    700, 869, 621, 902, 289, 80, 512, 939, 662, 262, 451, 772, 856, 415, 588, 273, 955, 816, 192, 575,
    999, 434, 244, 605, 28, 879, 811, 849, 181, 447, 921, 431, 187, 264, 179, 136, 945, 758, 948, 433,
    353, 68, 226, 916, 596, 972, 657, 16, 55, 850, 993, 47, 32, 185, 982, 667, 401, 523, 671, 489,
    126, 72, 755, 890, 93, 507, 658, 793, 69, 229, 212, 516, 114, 188, 820, 930, 301, 919, 842, 186,
    590, 306, 651, 602, 66, 795, 131, 505, 35, 867, 665, 969, 661, 716, 923, 746, 268, 510, 137, 940,
    962, 300, 366, 551, 741, 178, 827, 288, 407, 773, 947, 27, 22, 580, 813, 713, 727, 234, 865, 638,
    685, 777, 440, 79, 652, 368, 848, 524, 209, 904, 147, 649, 308, 927, 709, 314, 550, 729, 247, 687,
    609, 905, 984, 38, 316, 405, 230, 690, 122, 423, 190, 404, 723, 726, 163, 654, 810, 895, 256, 243,
    375, 392, 595, 533, 538, 806, 257, 420, 323, 530, 1001, 801, 719, 995, 1007, 467, 546, 674, 333, 882,
    752, 691, 118, 398, 426, 860, 780, 176, 980, 394, 351, 633, 941, 539, 428, 748, 950, 342, 944, 912,
    248, 634, 276, 798, 708, 866, 371, 78, 822, 632, 920, 497, 753, 349, 876, 647, 481, 418, 476, 486,
    215, 94, 217, 606, 567, 139, 116, 619, 715, 903, 290, 754, 922, 998, 180, 379, 340, 23, 956, 337,
    1004, 432, 582, 161, 906, 13, 736, 419, 880, 862, 684, 556, 390, 282, 313, 452, 255, 150, 352, 618,
    542, 702, 682, 106, 963, 942, 874, 454, 148, 1011, 245, 599, 195, 459, 987, 628, 959, 555, 143, 815,
    312, 564, 767, 781, 499, 469, 698, 527, 219, 872, 272, 175, 964, 361, 1000, 393, 521, 174, 331, 130,
    790, 672, 803, 910, 961, 528, 573, 221, 443, 399, 807, 172, 640, 296, 643, 617, 529, 750, 908, 771,
    384, 519, 406, 200, 983, 826, 311, 258, 427, 675, 937, 396, 808, 553, 711, 165, 502, 532, 335, 563,
    779, 784, 458, 260, 610, 430, 456, 492, 1009, 53, 870, 928, 57, 493, 17, 722, 834, 622, 600, 442,
    266, 355, 275, 438, 721, 237, 562, 473, 1006, 545, 326, 688, 20, 50, 543, 378, 926, 329, 376, 540,
    655, 344, 213, 75, 886, 455, 117, 484, 389, 789, 839, 1010, 453, 699, 402, 572, 446, 153, 888, 197,
    46, 83, 954, 625, 336, 348, 799, 791, 269, 465, 569, 18, 292, 770, 735, 144, 990, 482, 295, 259,
    967, 227, 951, 686, 973, 830, 317, 477, 111, 40, 660, 829, 103, 135, 629, 283, 285, 498, 1012, 552,
    397, 985, 703, 261, 854, 496, 107, 206, 537, 436, 322, 198, 518, 957, 845, 536, 666, 817, 734, 236,
    568, 387, 33, 383, 737, 345, 54, 129, 377, 514, 457, 809, 511, 958, 694, 570, 917, 975, 448, 157,
    479, 504, 141, 208, 140, 251, 968, 669, 146, 626, 41, 804, 39, 831, 855, 82, 44, 664, 461, 184,
    151, 843, 338, 357, 241, 989, 372, 884, 31, 841, 597, 946, 216, 785, 859, 603, 362, 462, 800, 873,
    71, 346, 339, 594, 90, 309, 515, 24, 637, 414, 766, 936, 693, 132, 630, 673, 310, 104, 76, 901,
    61, 138, 480, 324, 225, 680, 611, 899, 56, 965, 896, 382, 554, 205, 350, 840, 42, 653, 586, 861,
    566, 425, 623, 838, 679, 113, 199, 182, 51, 413, 996, 334, 96, 359, 943, 59, 506, 704, 299, 87,
    464, 242, 970, 891, 263, 223, 636, 513, 503, 697, 207, 544, 805, 549, 976, 298, 30, 171, 211, 738,
    986, 246, 277, 683, 583, 98, 977, 167, 166, 531, 347, 460, 858, 971, 689, 73, 796, 304, 356, 670,
    21, 764, 615, 177, 101, 717, 714, 89, 616, 877, 86, 1003, 65, 441, 488, 756, 584, 559, 474, 343,
    328, 624, 938, 327, 792, 1008, 765, 85, 648, 978, 558, 500, 43, 613, 369, 676, 235, 739, 45, 36,
    439, 278, 410, 48, 696, 363, 478, 222, 204, 759, 417, 1002, 60, 786, 953, 991, 797, 560, 37, 123,
    924, 287, 981, 641, 846, 449, 421, 162, 547, 149, 193, 557, 374, 612, 191, 775, 768, 819, 844, 183,
    812, 935, 214, 320, 97, 979, 158, 77, 194, 99, 887, 681, 650, 892, 832, 293, 218, 231, 604, 631,
    128, 233, 145, 445, 639, 49, 400, 725, 733, 280, 487, 315, 509, 110, 591, 677, 747, 265, 893, 508,
  ];
  let expandNumber = function (x) {
    return x + ' (' + [...x].map(i => strangeArithmeticWords[+i]).join(' ') + ')';
  }
  let toStrangeArithmeticErrorNumber = function (x) {
    let index = (x + 11) % 1024;
    if (x == 403) {
      return '?';
    } else if (0 <= index && index < strangeArithmeticErrorList.length) {
      return strangeArithmeticErrorList[(x + 11) % 1024];
    }
  }
  let doArithmetic = function () {
    let responseDiv = document.getElementById('response');
    for (let i of [...response.children]) {
      responseDiv.removeChild(i);
    }
    let leftNumber = document.getElementById('left-number').value;
    let operator = document.getElementById('operator').value;
    let rightNumber = document.getElementById('right-number').value;
    let error;
    let result;
    if (!(leftNumber.match(/^[0-9]{3}$/) && rightNumber.match(/^[0-9]{3}$/))) {
      error = true;
      result = 'Error: Invalid inputs (both numbers must be three digits).'
    } else {
      let leftReal = strangeArithmeticNumbers[+leftNumber];
      let rightReal = strangeArithmeticNumbers[+rightNumber];
      let f = {'+': (x, y) => x + y, '-': (x, y) => x - y, '×': (x, y) => x * y}[operator];
      let resultReal = (f(leftReal, rightReal) % 1024 + 1024) % 1024;
      if (!strangeArithmeticNumbers.includes(resultReal)) {
        error = true;
        result = 'Error (' + toStrangeArithmeticErrorNumber(resultReal) + ')'
      } else {
        error = false;
        partial = strangeArithmeticNumbers.indexOf(resultReal);
        resultNumber = '' + '000'.slice(('' + partial).length) + partial;
        result = [expandNumber(leftNumber), operator, expandNumber(rightNumber), '=', expandNumber(resultNumber)].join(' ');
      }
    }
    let s = document.createElement('span');
    s.className = error ? 'incorrect' : '';
    s.innerHTML = result;
    responseDiv.appendChild(s);
  }
  let colors = ['aqua', 'blue', 'fuchsia', 'green', 'lime', 'orange', 'purple', 'red', 'white', 'yellow'];
  let color = null;
  let setColor = function () {
    let num = colors.indexOf(color) + 1;
    let a = document.createElement('audio');
    a.controls = true;
    let s = document.createElement('source');
    s.type = 'audio/wav';
    s.src = 'resources/synesthesia_' + num + '.wav';
    a.appendChild(s);
    document.getElementsByTagName('h2')[0].after(a);
  }
  
  return function (x, y) {
    if (x === 'titleList') {
      return [
        'Interlocking', 'Upright', 'Inserted', 'Password Reset', 'Roots',
        'Easy as 1, 2, 3, 4, ...', 'Polynomial Growth', 'Strange Arithmetic', 'A Special Puzzle', 'Zero Pole',
        'Synesthesia', 'Four in One', 'Redacted Sudoku', 'Shells', 'Debugging'
      ];
    }
    if (x === 'metaList') {
      return ['Meta 0: Zero-Sum', 'Meta 1: First', 'Meta 2: Doubles', 'Meta 3: Sequences', 'Meta 4: Traveling', 'Meta 5: Vowels'];
    }
    if (x === 'metametaList') {
      return ['Metameta'];
    }
    if (x === 'feeders') {
      return feederTable[y];
    }
    if (x === 'metaArea') {
      if (y === 'Metameta') {
        return isUnlocked(y);
      }
      let puzzles = feederTable[y];
      return isUnlocked(puzzles[(y === 'Meta 0: Zero-Sum') ? puzzles.length - 1 : 0]);
    }
    if (x === 'bare') {
      return y.toLowerCase().replace(/[ -]/g, '_').replace(/[^a-z0-9_]/g, '').replace(/^_+/g, '').replace(/_+$/g, '');
    }
    if (x === 'respond') {
      let puzzleName = document.getElementsByTagName('h2')[0].innerHTML;
      if (puzzleName === 'Password Reset') {
        tempPassword = document.getElementById('password').value.replace(/[^A-Za-z]/g, '').toUpperCase();
        if (words !== null) {
          checkPassword();
        }
      }
      if (puzzleName === 'Strange Arithmetic') {
        doArithmetic();
      }
    }
    if (x === 'setWords') {
      words = y;
      if (tempPassword !== null) {
        checkPassword();
      }
    }
    if (x === 'setupSynesthesia') {
      color = localStorage.getItem('january-2021-hunt-state') ? JSON.parse(atob(localStorage.getItem('january-2021-hunt-state'))).color : 'white';
      setColor();
      setInterval(function () {
        newColor = document.documentElement.style.getPropertyValue('--background');
        if (newColor !== color) {
          document.body.removeChild(document.getElementsByTagName('audio')[0]);
          color = newColor;
          setColor();
        }
      }, 50);
    }
  }
})();

let getUnlockTime = function (x) {
  if (state.unlockAllCheat) {
    return state.start;
  }
  if (x === 'List of Puzzles' || x === 'Explanation') {
    return state.start;
  }
  let titleList = secretSolutionsFunctionDontCallThisInConsole('titleList');
  if (titleList.includes(x)) {
    let unlockPer = 2.16e7;
    let puzzleIndex = titleList.indexOf(x);
    let solves = state.guesses.filter(x => x[3] === true).map(x => [x[0], titleList.includes(x[1]) ? 1 : 0.5]);
    solves.push([Infinity, 0]);
    let originalStart = state.start;
    let start = state.start;
    let score = 2.5 + ('freeUnlocks' in state ? state.freeUnlocks : 0);
    for (let solve of solves) {
      let unlockTime = originalStart + unlockPer * (puzzleIndex - score);
      if (unlockTime <= solve[0]) {
        return Math.max(start, unlockTime);
      }
      start = solve[0];
      score += solve[1];
    }
  } else {
    let feeders = secretSolutionsFunctionDontCallThisInConsole('feeders', x);
    let feederSolves = state.guesses.filter(x => feeders.includes(x[1]) && x[3] === true);
    // All but 2 feeders needed.
    return (feeders.every(isUnlocked) && feederSolves.length >= feeders.length - 2) ? feederSolves[feeders.length - 3][0] : Date.now() + 3.6e6; 
  }
}

let resetHuntState = function () {
  state = initialHuntState();
  localStorage.setItem('january-2021-hunt-state', btoa(JSON.stringify(state)));
  window.location.reload(true);
}

let addFreeUnlock = function () {
  // Takes into account answers submitted in intervening time
  loadHuntState();
  state.freeUnlocks = ('freeUnlocks' in state ? state.freeUnlocks : 0) + 1;
  localStorage.setItem('january-2021-hunt-state', btoa(JSON.stringify(state)));
  window.location.reload(true);
}

let unlockAll = function () {
  // Takes into account answers submitted in intervening time
  loadHuntState();
  state.unlockAllCheat = true;
  localStorage.setItem('january-2021-hunt-state', btoa(JSON.stringify(state)));
  window.location.reload(true);
}

let updateHuntHeader = function (x) {
  let el = document.getElementById('hunt-status');
  el.innerHTML = getHuntStatusText();
  let el2 = document.getElementsByClassName('header')[0];
  let metametaDone = isSolved('Metameta');
  if (metametaDone && el2.children.length === 1) {
    let metametaSolveTime = state.guesses.filter(x => x[1] === 'Metameta' && x[3] === true)[0][0];
    let diff = (metametaSolveTime - state.start) / 1000;
    let days = Math.floor(diff / 86400);
    let hours = Math.floor(diff / 3600) % 24;
    let minutes = Math.floor(diff / 60) % 60;
    let seconds = Math.floor(diff) % 60;
    let parts = [days, hours, minutes, seconds];
    while (parts[0] === 0) {
      parts.shift();
    }
    let time = parts[0] + ':' + parts.slice(1).map(x => '' + x).map(x => '00'.slice(x.length) + x).join(':');
    el2.appendChild(document.createElement('br'));
    let s = document.createElement('span');
    s.className = 'correct';
    s.innerHTML = 'Congratulations on completing the hunt in ' + time + '!';
    el2.appendChild(s);
  }
  if (!metametaDone && el2.children.length > 1) {
    while (el2.children.length > 1) {
      el2.removeChild(el2.children[el2.children.length - 1]);
    }
  }
}

let puzzleNameChangeList = function () {
  return [
    ['Meta 0', 'Meta 0: Zero-Sum'],
    ['Meta 1', 'Meta 1: First'],
    ['Meta 2', 'Meta 2: Doubles'],
    ['Meta 3', 'Meta 3: Sequences'],
    ['Meta 4', 'Meta 4: Traveling'],
    ['Meta 5', 'Meta 5: Vowels']
  ];
}

let getHuntStatusText = function (x) {
  let types = [['Puzzle', 'titleList'], ['meta', 'metaList'], ['metameta', 'metametaList']];
  return types.map(
    x => [x[0], secretSolutionsFunctionDontCallThisInConsole(x[1])]
  ).map(
    x => [x[0], x[1].filter(isSolved).length, x[1].filter(isUnlocked).length]
  ).filter(x => x[2] > 0).map(x => x[0] + 's solved/unlocked: ' + x[1] + '/' + x[2]).join(', ');
}

let maybeGetResponseFromBackend = function (e) {
  if (e.keyCode === 13) {
    getResponseFromBackend();
  }
}

let getResponseFromBackend = function () {
  secretSolutionsFunctionDontCallThisInConsole('respond');
}

window.addEventListener('load', function() {
  // This function is part of solutions and this is filler just in case this shows up somehow?
  
  
  
  
  
  
  
  
  
  
  let puzzleName = document.getElementsByTagName('h2')[0].innerHTML;
  if (puzzleName === 'List of Puzzles') {
    let puzzleDiv = document.getElementById('puzzles');
    let puzzles = secretSolutionsFunctionDontCallThisInConsole('titleList');
    let metas = secretSolutionsFunctionDontCallThisInConsole('metaList').concat(
      secretSolutionsFunctionDontCallThisInConsole('metametaList'));
    let shownMetas = metas.filter(x => secretSolutionsFunctionDontCallThisInConsole('metaArea', x));
    for (let x of shownMetas) {
      if (x !== shownMetas[0]) {
        puzzleDiv.appendChild(document.createElement('hr'));
      }
      let feeders = secretSolutionsFunctionDontCallThisInConsole('feeders', x).filter(isUnlocked);
      let ul = document.createElement('ul');
      for (let f of feeders) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = secretSolutionsFunctionDontCallThisInConsole('bare', f) + '.html';
        a.innerHTML = f;
        li.appendChild(a);
        if (isSolved(f)) {
          let s = document.createElement('span');
          s.className = 'correct';
          s.innerHTML = ' ' + getAnswer(f);
          li.appendChild(s);
        }
        ul.appendChild(li);
      }
      puzzleDiv.appendChild(ul);
      if (isUnlocked(x)) {
        let span = document.createElement('span');
        let meta = document.createElement('a');
        meta.href = secretSolutionsFunctionDontCallThisInConsole('bare', x) + '.html';
        meta.innerHTML = x;
        span.appendChild(meta);
        if (isSolved(x)) {
          let s = document.createElement('span');
          s.className = 'correct';
          s.innerHTML = ' ' + getAnswer(x);
          span.appendChild(s);
        }
        puzzleDiv.appendChild(span);
      }
    }
  }
  if (puzzleName === 'Password Reset') {
    let client = new XMLHttpRequest();
    client.open('GET', 'solutions/files/sowpods.txt');
    client.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        secretSolutionsFunctionDontCallThisInConsole('setWords', client.responseText.split('\n').filter(x => x));
      }
    }
    client.send();
  }
  if (puzzleName === 'Synesthesia') {
    secretSolutionsFunctionDontCallThisInConsole('setupSynesthesia');
  }
});
