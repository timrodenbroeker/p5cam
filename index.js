let img;

let tilesX = 40;
let tilesY = 30;
let textSize = 25;
let tileW, tileH;
let slider;
let FONT;

let CHARS = "█▛▜▟▙▄▀▐▌▞▚▝▖▗";

function preload() {
  img = loadImage("./assets/p.jpg");
}

function setup() {

    slider = createSlider(2, 100, 100);
    slider.position(10, 10);
    slider.style('width', '180px');
    slider.input(updateSize);

    
  var canv = createCanvas(600, 600);
  canv.position(300,0);
  
  img.resize(tilesX, tilesY);
  
  FONT = loadFont("./assets/plexmono.otf");
  
  tileW = width / tilesX;
  tileH = height / tilesY;
  
  
  
}

function draw() {

    textFont(FONT);
  textAlign(CENTER, CENTER);
//   textSize(25);

  background("#f1f1f1");
  noStroke();
  
  translate(tileW / 2, tileH / 2);
  tileW = width / tilesX;
  tileH = height / tilesY;

  for (let x = 0; x < tilesX; x++) {
    for (let y = 0; y < tilesY; y++) {

      let c = img.get(x, y);
      let b = brightness(c);
      
      let selector = int( map(b,0,100,0,CHARS.length-1 ) );

      fill(0);
      
      push();
      translate(x * tileW, y * tileH);
      text(CHARS.charAt(selector), 0, 0);
      pop();
    }
  }
};

function updateSize() {
    img = loadImage("./assets/p.jpg",resizeImg);
    
}


function resizeImg() {
    tilesX = slider.value();
    tilesY = slider.value() * 0.4;

    img.resize(tilesX, tilesY);
}