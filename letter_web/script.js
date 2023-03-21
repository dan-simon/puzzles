canvas = document.getElementById ('gameCanvas' );
button = document.getElementById ('ret' );
div = document.getElementById ('main' );

ctx = canvas.getContext ('2d' );

distance = (a, b, c, d) => {return Math.sqrt((a-c)*(a-c) + (b-d)*(b-d))};

function maindraw(checkfinal){
    ctx.strokeStyle = "#111111";
    ctx.fillStyle = "#eeeeee";
    ctx.fillRect(0,0,4000,4000)
}

mapcamerazoom = 0.8;
mapcamera = [-68,-445]
mapmousedown = false;
firstvisit = true;
current = "";

draw = maindraw;




function resize(){
    canvas.height = window.innerHeight * 0.9;
    canvas.width = window.innerWidth * 0.9;
    draw();
}

setInterval(() => {draw()}, 100)
resize()
window.addEventListener('resize', resize);

rad = 10;

rawLinks = [[['accidental', 4], ['death note', 0]], [['arrangement', 6], ['death note', 1]], [['achromatic', 6], ['death note', 2]], [['artist', 2], ['death note', 3]], [['anthem', 3], ['death note', 4]], [['bluegrass', 7], ['soft drink', 0]], [['bop', 1], ['soft drink', 1]], [['beautiful', 6], ['soft drink', 2]], [['beat', 3], ['soft drink', 3]], [['compose', 2], ['mouse deer', 0]], [['canon', 3], ['mouse deer', 1]], [['chorus', 4], ['mouse deer', 2]], [['crescendo', 3], ['mouse deer', 3]], [['caesura', 2], ['mouse deer', 4]], [['decibel', 2], ['cough drop', 0]], [['disco', 4], ['cough drop', 1]], [['diminution', 5], ['cough drop', 2]], [['dirge', 3], ['cough drop', 3]], [['drumhead', 4], ['cough drop', 4]], [['electronic', 1], ['last name', 0]], [['entertainment', 6], ['last name', 1]], [['embellish', 7], ['last name', 2]], [['eleventh', 6], ['last name', 3]], [['form', 3], ['milky way', 0]], [['flourish', 5], ['milky way', 1]], [['finale', 4], ['milky way', 2]], [['folk', 3], ['milky way', 3]], [['freestyle', 6], ['milky way', 4]], [['gospel', 2], ['space needle', 0]], [['group', 4], ['space needle', 1]], [['guitar', 4], ['space needle', 2]], [['grace', 3], ['space needle', 3]], [['groove', 5], ['space needle', 4]], [['caesura', 1], ['canon', 1]], [['drumhead', 6], ['caesura', 6]], [['arrangement', 3], ['beat', 2]], [['bluegrass', 6], ['beautiful', 2]], [['accidental', 8], ['finale', 3]], [['accidental', 8], ['grace', 2]], [['finale', 3], ['grace', 2]], [['decibel', 4], ['embellish', 2]], [['electronic', 3], ['disco', 3]], [['accidental', 1], ['achromatic', 9]], [['electronic', 9], ['crescendo', 4]], [['achromatic', 1], ['accidental', 2]], [['crescendo', 7], ['drumhead', 7]], [['freestyle', 2], ['entertainment', 10]], [['beat', 1], ['arrangement', 8]], [['bluegrass', 3], ['beautiful', 1]], [['compose', 6], ['crescendo', 2]], [['eleventh', 2], ['decibel', 1]], [['crescendo', 5], ['dirge', 4]], [['drumhead', 5], ['decibel', 5]], [['accidental', 5], ['anthem', 4]], [['entertainment', 3], ['electronic', 2]], [['eleventh', 4], ['embellish', 3]], [['gospel', 4], ['freestyle', 3]], [['freestyle', 8], ['finale', 5]], [['freestyle', 8], ['grace', 4]], [['finale', 5], ['grace', 4]], [['arrangement', 5], ['bluegrass', 4]], [['achromatic', 2], ['flourish', 7]], [['embellish', 8], ['eleventh', 7]], [['embellish', 8], ['chorus', 1]], [['eleventh', 7], ['chorus', 1]], [['guitar', 2], ['artist', 3]], [['achromatic', 8], ['accidental', 3]], [['decibel', 3], ['disco', 1]], [['beautiful', 5], ['diminution', 3]], [['diminution', 7], ['dirge', 1]], [['finale', 1], ['entertainment', 7]], [['embellish', 6], ['electronic', 8]], [['embellish', 6], ['diminution', 1]], [['electronic', 8], ['diminution', 1]], [['gospel', 5], ['flourish', 1]], [['eleventh', 1], ['decibel', 6]], [['bluegrass', 1], ['accidental', 9]], [['beautiful', 8], ['embellish', 5]], [['embellish', 4], ['freestyle', 7]], [['embellish', 4], ['folk', 2]], [['freestyle', 7], ['folk', 2]], [['drumhead', 3], ['achromatic', 5]], [['arrangement', 7], ['anthem', 5]], [['embellish', 1], ['entertainment', 9]], [['embellish', 1], ['diminution', 2]], [['entertainment', 9], ['diminution', 2]], [['entertainment', 1], ['finale', 2]], [['arrangement', 9], ['anthem', 1]], [['arrangement', 4], ['accidental', 6]], [['entertainment', 8], ['electronic', 7]], [['canon', 4], ['diminution', 9]], [['crescendo', 6], ['canon', 2]], [['entertainment', 11], ['eleventh', 5]], [['entertainment', 11], ['diminution', 4]], [['eleventh', 5], ['diminution', 4]], [['electronic', 6], ['diminution', 8]], [['compose', 4], ['chorus', 2]], [['compose', 1], ['crescendo', 8]], [['groove', 2], ['gospel', 1]], [['form', 1], ['folk', 1]], [['achromatic', 4], ['group', 2]], [['flourish', 2], ['groove', 3]], [['bop', 2], ['compose', 3]], [['bop', 2], ['gospel', 3]], [['compose', 3], ['gospel', 3]], [['achromatic', 3], ['arrangement', 2]], [['arrangement', 1], ['artist', 1]], [['crescendo', 1], ['chorus', 3]], [['bluegrass', 5], ['caesura', 5]], [['dirge', 2], ['drumhead', 1]], [['electronic', 5], ['entertainment', 4]], [['groove', 1], ['flourish', 4]], [['form', 2], ['freestyle', 1]], [['guitar', 5], ['group', 1]], [['guitar', 5], ['grace', 1]], [['group', 1], ['grace', 1]], [['artist', 4], ['bluegrass', 8]], [['disco', 2], ['chorus', 5]], [['compose', 5], ['caesura', 3]], [['flourish', 6], ['freestyle', 4]], [['entertainment', 2], ['guitar', 3]], [['beautiful', 4], ['achromatic', 7]], [['arrangement', 10], ['accidental', 7]], [['anthem', 2], ['artist', 5]], [['diminution', 6], ['entertainment', 5]], [['entertainment', 12], ['freestyle', 5]], [['entertainment', 12], ['electronic', 4]], [['freestyle', 5], ['electronic', 4]], [['beautiful', 3], ['bluegrass', 2]], [['beautiful', 7], ['guitar', 1]], [['drumhead', 2], ['caesura', 4]], [['flourish', 3], ['group', 3]], [['eleventh', 3], ['groove', 4]]]

rawWords = [{'x': 0.0, 'y': -1600.0, 'ans': 'accidental', 'clue': 'What one might say breaking a fragile object was'}, {'x': 380.4226065180614, 'y': -1323.606797749979, 'ans': 'arrangement', 'clue': 'Flower ___ (ikebana)'}, {'x': 235.1141009169893, 'y': -876.3932022500211, 'ans': 'achromatic', 'clue': 'Colorless'}, {'x': -235.1141009169892, 'y': -876.393202250021, 'ans': 'artist', 'clue': 'Picasso, for example'}, {'x': -380.42260651806146, 'y': -1323.6067977499788, 'ans': 'anthem', 'clue': 'Elevance Health, from 2014 to 2022'}, {'x': 1250.9303719488476, 'y': -997.5836829739737, 'ans': 'bluegrass', 'clue': 'Plant found in multiple continents but associated with Kentucky'}, {'x': 1187.593699705129, 'y': -435.4551692432684, 'ans': 'bop', 'clue': 'Command that goes with "twist" and "pull"'}, {'x': 625.4651859744238, 'y': -498.7918414869868, 'ans': 'beautiful', 'clue': 'Attractive'}, {'x': 688.8018582181421, 'y': -1060.9203552176923, 'ans': 'beat', 'clue': 'Win a game against'}, {'x': 1559.8846594909178, 'y': 356.03349433010294, 'ans': 'compose', 'clue': 'What . does to functions, in Haskell'}, {'x': 1205.769218179562, 'y': 665.4148383456728, 'ans': 'canon', 'clue': 'Original work'}, {'x': 802.1023855976082, 'y': 424.2351334091467, 'ans': 'chorus', 'clue': 'Refrain'}, {'x': 906.7380042423033, 'y': -34.20346565386711, 'ans': 'crescendo', 'clue': 'Gradual increase, or its peak'}, {'x': 1375.0732055805508, 'y': -76.35439669316929, 'ans': 'caesura', 'clue': 'Word break within a poetical foot'}, {'x': 694.2139825880931, 'y': 1441.5501886438706, 'ans': 'decibel', 'clue': 'Unit which is roughly 1.26x intensity'}, {'x': 231.5425414101133, 'y': 1357.587701077649, 'ans': 'disco', 'clue': 'Preceder of "ball" or "inferno"'}, {'x': 168.42227419837462, 'y': 891.6151764937035, 'ans': 'diminution', 'clue': 'The process of getting smaller'}, {'x': 592.0832448605244, 'y': 687.590806043451, 'ans': 'dirge', 'clue': 'Type of lament'}, {'x': 917.0403916482437, 'y': 1027.4693351558406, 'ans': 'drumhead', 'clue': 'Circular membrane hit with sticks'}, {'x': -694.2139825880928, 'y': 1441.5501886438706, 'ans': 'electronic', 'clue': 'The E of EA'}, {'x': -881.0480341020373, 'y': 907.6091458358798, 'ans': 'entertainment', 'clue': 'Sector of DIS or WBD'}, {'x': -347.10699129404645, 'y': 720.7750943219353, 'ans': 'embellish', 'clue': 'Add false details to a story'}, {'x': -160.27293978010192, 'y': 1254.716137129926, 'ans': 'eleventh', 'clue': '0.090909...'}, {'x': -1559.8846594909176, 'y': 356.03349433010334, 'ans': 'form', 'clue': 'Shape (as a noun or verb)'}, {'x': -1375.0732055805508, 'y': -76.3543966931689, 'ans': 'flourish', 'clue': 'Thrive, often referring to a plant'}, {'x': -906.7380042423033, 'y': -34.20346565386694, 'ans': 'finale', 'clue': 'Last episode of a show'}, {'x': -802.102385597608, 'y': 424.2351334091468, 'ans': 'folk', 'clue': 'People'}, {'x': -1205.7692181795614, 'y': 665.4148383456732, 'ans': 'freestyle', 'clue': 'Stroke that could be almost anything'}, {'x': -1250.9303719488478, 'y': -997.5836829739734, 'ans': 'gospel', 'clue': 'Word coming from the latin "bona annuntiatio"'}, {'x': -797.6478493290989, 'y': -1122.6817104863749, 'ans': 'group', 'clue': 'Mathematical object with associativity, an identity, and inverses'}, {'x': -538.60055234511, 'y': -730.2418300902742, 'ans': 'guitar', 'clue': 'Axe, in slang'}, {'x': -831.7830407349657, 'y': -362.60261795213876, 'ans': 'grace', 'clue': 'Hopper in computing'}, {'x': -1272.027080450157, 'y': -527.8289696496389, 'ans': 'groove', 'clue': 'Shallow depression'}, {'x': 0.0, 'y': -1200.0, 'ans': 'death note', 'clue': '?'}, {'x': 938.1977789616357, 'y': -748.1877622304803, 'ans': 'soft drink', 'clue': '?'}, {'x': 1169.9134946181885, 'y': 267.0251207475772, 'ans': 'mouse deer', 'clue': '?'}, {'x': 520.6604869410698, 'y': 1081.162641482903, 'ans': 'cough drop', 'clue': '?'}, {'x': -520.6604869410696, 'y': 1081.162641482903, 'ans': 'last name', 'clue': '?'}, {'x': -1169.9134946181882, 'y': 267.0251207475775, 'ans': 'milky way', 'clue': '?'}, {'x': -938.1977789616359, 'y': -748.1877622304801, 'ans': 'space needle', 'clue': '?'}]

let refs = {};

let words = [];

for (let i of rawWords) {
  refs[i.ans] = {};
  let word = [];
  word.clue = i.clue;
  for (let j = 0; j < i.ans.length; j++) {
    if (i.ans[j] === ' ') {
      continue;
    }
    let o = {};
    refs[i.ans][j] = o;
    o.w = word;
    o.a = i.ans[j];
    o.x = i.x + j * rad * 3;
    o.y = i.y;
    o.ps = [];
    word.push(o);
  }
  words.push(word);
}

for (let i of words) {
  for (let j = 0; j < i.length; j++) {
    i[j].prev = (j === 0) ? i[j] : i[j - 1];
    i[j].next = (j === i.length - 1) ? i[j] : i[j + 1];
  }
}

for (let link of rawLinks) {
  refs[link[0][0]][link[0][1]].ps.push(refs[link[1][0]][link[1][1]]);
  refs[link[1][0]][link[1][1]].ps.push(refs[link[0][0]][link[0][1]]);
}



distance = (a, b, c, d) => {return Math.sqrt((a-c)*(a-c) + (b-d)*(b-d))};

draw = maindraw;
resize();

selected = {};


draw = () => {
    camzoom = Math.min(canvas.height/1200, canvas.width / 1200);

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0,0,canvas.width,canvas.height)


    words.forEach(word => { word.forEach(letter => {
        ctx.strokeStyle = "#ffffff";
        if (letter == selected || letter.ps.includes(selected)) {
            ctx.strokeStyle = "#bbbbff"
        } else if (letter.w == selected.w || letter.ps.map(i => i.w).includes(selected.w)) {
            ctx.strokeStyle = "#f4f4ff"
        }
        else return;
     
        for (let i of letter.ps) {
          ctx.beginPath();
          ctx.moveTo(camzoom * camerazoom * (letter.x+camera[0]), camzoom *camerazoom * (letter.y+camera[1])); 
          ctx.lineTo(camzoom *camerazoom * (i.x+camera[0]), camzoom *camerazoom * (i.y+camera[1])); 
          ctx.stroke();
        }
    })})

    words.forEach(word => { word.forEach(letter => {
       
      
        ctx.strokeStyle = "#00ff00"
        if(word == selected.w){
            ctx.strokeStyle = "#008800"
        }
        if(selected.ps && selected.ps.includes(letter)){
            ctx.strokeStyle = "#ff8888"
        }
        if(letter == selected){
            ctx.strokeStyle = "#ff0000"
        }
    
        ctx.beginPath();
        ctx.arc(camzoom *camerazoom * (letter.x+camera[0]), camzoom *camerazoom * (letter.y+camera[1]), camzoom *camerazoom * (rad + 1), 0, 2 * Math.PI);
        ctx.lineWidth = camzoom *camerazoom * 2;
         
        ctx.stroke();

        if(letter.l){
            ctx.font = "bold " + camzoom *camerazoom * 15 + "px monospace";

            ctx.fillStyle = "#333333"
            ctx.fillText(letter.l, camzoom *camerazoom *(letter.x-rad/4+camera[0]), camzoom *camerazoom * (letter.y+rad/4+camera[1]))
        }
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0,0, canvas.width, 50)
        ctx.fillStyle = "#115511";
        ctx.fillRect(0, 47, canvas.width , 3)
        ctx.fillStyle = "#115511";
        ctx.font = "bold 20px monospace";
        if(selected.w) {
            ctx.fillText(selected.w.clue, 10, 30)
        }



       
    })});


    checkwin();

}

alerted = false;

function checkwin(){
    won = true;
    words.forEach(word => {
        word.forEach(letter => {
            if(!letter.l || letter.l != letter.a) won = false;
        })
    })
    if(won && !alerted) {
      alert('complete!')
      alerted = true;
    }
}



canvas.onclick = e=>{
    clickx = (e.offsetX / camerazoom/camzoom) - camera[0];
    clicky = (e.offsetY / camerazoom/camzoom) - camera[1];

    closest = {x:-1, y:-1}
  words.forEach(word => { word.forEach(letter => {
    if(closest.x == -1 || distance(clickx, clicky, letter.x, letter.y) < distance(clickx, clicky, closest.x, closest.y)){
        closest = letter
    }
  })})
  selected = closest;
  draw();
}

// typing stuff from here until drawing stuff

function type(key){
    if (!selected.w) {
      return;
    }
    selected.l = key;
    for (let i of selected.ps) {
      i.l = key;
    }
    selected = selected.next;
    draw();
}

function untype(){
  if (!selected.w) {
    return;
  }
    if(selected.l){
        selected.l = undefined;
        for (let i of selected.ps) {
          i.l = undefined;
        }
        selected = selected.prev;
    }
    else{
        selected = selected.prev;
        selected.l = undefined;
        for (let i of selected.ps) {
          i.l = undefined;
        }
    }
    draw();
    
}

window.onkeydown = e => {
    if(e.key.length == 1 && e.key >= 'a' && e.key <= 'z') {
        type(e.key)
    }
    if(e.key.length == 1 &&e.key >= 'A' && e.key <= 'Z') {
        type(e.key.toLowerCase())
    }
    if(e.key == "Backspace"){
        untype();
    }
    if(e.key == "ArrowLeft"){
        selected = selected.prev;
        draw();

    }
    if(e.key == "ArrowRight"){
        selected = selected.next;
        draw();

    }
}

// Drawing stuff from here down

camerazoom = 0.3;
camzoom = Math.min(canvas.height / 1200, canvas.width / 1200);
camera = [canvas.width / 2 / camerazoom/camzoom, (canvas.height / 2 + 25) / camerazoom/camzoom];

mousedown = false;

canvas.onwheel = e => {
        e.preventDefault();
        console.log(e);
        zoomx = (e.offsetX / camerazoom/camzoom) - camera[0];
        zoomy = (e.offsetY / camerazoom/camzoom) - camera[1];
        oldzoom = camerazoom;
    if(e.deltaY > 0){
        camerazoom -= .1;
    }else{
        camerazoom += .1;
    }
    if(camerazoom < .2){
        camerazoom = .2;
    }
    if(camerazoom > 5){
        camerazoom = 5;
    }
    camera[0] += (e.offsetX / camerazoom/camzoom) - (e.offsetX / oldzoom/camzoom);
    camera[1] += (e.offsetY / camerazoom/camzoom) - (e.offsetY / oldzoom/camzoom);
    console.log(zoomx, zoomy, oldzoom, (e.offsetX / camerazoom/camzoom) - camera[0], (e.offsetY / camerazoom/camzoom) - camera[1]);
        draw();

}

canvas.onmousemove = e => {

    if(mousedown){
        camera[0] += (e.offsetX/camzoom - mousedown[0])/camerazoom;
        camera[1] += (e.offsetY/camzoom - mousedown[1])/camerazoom;
        mousedown = [e.offsetX/camzoom, e.offsetY/camzoom]


    }
    draw();
}

canvas.onmousedown = e => {
    mousedown = [e.offsetX/camzoom , e.offsetY/camzoom ];}

window.onmouseup = e => {
    mousedown = false;
}
