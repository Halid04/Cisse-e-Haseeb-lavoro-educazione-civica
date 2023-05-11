const cameraWidth = 390;
const cameraHeight = 550;
const birdWidth = 34;
const birdHeight = 24;
const birdAnimationSpeed = 0.1;
const groundHeight = 100;
const groundWidth = cameraWidth;
const groundAnimationSpeed = 0.1;
let gravity = 9.8;
let isStart = false;
let collisione = false;
let jumping = false;

let app = new PIXI.Application({
  width: cameraWidth,
  height: cameraHeight,
});
document.body.appendChild(app.view);

let background;
const setBackground = () => {
  background = new PIXI.Sprite(PIXI.Texture.from("Image/background-day.png"));
  background.width = cameraWidth + 100;
  background.height = cameraHeight;
  app.stage.addChild(background);
};

let birdSpriteImages;
let birdTextureArray;
let birdTexture;
let birdAnimation;
const setBird = () => {
  birdSpriteImages = [
    "Image/yellowbird-midflap.png",
    "Image/yellowbird-downflap.png",
    "Image/yellowbird-upflap.png",
  ];
  birdTextureArray = [];

  for (let i = 0; i < 3; i++) {
    birdTexture = PIXI.Texture.from(birdSpriteImages[i]);
    birdTextureArray.push(birdTexture);
  }

  birdAnimation = new PIXI.AnimatedSprite(birdTextureArray);
  birdAnimation.anchor.y = 0.5;
  birdAnimation.anchor.x = 0.5;
  birdAnimation.x = Math.floor(cameraWidth / 2);

  if (!isStart) {
    let elapsed = 0.0;
    app.ticker.add((delta) => {
      elapsed += delta;
      birdAnimation.y =
        50.0 + Math.cos(elapsed / 15) * 5.0 + cameraHeight / 2.8;
    });
  }

  birdAnimation.animationSpeed = birdAnimationSpeed * 2;
  app.stage.addChild(birdAnimation);
  birdAnimation.play();
};

let groundSpriteImages;
let groundTextureArray;
let groundTexture;
let groundAnimation;
const setGround = () => {
  groundSpriteImages = [
    "Image/base.png",
    "Image/base2.png.png",
    "Image/base1_5.png ",
  ];
  groundTextureArray = [];

  for (let i = 0; i < 2; i++) {
    groundTexture = PIXI.Texture.from(groundSpriteImages[i]);
    groundTextureArray.push(groundTexture);
  }

  groundAnimation = new PIXI.AnimatedSprite(groundTextureArray);
  groundAnimation.width = groundWidth;
  groundAnimation.anchor.y = 0.5;
  groundAnimation.anchor.x = 0.5;
  groundAnimation.y = cameraHeight - groundHeight / 2;
  groundAnimation.x = groundWidth / 2;
  groundAnimation.animationSpeed = groundAnimationSpeed * 1.5;

  app.stage.addChild(groundAnimation);
  groundAnimation.play();
};

const keyHandler = () => {
  window.addEventListener("keydown", (e) => {
    if (e.key == " ") {
      isStart = true;
      gravityHandler();
    } else if (isStart && e.key == "a") {
      // birdAnimation.y += 4;
    }
  });
};

const gravityHandler = () => {
  var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

  var engine = Engine.create();

  var render = Render.create({
    element: document.body,
    engine: engine,
  });

  Composite.add(engine.world, birdAnimation);

  var runner = Runner.create();

  Runner.run(runner, engine);

  if (isStart) {
    let falling = birdAnimation.y;
    if (!collisione) {
      if (birdGroundCollision(birdAnimation, groundAnimation)) {
        collisione = true;
        isStart = false;
      }
    }
  }
};

function birdGroundCollision(sprite1, sprite2) {
  let sprite1Box = sprite1.getBounds();
  let sprite2Box = sprite2.getBounds();

  return (
    sprite1Box.x + sprite1Box.width - 3 > sprite2Box.x &&
    sprite2Box.x + sprite2Box.width > sprite1Box.x &&
    sprite1Box.y + sprite1Box.height - 3 > sprite2Box.y &&
    sprite2Box.y + sprite2Box.height > sprite1Box.y
  );
}

let ticker = new PIXI.Ticker();
function setup() {
  setBackground();
  setBird();
  setGround();
  keyHandler();
  gravityHandler();
}

ticker.start();
setup();
