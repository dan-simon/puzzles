// This file is from solutions. Do not look at it.








































// This answer checker is not that secure, and looking at its source should be
// considered like looking at the solutions (not the expected solution path,
// and definitely not needed).

let bcrypt = dcodeIO.bcrypt;

let hashesList = {
  'Interlocking': '$2b$12$irPpRXG28MccojajGSRBYOAey6qCwSm2pqwtY2Uc2Ug/.1.iJqyNy',
  'Upright': '$2b$12$HF2W1WSCRfEJILWtV/j3QOXDdyrlD9EC.ajOwJXyc1UiEkQ4DJPEC',
  'Inserted': '$2b$12$Pt3k9LCGIgBBbKBFeR3Keey4PWPAUfrLOjQlsmEXjLgzlSMIFnBya',
  'Password Reset': '$2b$12$uVgw32x2wLZO75P3usfuoOpCCjJzJS9jQjY1SPGMTyawEAguIbCc.',
  'Roots': '$2b$12$jPeSz6nNtF.Cb1xhnypggughpSit27sZTAdqYpFgRaGSiIeBbIIVW',
  'Easy as 1, 2, 3, 4, ...': '$2b$12$eWJ7wFrlvSU4vLTJ.Plute813.wkJ70d8LaBMbe4bCy9xHLwzWYUi',
  'Polynomial Growth': '$2b$12$/rti/WnPKQaEaRDyx/itluraMqFX4kxIRD0.YZPCof2hz8OQ7hzES',
  'Strange Arithmetic': '$2b$12$tsGwTCcEjqVnCtZexBAoVe08AB31wpt04Ln0TlZBIvL8jd9eXJ7uy',
  'A Special Puzzle': '$2b$12$/OwxsfBt06E/zRPfaurR3eehV046bOYSSnxDCA9UQGVxOSpPtQYTW',
  'Zero Pole': '$2b$12$LnTYui7jGkqRVbpZEKv/nO5gzaryTbF4QEzo/CWrZplGS/F3k8bDa',
  'Synesthesia': '$2b$12$QzM6lKDbQV7LU3wGXUPOce8Wosbtt889ggLAJbC0/KV2Q0lRWxElK',
  'Four in One': '$2b$12$F2TeAvYmRVB7kHjlAn5jQeVw/XcWrcz6YuxOIwRtG9IVunY16ZPCG',
  'Redacted Sudoku': '$2b$12$StcagmMpMhGhwVxVcns0G.KzdJWxiAja19uzBm7S4UB4Q2oL1W7My',
  'Shells': '$2b$12$DbThOkx8dcL0igsQE82LQ.ml/HhwtuRaecOZ2zhSu1PR2oU8YI56S',
  'Debugging': '$2b$12$Uw64cHiArbcXe6rNeK9ZBuAEP6jkWQ0yjyphnVCzCkdmHuTj8FDO2',
  'Meta 0: Zero-Sum': '$2b$12$DxQp5WrUMvI0Oqn2g7KhGe6oLPJs/FXNEXzG.z4hoTJuSKVyyTD/K',
  'Meta 1: First': '$2b$12$Q5LtQP9zxuHPfq6X1RJooe2ohxQ3KSpU68CPRwnFOuxaRIraKBa.K',
  'Meta 2: Doubles': '$2b$12$o9TmIU4O3mfz8zV0uueuVeynPkmpAUbtV5td9fefitUG4NzoNI.Bu',
  'Meta 3: Sequences': '$2b$12$I2X/y9uebyKdVhkWjB2Ce.KeMNIXry.fzX6FhpwE2Lx7pAvtKSEE.',
  'Meta 4: Traveling': '$2b$12$JZ7Pa21kKdj.hsHV5FPZCeaxPmqbkWgVPO76HlXzVCC2L.BH.Pe4.',
  'Meta 5: Vowels': '$2b$12$Msu1wl6A/.UWzOxkTlsoU.j76QXjp99w.Z7Fm4L9p5eZjrGjTkDdS',
  'Metameta': '$2b$12$Ul7Df8ASuftgHU0DRcqIz.OGW0dogcFYhyMSS6DV88kJq2cZmRd0e',
};

let checkAnswer = function (puzzleName) {
  loadHuntState(false, true);
  let t = Date.now();
  if (isSolved(puzzleName)) {
    let el = document.getElementById('check-answer-result');
    el.className = 'incorrect';
    el.innerHTML = 'You have already solved this puzzle!';
    document.getElementById('answer').value = '';
    return;
  }
  if (getGuessesLeft(puzzleName) <= 0) {
    let el = document.getElementById('check-answer-result');
    el.className = 'incorrect';
    el.innerHTML = 'You don\'t have any guesses for this puzzle!';
    document.getElementById('answer').value = '';
    return;
  }
  let answer = document.getElementById('answer').value;
  let normalizedForm = answer.replace(/[^A-Za-z]/g, '').toUpperCase();
  if (normalizedForm === '') {
    let el = document.getElementById('check-answer-result');
    el.className = 'incorrect';
    el.innerHTML = 'Every answer will have at least one letter.';
    document.getElementById('answer').value = '';
    return;
  }
  if (getWrongGuessesMade(puzzleName).includes(normalizedForm)) {
    let el = document.getElementById('check-answer-result');
    el.className = 'incorrect';
    el.innerHTML = 'You\'ve already tried that answer!';
    document.getElementById('answer').value = '';
    return;
  }
  bcrypt.compare(normalizedForm, hashesList[puzzleName], function (err, res) {
    let el = document.getElementById('check-answer-result');
    el.className = res ? 'correct' : 'incorrect';
    el.innerHTML = normalizedForm + ' is ' + (res ? 'correct!' : 'incorrect.');
    document.getElementById('answer').value = '';
    updateStatus(t, puzzleName, normalizedForm, res);
  });
}
