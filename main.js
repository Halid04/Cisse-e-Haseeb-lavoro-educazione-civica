const cameraWidth = 390;
const cameraHeight = 550;
const birdWidth = 34;
const birdHeight = 24;
const birdAnimationSpeed = 0.1;
const groundHeight = 70;
const groundWidth = cameraWidth;

let app = new PIXI.Application({
  width: cameraWidth,
  height: cameraHeight,
});
document.body.appendChild(app.view);

const background = new PIXI.Sprite(
  PIXI.Texture.from("Image/background-day.png")
);
background.width = cameraWidth + 100;
background.height = cameraHeight;

app.stage.addChild(background);

const spriteImages = [
  "Image/yellowbird-midflap.png",
  "Image/yellowbird-downflap.png",
  "Image/yellowbird-upflap.png",
];
const textureArray = [];

for (let i = 0; i < 3; i++) {
  const texture = PIXI.Texture.from(spriteImages[i]);
  textureArray.push(texture);
}

const birdAnimation = new PIXI.AnimatedSprite(textureArray);
birdAnimation.x = Math.floor(cameraWidth / 2 - birdWidth / 2);

let elapsed = 0.0;
app.ticker.add((delta) => {
  elapsed += delta;
  birdAnimation.y = 50.0 + Math.cos(elapsed/15) * 5.0 + (cameraHeight/3);
});

birdAnimation.y = Math.floor(cameraHeight / 2 - birdHeight / 2);
birdAnimation.animationSpeed = birdAnimationSpeed * 2;

app.stage.addChild(birdAnimation);

birdAnimation.play();


const ground = new PIXI.Sprite(
  PIXI.Texture.from("Image/base.png")
);
ground.width = groundWidth;
ground.height = groundHeight;
ground.x = 0;
ground.y = cameraHeight-groundHeight;

app.stage.addChild(ground);
