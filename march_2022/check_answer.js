// Answer checker, not secure

let bcrypt = dcodeIO.bcrypt;

let hashesList = {
  "1": {
    "salt": "$2a$10$QvQG/CCZ9uWN6yjd21noNe",
    "$2a$10$QvQG/CCZ9uWN6yjd21noNeQNAviPUmXt.Z0iPSxtqT/Ey4pV72Woe": true,
    "$2a$10$QvQG/CCZ9uWN6yjd21noNe5CiuNsSQY1ehVTiCF0cyFgsy4/KntSm": "Q2xvc2UhIFRyeSB0aGUgc2FtZSBmaXJzdCB3b3JkIGJ1dCBhIGRpZmZlcmVudCBzZWNvbmQgd29yZC4="
  },
  "2": {
    "salt": "$2a$10$jBptR0ijlt/EZcrIG.L79O",
    "$2a$10$jBptR0ijlt/EZcrIG.L79O.fEZ0LT1Mlg.GmD2kZrK30j0hgWIHvG": true
  },
  "3": {
    "salt": "$2a$10$sbtYLbTMT6l/hHJNr0p4I.",
    "$2a$10$sbtYLbTMT6l/hHJNr0p4I.Hh3IbkF9vcjTdEHielpJUHtx7nNAGNa": true
  },
  "4": {
    "salt": "$2a$10$6gLrKrK/LJBqcsaytufXIe",
    "$2a$10$6gLrKrK/LJBqcsaytufXIeWKIXJyIXfEXTWyKmo8xMzO6TxrRXnzO": true
  },
  "5": {
    "salt": "$2a$10$s7I8oFh5Dx4NDMRP8AVLfe",
    "$2a$10$s7I8oFh5Dx4NDMRP8AVLfeQL3iWlKC3M18oYWaVWlXdmJYYCM2Z72": true
  },
  "6": {
    "salt": "$2a$10$TT0CMdDiguwttCbjq/T71O",
    "$2a$10$TT0CMdDiguwttCbjq/T71OwubGWgXUdLeA1N7im228aqe0Ui9zPOe": true
  },
  "7": {
    "salt": "$2a$10$JIP8MD0LE0HS257WHa7Nlu",
    "$2a$10$JIP8MD0LE0HS257WHa7Nlugq8.x0BPVhCo4uySVS2uATIMeWmZkX.": true,
    "$2a$10$JIP8MD0LE0HS257WHa7NluCY8U7VRt.JE6EQ6i31zME0WEki/X9iG": "Q2xvc2UhIFRyeSB0cmFuc2xhdGluZy4="
  },
  "8": {
    "salt": "$2a$10$jM27h5eZyPIJNAuEW6I1tO",
    "$2a$10$jM27h5eZyPIJNAuEW6I1tObdA3/rs0OFX/8ZxSyzP3DzickOkOIuq": true,
    "$2a$10$jM27h5eZyPIJNAuEW6I1tORprRpyiUG6p2cs2a1A7wh1p3tQ.MHAW": "Q2xvc2UhIFRyeSBzZWFyY2hpbmcgdGhpcywgYW5kIHRoZW4gZW50ZXJpbmcgc29tZXRoaW5nIHdpdGggZml2ZSBsZXR0ZXJzLg=="
  },
  "9": {
    "salt": "$2a$10$xjeFKZ9PLkxWC2TEKyAwAO",
    "$2a$10$xjeFKZ9PLkxWC2TEKyAwAO3YdVm8I98mm2ILXQbsCaL/TBXyNGRxy": true
  },
  "10": {
    "salt": "$2a$10$BvYvekgFMIfAEQLQukRqmO",
    "$2a$10$BvYvekgFMIfAEQLQukRqmOf9WceAjHJXoLEhIY0WqWHQ7Hs07tfrS": true
  },
  "11": {
    "salt": "$2a$10$vEmF8hnX6yRps.cT01ypBe",
    "$2a$10$vEmF8hnX6yRps.cT01ypBeVuDQfWEzuLfnyErEFTUpuBzZsPY13W.": true
  },
  "12": {
    "salt": "$2a$10$JtCn9XPSeCypXwrPtnFXS.",
    "$2a$10$JtCn9XPSeCypXwrPtnFXS.toYlZRt3rjsPLcu06AthrG7cDt3QFtC": true,
    "$2a$10$JtCn9XPSeCypXwrPtnFXS.OZKk1kNWjiyV.NS22JeUaZYaATtmUtK": "Q2xvc2UhIFRyeSBleHBhbmRpbmcgdGhpcyBhYmJyZXZpYXRpb24u",
    "$2a$10$JtCn9XPSeCypXwrPtnFXS.drR8ZAKSdjtKFITUB9kP7nWeHAXR6ja": "Q2xvc2UhIFRyeSB1c2luZyB0aGUgZmxhdm9ydGV4dC4="
  },
  "13": {
    "salt": "$2a$10$NQUMyPFrUgrnAQfezKH6Su",
    "$2a$10$NQUMyPFrUgrnAQfezKH6SukleAlKu6EBGfCTJ5FS/rf1hYfNNjt5C": true,
    "$2a$10$NQUMyPFrUgrnAQfezKH6SuhKAFQ6Y4qycHAPFJ0XreWyPGGuPwhhu": "Q2xvc2UhIFRyeSBjb250cmFjdGluZyB0byBhbiBhYmJyZXZpYXRpb24u"
  },
  "14": {
    "salt": "$2a$10$Si5eUn5rK1Uxh0oqkQ1dL.",
    "$2a$10$Si5eUn5rK1Uxh0oqkQ1dL.bSvNdE7dOZ5cE1yS8zbwN1wPYQXQJHe": true
  },
  "14a": {
    "salt": "$2a$10$nMDQ9LhqzBW8j7VtTKnGru",
    "$2a$10$nMDQ9LhqzBW8j7VtTKnGruI7108R7Xxv9nRSSZF.YiQynHnNac/WS": true
  },
  "14b": {
    "salt": "$2a$10$M318MKmXtDqFFUDJBwxJke",
    "$2a$10$M318MKmXtDqFFUDJBwxJkeZnco9xARtjG3c2kDMVegOfTa3/Sw4iW": true
  },
  "14c": {
    "salt": "$2a$10$d5GpHc9rGKtuimwXBcY2Be",
    "$2a$10$d5GpHc9rGKtuimwXBcY2Bet7ZKpq62qk6P7mv7kGxX1tpjTlg6VGC": true
  }
}

let checkAnswer = function (x) {
  let answer = document.getElementById('answer-' + x).value;
  let normalizedForm = answer.replace(/[^A-Za-z]/g, '').toUpperCase();
  bcrypt.hash(normalizedForm, hashesList[x].salt, function (err, hash) {
    let el = document.getElementById('check-answer-result-' + x);
    if (hashesList[x][hash] === true) {
      el.style.color = 'green';
      el.innerText = normalizedForm + ': Correct!';
    } else if (hash in hashesList[x]) {
      el.style.color = 'blue';
      el.innerText = normalizedForm + ': ' + atob(hashesList[x][hash]);
    } else {
      el.style.color = 'red';
      el.innerText = normalizedForm + ': Incorrect.';
    }
  });
}