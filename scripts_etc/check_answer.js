// This answer checker is not that secure, and looking at its source should be
// considered like looking at the solutions (not the expected solution path,
// and definitely not needed).

let bcrypt = dcodeIO.bcrypt;

let hashesList = [
  [
    '$2a$10$csdHWerdVex6OjxHivsaLu/XAmWphkcomdjGJNpjH3dxRqQceKX8O',
    '$2a$10$CoD2/CCr0lnLUq.lnWCyouJ91yE7oDIu2sFD7sCYUJbxBkTXMWjSa',
    '$2a$10$kOwLjLnAd9PWj515jWG7C.XximGj.ZD7wMTF4o51s/RrzyAOGucZO',
    '$2a$10$6CpCY/ZIl9AqVWr9j4DZFeXxMei8aApPrf7Ya5mRZprA7lkxp/oD6',
    '$2a$10$VOZRzMRoolow278BNHbBH.VbDmVnShh3isWU1HevOwws9horn2dza',
    '$2a$10$5LC62BUJTn1V8jpeMILwve3Rj302FBzzDeaYC4QhnCpylFk7aJ9q.',
    '$2a$10$i90kR8a.rycuIPpWMuK9wu.V0kRzI5cD38s0slBUCAhxqLuO30T1q',
    '$2a$10$.da.vWJBTEkZYaE2QrbdlOu3qSiwTi5h9SX0MuuXlejhr3.t9fWde',
    '$2a$10$jRkvUtq/RLG3xv4AmI7R2.GgJsBK1Bk5Ez1J.z4GYsnX6fctlpMK2',
    '$2a$10$fobD4HgeN0GO2CmucZxX3.vRggch5GOpEAiJU381cMdw97AlqyTQG',
    '$2a$10$kD8cWG/8SxFzbZeM.XTSXO7Tm.mlPhq/oylJugPqGCu9BMBnaBPsa'
  ]
];

let checkAnswer = function (huntIndex, hashesIndex) {
  let answer = document.getElementById('answer').value;
  let normalizedForm = answer.replace(/[^A-Za-z]/g, '').toUpperCase();
  bcrypt.compare(normalizedForm, hashesList[huntIndex][hashesIndex], function (err, res) {
    let el = document.getElementById('check-answer-result');
    el.style.color = res ? '#00ee33' : '#ff0000';
    el.innerHTML = normalizedForm + ' is ' + (res ? 'correct!' : 'incorrect.');
  });
}