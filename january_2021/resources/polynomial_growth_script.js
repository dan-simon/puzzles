// Looking at this code is allowed (but not necessary).
// If you feel that this game is too slow, feel free to cheat in the game
// (though doing so is also not necessary).

let game;

function getInitialGame() {
  return {
    tab: 'main',
    currency: 8,
    producers: [0, 0, 0, 0, 0, 0, 0],
    bought: [0, 0, 0, 0, 0, 0, 0],
    boosts: 0,
    prestigePower: 1,
    timeSincePurchase: 0,
    timeSincePrestige: 0,
    challenge: 0,
    lastTick: Date.now(),
    hint: 0,
  }
}

window.onload = function () {
  setColor();
  loadGameFromStorage();
  simulateTime();
  saveGame();
  updateDisplay();
  setInterval(gameTick, 50);
  setInterval(doRegularStuff, 10000);
}

function loadGameFromStorage() {
  if (localStorage.getItem('polynomial-growth-save')) {
    game = JSON.parse(atob(localStorage.getItem('polynomial-growth-save')));
  } else {
    game = getInitialGame();
  }
}

function simulateTime() {
  let diff = Date.now() - game.lastTick;
  for (let i = 0; i < 1000; i++) {
    gameTick(diff / 1000);
  }
  game.lastTick = Date.now();
}

function gameTick(diff) {
  if (diff === undefined) {
    diff = Date.now() - game.lastTick;
    game.lastTick = Date.now();
  }
  let seconds = diff / 1000;
  game.timeSincePurchase += seconds;
  game.timeSincePrestige += seconds;
  produceProducers(seconds);
  maybeGiveHint();
  updateDisplay();
}

function maybeGiveHint() {
  if (game.currency >= 1e3 && game.hint < 1) {
    alert('You have 1.000e3 currency! If you get more, you\'ll get a small hint. Or you could just look at the Javascript source, but that\'s not needed and not as fun.');
    game.hint = 1;
  }
  if (game.currency >= 1e5 && game.hint < 2) {
    let extraHintText = game.challenge === 1 ? ' (or, it usually would, but it\'s disabled in this challenge)' : '';
    alert('You have 1.000e5 currency! That\'s not enough for a hint, though. You\'ll get the hint at 1.000e15 currency. Oh, and also, something\'s going to happen at 1.678e7 currency' + extraHintText + '.');
    game.hint = 2;
  }
  if (game.currency >= 1e15 && game.hint < 3) {
    alert('Wow! You have 1.000e15 currency! That\'s a lot of currency. Here\'s your hint: O = 15. There\'s not another hint after this.');
    game.hint = 3;
  }
}

function produceProducers(seconds) {
  for (let i = 6; i > 0; i--) {
    game.producers[i - 1] += seconds * productionPerSecond(i);
  }
  game.currency += seconds * productionPerSecond(0);
}

function productionPerSecond(i) {
  return (i < 7) ? game.producers[i] * producerMultiplier(i + 1) : 0;
}

function producerMultiplier(i) {
  return Math.pow(multiplierPerPurchase(), game.bought[i - 1]) * prestigePowerEffect(i) * specialChallengeEffect(i) * boostEffect();
}

function multiplierPerPurchase() {
  return [1, 3, 6].includes(game.challenge) ? 1 : 2;
}

function producerInitialCost(i) {
  return [8, 32, 32768, 33554432, 34359738368, 35184372088832, 36028797018963968][i - 1];
}

function producerCostIncrease(i) {
  return (game.challenge === 9 && i === 3) ? 2.5217283965692467e117 :
     Math.pow(Math.pow(producerInitialCost(i), 2), (game.challenge === 5 ? 2 : 1));
}

function producerCost(i) {
  return producerInitialCost(i) * Math.pow(producerCostIncrease(i), game.bought[i - 1]);
}

function canBuyProducer(i) {
  return game.currency >= producerCost(i);
}

function buyProducer(i) {
  if (canBuyProducer(i)) {
    game.currency -= producerCost(i);
    game.producers[i - 1]++;
    game.bought[i - 1]++;
    game.timeSincePurchase = 0;
    if (game.challenge === 2) {
      for (let j = 0; j < i - 1; j++) {
        game.producers[j] = 0;
      }
    }
  }
}

function buyMaxProducer(i) {
  while (canBuyProducer(i)) {
    buyProducer(i);
  }
}

function boostInitialCost() {
  return 4.056481920730334e31;
}

function boostCostIncrease() {
  return 4.056481920730334e31;
}

function boostCost() {
  return boostInitialCost() * Math.pow(boostCostIncrease(), game.boosts);
}

function canBuyBoost() {
  return game.challenge === 7 && game.currency >= boostCost();
}

function buyBoost() {
  if (canBuyBoost()) {
    game.currency -= boostCost();
    game.boosts++;
    game.timeSincePurchase = 0;
  }
}

function buyMaxBoost() {
  while (canBuyBoost()) {
    buyBoost();
  }
}

function prestigePowerEffect(i) {
  return game.challenge === 6 ? (i % 2 === 1 ? 1 : game.prestigePower) : game.prestigePower;
}

function specialChallengeEffect(i) {
  let d = {
    3: i === 3 ? Math.max(1, Math.pow(game.producers[0], 0.375)) : 1,
    4: i === 1 ? game.timeSincePrestige / 600 : 1,
    5: Math.max(1, Math.pow(game.currency, 1 / 180)),
    7: 0.01,
    8: Math.pow(game.timeSincePurchase / 60, 0.4)
  }
  return game.challenge in d ? d[game.challenge] : 1;
}

function boostEffect() {
  return Math.pow(4, game.boosts);
}

function getPrestigeSentence() {
  if (canPrestige()) {
    return 'If you prestige now, your prestige power will increase from ' +
      format(game.prestigePower) + ' to ' + format(newPrestigePower()) + '.';
  } else {
    return 'Get ' + format(prestigeRequirement()) + ' currency to prestige.';
  }
}

function canPrestige() {
  return game.challenge !== 1 && (game.prestigePower > 1 ||
    game.currency > 16777216) && newPrestigePower() > game.prestigePower;
}

function newPrestigePower() {
  return Math.pow(game.currency, 1 / 6) / 4;
}

function prestigeRequirement() {
  return (game.prestigePower > 1) ? Math.pow(game.prestigePower * 4, 6) : 16777216;
}

function prestige() {
  if (canPrestige()) {
    game.prestigePower = newPrestigePower();
    game.currency = 8;
    game.producers = [0, 0, 0, 0, 0, 0, 0];
    game.bought = [0, 0, 0, 0, 0, 0, 0];
    game.boosts = 0;
    game.timeSincePurchase = 0;
    game.timeSincePrestige = 0;
  }
}

function canSeePrestige() {
  return canPrestige() || game.prestigePower > 1;
}

function canSeeProducer(i) {
  return (i === 1 || game.bought[i - 2] > 0) && (i <= 3 || game.challenge === 6);
}

function canSeeBoost() {
  return game.challenge === 7;
}

function canStartChallenge(x) {
  return game.challenge !== x;
}

function startChallenge(x) {
  if (canStartChallenge(x) && confirm('Are you sure you want to ' +
    ((x === 0) ? ('exit Challenge ' + game.challenge) : ('start Challenge ' + x)) +
    '? This will reset your progress; you may want to export your save first.')) {
    game.challenge = x;
    game.currency = 8;
    game.producers = [0, 0, 0, 0, 0, 0, 0];
    game.bought = [0, 0, 0, 0, 0, 0, 0];
    game.boosts = 0;
    game.prestigePower = 1;
    game.timeSincePurchase = 0;
    game.timeSincePrestige = 0;
  }
}

function getSpecialChallengeText() {
  if (game.challenge === 3) {
    return 'Challenge 3 Producer 3 multiplier: ' + format(specialChallengeEffect(3));
  } else if (game.challenge === 4) {
    return 'Challenge 4 Producer 1 multiplier: ' + format(specialChallengeEffect(1));
  } else if (game.challenge === 5) {
    return 'Challenge 5 producer multiplier: ' + format(specialChallengeEffect(1));
  } else if (game.challenge === 7) {
    return 'Challenge 7 producer multiplier: ' + format(specialChallengeEffect(1));
  } else if (game.challenge === 8) {
    return 'Challenge 8 producer multiplier: ' + format(specialChallengeEffect(1));
  } else {
    return '';
  }
}

function format(x) {
  let r;
  if (x < 1000) {
    r = x.toFixed(3);
    if (r === '1000.000') {
      r = '1.000e3';
    }
  } else {
    let e = Math.floor(Math.log10(x));
    let m = x / Math.pow(10, e);
    r1 = m.toFixed(3);
    if (r1 === '10.000') {
      r1 = '1.000';
      e += 1;
    }
    r = r1 + 'e' + e;
  }
  return r;
}

function updateDisplay() {
  for (let i of ['main', 'challenges', 'options']) {
    document.getElementById(i).style.display = (game.tab === i) ? '' : 'none';
  }
  document.getElementById('currency').innerHTML = format(game.currency);
  document.getElementById('currency-per-second').innerHTML = format(productionPerSecond(0));
  let specialChallengeText = getSpecialChallengeText();
  document.getElementById('special-challenge-text-br').style.display = specialChallengeText ? '' : 'none';
  document.getElementById('special-challenge-text').style.display = specialChallengeText ? '' : 'none';
  document.getElementById('special-challenge-text').innerHTML = specialChallengeText;
  document.getElementById('boost-br').style.display = canSeeBoost() ? '' : 'none';
  document.getElementById('boost-text').style.display = canSeeBoost() ? '' : 'none';
  document.getElementById('boosts').innerHTML = '' + game.boosts;
  document.getElementById('boost-plural').innerHTML = (game.boosts === 1) ? '' : 's';
  document.getElementById('boost-effect').innerHTML = '' + boostEffect();
  document.getElementById('boost-cost').innerHTML = format(boostCost());
  document.getElementById('boost-button').className = canBuyBoost() ? '' : 'disabled';
  document.getElementById('max-boost-button').className = canBuyBoost() ? '' : 'disabled';
  for (let i = 1; i <= 7; i++) {
    document.getElementById(i + '-row').style.display = canSeeProducer(i) ? '' : 'none';
    document.getElementById(i + '-amount').innerHTML = format(game.producers[i - 1]);
    document.getElementById(i + '-bought').innerHTML = '' + game.bought[i - 1];
    document.getElementById(i + '-multiplier').innerHTML = format(producerMultiplier(i));
    document.getElementById(i + '-per-second').innerHTML = format(productionPerSecond(i));
    document.getElementById('producer-' + i + '-cost').innerHTML = format(producerCost(i));
    document.getElementById('producer-' + i + '-button').className = canBuyProducer(i) ? '' : 'disabled';
    document.getElementById('max-producer-' + i + '-button').className = canBuyProducer(i) ? '' : 'disabled';
  }
  document.getElementById('prestige-div').style.display = canSeePrestige() ? '' : 'none';
  document.getElementById('prestige-sentence').innerHTML = getPrestigeSentence();
  document.getElementById('prestige-button').className = canPrestige() ? '' : 'disabled';
  document.getElementById('challenge-text').innerHTML = (game.challenge > 0) ?
    'in Challenge ' + game.challenge + '.' : 'not in any challenge.';
  for (let i = 0; i < 10; i++) {
    document.getElementById('start-challenge-' + i).className = canStartChallenge(i) ? '' : 'disabled';
  }
}

function doRegularStuff() {
  saveGame();
  setColor();
}

function setTab(x) {
  game.tab = x;
}

function setColor() {
  document.body.style.backgroundColor = localStorage.getItem('january-2021-hunt-state') ?
    JSON.parse(atob(localStorage.getItem('january-2021-hunt-state'))).color : 'white';
}

function saveGame() {
  localStorage.setItem('polynomial-growth-save', btoa(JSON.stringify(game)));
}

function exportGame() {
  saveGame();
  document.getElementById('export-load-input').value = btoa(JSON.stringify(game));
  document.getElementById('export-load-input').select();
  document.execCommand('copy');
}

function loadGameFromInput() {
  try {
    game = JSON.parse(atob(document.getElementById('export-load-input').value));
    simulateTime();
    saveGame();
  } catch (e) {};
}

function resetGame() {
  if (confirm('Are you sure you want to reset the game? This will not help you in this game or this puzzle!')) {
    game = getInitialGame();
    saveGame();
  }
}
