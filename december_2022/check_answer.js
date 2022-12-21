// Answer checker, not secure

let bcrypt = dcodeIO.bcrypt;

let hashesList = {
  "1": {
    "salt": "$2a$10$x2zzcQiylTCokdN8I120Ce",
    "$2a$10$x2zzcQiylTCokdN8I120CeydSKOY/XKoJ0Tf2vu.9iURrHIZ6aXK2": true
  },
  "2": {
    "salt": "$2a$10$CA/jScctiRn8elPPWZ8aUu",
    "$2a$10$CA/jScctiRn8elPPWZ8aUu9PA5wK/ThmWYELatEWB6v0QuWsh3sim": true
  },
  "3": {
    "salt": "$2a$10$l.crkZ85bM.bCs9/JL6/G.",
    "$2a$10$l.crkZ85bM.bCs9/JL6/G.jFkXExS2B.rCI5VhslGbSYjUsKUVK06": true,
    "$2a$10$l.crkZ85bM.bCs9/JL6/G.1ZriTtuElkOk72u/49oK87fCwDat2oi": "VHJ5IGxvb2tpbmcgdGhpcyB1cCBmb3IgdGhlIG5leHQgc3RlcCBvZiB0aGUgcHV6emxlLg=="
  },
  "4": {
    "salt": "$2a$10$Osf8a9Bjv1jJJepnNpy9R.",
    "$2a$10$Osf8a9Bjv1jJJepnNpy9R./AG8iBF/Y.9xvo2R/sijcmxbIiMi.o.": true
  },
  "5": {
    "salt": "$2a$10$HOtOgoz60kHc0RPfAYW55u",
    "$2a$10$HOtOgoz60kHc0RPfAYW55u64Yppa5YmzTTfbfZEidSm4PgmYSjkSm": true
  },
  "6": {
    "salt": "$2a$10$RfMUgHXw/1xjyA5nnSs2p.",
    "$2a$10$RfMUgHXw/1xjyA5nnSs2p.mVk/n/fhQdHSlxQY78oFxNzQG2Ilynm": true
  },
  "2a": {
    "salt": "$2a$10$BaVshbf76aeWNjv5ygSz7u",
    "$2a$10$BaVshbf76aeWNjv5ygSz7u0SEHqM13q8SLJI3L056Rghz0Fwce4qO": true
  },
  "2b": {
    "salt": "$2a$10$yL6p2f1XmiGEiTAU/8y8iu",
    "$2a$10$yL6p2f1XmiGEiTAU/8y8iu78lrG4FDpkexpik5hPmCPU9B7J7qeg2": true
  },
  "2c": {
    "salt": "$2a$10$7SZOnOPGRY/dRwYuHOGO/e",
    "$2a$10$7SZOnOPGRY/dRwYuHOGO/eTlrlx7PXkstTkkJnCZiMkkP22BHZEH2": true
  },
  "2d": {
    "salt": "$2a$10$9hqmOHTiugWTUfkmey95aO",
    "$2a$10$9hqmOHTiugWTUfkmey95aOKRmhvabO7l9PAIfYkvoOvNZFAd28thO": true
  },
  "2e": {
    "salt": "$2a$10$qYiom5xRh8Qtbkp6y.ln8O",
    "$2a$10$qYiom5xRh8Qtbkp6y.ln8O5tbWizntMr46yEjGpFQpRrZxNvFk0tC": true
  },
  "2f": {
    "salt": "$2a$10$EJd8Qs36yMHROs68/2G7Lu",
    "$2a$10$EJd8Qs36yMHROs68/2G7LuQgA.1K2Ov0RfU9Plqutv0SFM/ArNrvC": true
  },
  "2g": {
    "salt": "$2a$10$Bwi2wFl9mBib7jpvFVlGZ.",
    "$2a$10$Bwi2wFl9mBib7jpvFVlGZ.qCp6GQZMCTgKFdGZjZusdLdkgDjUdna": true
  },
  "2h": {
    "salt": "$2a$10$nAl1RjOmktB0xeIi8.wEwe",
    "$2a$10$nAl1RjOmktB0xeIi8.wEweFZKVhfU4oUEntyVjr.cXWB.XX8zpHMS": true
  },
  "2i": {
    "salt": "$2a$10$x/FbN6RdRZEHGZiYU5dCbO",
    "$2a$10$x/FbN6RdRZEHGZiYU5dCbOBgc6fopyJVo9AFWIud/HSWLrcvhdgku": true
  }
};

let aliases = {
  '2': ['2i'],
  '2i': ['2']
}

let isMaybeNumber = {
  '2a': true,
  '2b': true,
  '2c': true,
  '2d': true,
  '2e': true,
  '2f': true,
  '2g': true,
  '2h': true,
  '2i': true,
};

let checkAnswer = function (x) {
  let answer = document.getElementById('answer-' + x).value;
  let normalizedForm = answer.replace(isMaybeNumber ? /[^A-Za-z0-9]/g : /[^A-Za-z]/g, '').toUpperCase();
  bcrypt.hash(normalizedForm, hashesList[x].salt, function (err, hash) {
    let el = document.getElementById('check-answer-result-' + x);
    if (hashesList[x][hash] === true) {
      let progress = getProgress();
      progress[x] = normalizedForm;
      if (x in aliases) {
        for (i of aliases[x]) {
          progress[i] = normalizedForm;
        }
      }
      localStorage.setItem('dec-2022-progress', JSON.stringify(progress));
      update();
    } else if (hash in hashesList[x]) {
      el.style.color = 'blue';
      el.innerText = normalizedForm + ': ' + atob(hashesList[x][hash]);
    } else {
      el.style.color = 'red';
      el.innerText = normalizedForm + ': Incorrect.';
    }
  });
};

window.getProgress = () => JSON.parse(localStorage.getItem('dec-2022-progress')) || {};

let update = function () {
  let progress = getProgress();
  for (let i of document.getElementsByClassName('answer-span')) {
    let c = [...i.classList].filter(i => i.startsWith('answer-span-'))[0].split('-')[2];
    if (c in progress) {
      i.style.color = 'green';
      i.innerText = 'Solved: ' + progress[c];
    }
  }
}

let checkAnswerFunction = x => function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    checkAnswer(x);
  }
};

let setInputs = function () {
  window.addEventListener('keyup', function (event) {
    if (event.keyCode === 13 && event.target.id) {
      if (event.target.id.includes('answer-')) {
        checkAnswer(event.target.id.split('-')[1]);
      }
      if (event.target.id.includes('input-')) {
        submit(event.target.id.split('-')[1]);
      }
    }
  });
}
  
window.addEventListener('load', update);

window.addEventListener('load', setInputs);


