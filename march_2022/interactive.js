// Lots of spoilers here.

let state;

let keyData = [
  null,
  [{'name': 'long', 'shift': 0}, {'name': 'skeleton', 'shift': 0}],
  [{'name': 'blue', 'shift': 0}, {'name': 'violet', 'shift': 0}],
  [{'name': 'blue', 'shift': 0}, {'name': 'green', 'shift': 0}, {'name': 'rose', 'shift': 0}],
  [{'name': 'blue', 'shift': 0}, {'name': 'red', 'shift': 0}, {'name': 'shiny', 'shift': 0}],
  [{'name': 'green', 'shift': 0}, {'name': 'rose', 'shift': 0}, {'name': 'short', 'shift': 0}, {'name': 'violet', 'shift': 0}],
  [{'name': 'birch', 'shift': 0}, {'name': 'blue', 'shift': 0}, {'name': 'metal', 'shift': 0}, {'name': 'sharp', 'shift': 0}],
  [{'name': 'future', 'shift': 1}, {'name': 'universal', 'shift': 0}],
  [{'name': 'green', 'shift': 0}, {'name': 'past', 'shift': -1}],
  [{'name': 'memory', 'shift': -1}, {'name': 'metal', 'shift': 0}, {'name': 'red', 'shift': 0}],
  [{'name': 'imagination', 'shift': 1}, {'name': 'long', 'shift': 0}, {'name': 'oak', 'shift': 0}],
  [{'name': 'green', 'shift': 0}, {'name': 'jump', 'shift': 2}, {'name': 'long', 'shift': 0}, {'name': 'past', 'shift': -1}],
  [{'name': 'ancient', 'shift': -2}, {'name': 'rose', 'shift': 0}, {'name': 'short', 'shift': 0}, {'name': 'violet', 'shift': 0}],
  [{'name': 'ancient', 'shift': -2}, {'name': 'jump', 'shift': 2}, {'name': 'metal', 'shift': 0}, {'name': 'universal', 'shift': 0}],
];

let rawGameData = `
Add the fact that you meant to get a positively polarized warp drive for your ship but instead got a negative one, the fact that your tritium fuel cells are running on empty, and, far more urgently than the other issues, the fact that you're currently being pursued by hostile aliens, and you get a lot of trouble! What will you do?

{Read the weapons system manual|2}

{Swallow a square meal ration|3}

{Take a breath|4}

---

Primes, tildes, bars, all sorts of symbols... you eventually realize that you have no idea how to get any meaning out of any of the eight pages of this manual, and decide to try random stuff. What will you do?

{Attempt desperately to understand some part of the manual|5}

{Press the red button|6}

{Switch all the switches you see|7}

---

Square meal rations are nutritious (each containing forty-five percent of daily nutritional value) but they don't seem that helpful for this situation. Not being hungry is helping you think of plans, though. What will you do?

{Eat your supply of ngirrehder roots|8}

{Share the remaining rations with the aliens|9}

{Think about ancient wisdom you've read|10}

---

Paths of action unfold themselves in your mind. Sadly, they don't look very good. You'd be surprised if out of ten, any of them work, but you have to try something. What will you do?

{Bomb the aliens with an antimatter weapon|11}

{Build a bookshelf and collapse it on the aliens|12}

{Challenge the aliens to a game of blackjack|13}

---

"Ramifying: from Latin ramus, meaning 'branch.' Meaning: 'to form branches or offshoots,' also (in number theory)..." You eventually realize that based on what you're reading, there's at least a fifty percent chance that a page from a dictionary got stuck in the weapons manual. "How did a page from a dictionary got stuck in the weapons manual?" you ask yourself. You hear the reply "According to the Tnihton Publishers website, there was a widespread manufacturing defect? Maybe that's it?" from an unknown source. You look up from the manual, and to your surprise, it turns out to have been said by an alien who just boarded the ship. After some discussion, it turns out that you've accidentally entered the aliens' region of space and they were just checking on your intentions. They give you some additional fuel and let you go on your way.

You win!

? + ? + ? = ?

{Restart?|1}

---

When you press the red button, your ship suddenly stops being in one piece and becomes an immense amount of dust scattered throughout space. What did you think would happen?

{Restart?|1}

---

Taking a look at the control panel, you see two switches, and you flip them. The lights on your ship go off and it starts to feel colder. The good news is that apparently without lights, the aliens don't seem to be finding where exactly your ship is any time soon. The bad news is that you can't find anything in the dark, and before long it starts to get too cold for you to survive.

{Restart?|1}

---

Roots of the ngirrehder tree are said to make you stronger and improve your reflexes, making them very useful in emergency situations. That, you remember. What you don't remember is that the "you" there is any of three alien species none of which are humans, and that for humans such as you they cause instantaneous coma and near-instantaneous death.

{Restart?|1}

---

Along the shelves of your ship's kitchen, you find seven rations that you didn't even know you had. When the aliens start to enter your ship, you gesture that you want to share with them. Surprisingly, they accept, and each take a ration from you. However, even more surprisingly, the rations are toxic to aliens and they all die. Apparently the other aliens in the ship now think you're an amazing warrior and go away, leaving you alone.

You win!

? + ? + (? + ?) = ?

{Restart?|1}

---

"Winning Ways for Your Mathematical Plays"? You have a feeling some type of math would be helpful, but probably not combinatorial game theory. "Star Wars"? Sadly the Force doesn't actually exist. "De Vita Caesarum"? The only relevance you see there is that like the emperors during The Year of The Four Emperors, you have a short expected remaining lifespan. While you're thinking of stuff from long-lost ages and muttering to yourself about strategy-stealing, lightsabers, and assassinations, the aliens come in and kill you so quickly that you don't even notice.

{Restart?|1}

---

"Convert what to antimatter?" your handy antimatter-weapon-creator asks you. Of the five things in the room (the tritium fuel cells, the square meal ration, the manual, the ship's controls, and the floor) none look like especially good choices. You dither around until the aliens board your ship, at which point you have the brilliant idea of selecting the aliens themselves. Amazingly, the antimatter-weapon-creator is able to convert the aliens into antimatter and set off the potent antimatter bomb thus created. Unfortunately, the explosion kills you.

{Restart?|1}

---

To build a bookshelf, you'll need supplies, but fortunately you find a IKEA bookshelf flatpack in another room. You somehow manage to put it together in only six minutes. However, when the aliens come and you try knocking it down, you realize that due to their exoskeletons, they've just gotten enraged at you. Right after you realize this, you're shot with a laser.

{Restart?|1}

---

Letters from your friends remind you that aliens can't resist playing blackjack for high stakes. You propose a game to them, and they happily accept. Fortunately, you manage to get exactly twenty-one, and they let you free.

You win!

? + (? + ?) + (? + ?) = ?

{Restart?|1}
`

let passageData = rawGameData.split('---').map(i => i.replace(/^[ \t\n]+|[ \t\n]+$/g, ''));

let last = x => x[x.length - 1];

window.onload = function () {
  init(+last(window.location.href.split('/')).split('_')[1].split('.')[0]);
}

let init = function (x, later) {
  if (x === 4) {
    state = {'lock': 1, 'used': [], 'time': 1, 'prev': [], 'log': []};
    stateStack = [];
    let m = document.getElementById('main');
    while (m.children.length > 0) {
      m.removeChild(m.children[0]);
    }
    let o = document.getElementById('other');
    while (o.children.length > 0) {
      o.removeChild(o.children[0]);
    }
    if (!later) {
      document.getElementById('command').addEventListener('keyup', function (e) {
        if (e.keyCode === 13) {
          e.preventDefault();
          applyCommand4();
        }
      });
    }
    writeToMain4(mainDisplayText4());
  }
  if (x === 12) {
    displayPassage12(1);
  }
}

let displayPassage12 = function (x) {
  let passage = passageData[x - 1];
  passage = '<span>' + passage.replace(/\n/g, '</span><br/><span>').replace(/\{[^|{}]+\|\d+\}/g, function (x) {
    return `<button onclick="displayPassage12(${x.split('|')[1].slice(0, -1)})">${x.split('|')[0].slice(1)}</button>`
  }).replace(/[a-zA-Z]+/, x => '<b>' + x + '</b>') + '</span>';
  document.getElementById('main').innerHTML = passage;
}

let getAnswer5 = function () {
  document.body.removeChild(document.getElementById('get-answer'));
  let t = document.createElement('span');
  t.innerText = "Did you really think I was just going to give you the answer? Nothing comes for free. " +
  "Here, you can put stuff in this box and I'll tell you how much it costs.";
  document.body.appendChild(t);
  document.body.appendChild(document.createElement('br'));
  document.body.appendChild(document.createElement('br'));
  document.body.appendChild(costSpan5());
  document.getElementById('item').addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      checkCost5();
    }
  });
}

let costSpan5 = function () {
  let s = document.createElement('span');
  s.innerHTML = 'Enter something: <input id="item" type="text"/><input type="submit" onclick="checkCost5()" value="Check"/> <span id="check-cost-result"></span>';
  return s;
}

let getCost5 = function (x) {
  let s = [...x.toUpperCase()].filter(i => 'A' <= i && i <= 'Z').join('');
  if ((!s) || (s[0] > 'H')) {
    return [s, 'out of stock'];
  }
  let v = [64, 67, 79, 77, 77, 69, 82, 67, 69][s[0].charCodeAt(0) - 64];
  let codes = [...s].map(i => i.charCodeAt(0));
  return [s, '$' + codes.filter(i => i !== v).map(i => i - 64).reduce((a, b) => a + b, 0) * Math.pow(2, codes.filter(i => i === v).length)];
}

let checkCost5 = function () {
  let item = document.getElementById('item').value;
  document.getElementById('item').value = '';
  let cost = getCost5(item);
  document.getElementById('check-cost-result').innerText = cost[0] + ': ' + cost[1];
}

let getTotalTime4 = function () {
  return state.prev.reduce((a, b) => a + b, 0) + state.time;
}

let formatTimestamp = function (x) {
  return (Math.floor(x / 60) || 12) + ':' + (100 + x % 60).toString().slice(1) + ' AM'
}

let formatTime = function (x) {
  if (x < 0) {
    return '-' + formatTime(-x);
  }
  return Math.floor(x / 60) + ':' + (100 + x % 60).toString().slice(1);
}

let describe4 = function (x) {
  let l = [(x[0].shift ? (x[0].shift > 0 ? '+' : '-') + Math.abs(x[0].shift) : ''),
  (x[1] ? 'used' : '')].filter(i => i)
  return x[0].name + ' key' + ((l.length > 0) ? ' (' + l.join(', ') + ')' : '');
}

let mainDisplayText4 = function () {
  if (state.lock === keyData.length) {
    return getDone4();
  }
  let time = getTotalTime4();
  let keys = keyData[state.lock].map(i => [i, state.used.includes(i.name)]);
  let prior = state.prev.length === 0 ? '' :
  `; ${state.prev.map(formatTime).join(', ')} on previous lock${state.prev.length > 1 ? 's' : ''}`;
  return `
Lock ${state.lock} (${keys.filter(i => i[1]).length}/${keys.length}), ${formatTimestamp(time)}
(${formatTime(state.time)} on current lock${prior})

Keys: ${keys.map(i => describe4(i)).join(', ')}
`
}

let getDone4 = function() {
  if (state.lock === keyData.length) {
    // 1 comes from 1 time from nonexistant last key
    return 'You successfully unlocked all the locks in ' + formatTime(getTotalTime4() - 1) + '.\n(' +
    state.prev.map(formatTime).join(', ') + ')';
  } else if (getTotalTime4() >= 240) {
    return 'You\'ve reached the time limit (' + formatTime(240) + ').';
  }
}

let getNumber = function (x) {
  let m1 = x.match(/\d+:\d+/);
  let m2 = x.match(/\d+/);
  if (m1) {
    return (+m1[0].split(':')[0]) * 60 + +m1[0].split(':')[1];
  } else if (m2) {
    return +m2[0];
  }
  return 1;
}

let getKey = function (x) {
  return keyData[state.lock].filter(i => x.includes(i.name) && !state.used.includes(i.name))[0] || null;
}

let tryUse4 = function (x) {
  let val = x.name.charCodeAt(state.used.length) - 96;
  let r;
  if (state.time % val === 0) {
    r = 'The ' + x.name + ' key fits in the lock (you can\'t reuse it for this lock).';
    state.used.push(x.name);
    state.time += val * x.shift;
    if (state.used.length === keyData[state.lock].length) {
      state.lock++;
      state.used = [];
      state.prev.push(state.time);
      state.time = 1;
    } else {
      state.time++;
    }
  } else {
    r = 'The ' + x.name + ' key doesn\'t seem to fit right now.';
    state.time++;
  }
  return r;
}

let applyCommand4 = function () {
  let command = document.getElementById('command').value;
  document.getElementById('command').value = '';
  clear4();
  // Actually most important
  if (command.includes(';')) {
    let parts = command.split(';');
    parts.forEach(applyCommand4);
    return;
  }
  // Most important
  if (command.includes('restart')) {
    init(4, true);
    return;
  }
  if (command.includes('log')) {
    write4(state.log.join('; '));
    return;
  };
  if (command.includes('undo')) {
    let can = stateStack.length > 0;
    if (can) {
      state = JSON.parse(stateStack.pop());
    }
    writeToMain4(mainDisplayText4());
    write4(can ? 'Undone.' : 'There\'s nothing to undo yet.')
    return;
  };
  let done = getDone4();
  if (done) {
    write4(done + ' Restart to start over!');
    return;
  }
  command = command.toLowerCase();
  if (command.includes('use') && getKey(command) !== null) {
    stateStack.push(JSON.stringify(state));
    state.log.push('use ' + getKey(command).name + ' key');
    write4(tryUse4(getKey(command)));
    let done = getDone4();
    if (done) {
      write4(done);
    }
  } else if (command.includes('wait') && getNumber(command) !== null) {
    stateStack.push(JSON.stringify(state));
    state.log.push('wait ' + getNumber(command));
    let ot = state.time;
    state.time = Math.min(240, state.time + getNumber(command));
    write4('Waited ' + (state.time - ot) + ' minute' + ((state.time - ot !== 0) ? 's' : '') + '.')
    let done = getDone4();
    if (done) {
      write4(done);
    }
  } else {
    write4(command + ': not understood');
  }
  writeToMain4(mainDisplayText4());
}

let writeToMain4 = function (x) {
  let m = document.getElementById('main');
  while (m.children.length > 0) {
    m.removeChild(m.children[0]);
  }
  let lines = x.replace(/^[ \t\n]+|[ \t\n]+$/g, '').split('\n');
  for (let i = 0; i < lines.length; i++) {
    // Maybe change?
    if (i !== 0) {
      m.appendChild(document.createElement('br'));
    }
    let s = document.createElement('span');
    s.innerText = lines[i];
    m.appendChild(s)
  }
}

let clear4 = function () {
  let o = document.getElementById('other');
  while (o.children.length > 0) {
    o.removeChild(o.children[0]);
  }
}

let write4 = function (x) {
  if (document.getElementById('other').children.length) {
    document.getElementById('other').appendChild(document.createElement('br'));
  }
  let s = document.createElement('span');
  s.innerText = x;
  document.getElementById('other').appendChild(s);
}
