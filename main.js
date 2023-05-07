const cameraWidth = 390;
const cameraHeight = 550;
const birdWidth = 34;
const birdHeight = 24;
const birdAnimationSpeed = 0.1;

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
birdAnimation.y = Math.floor(cameraHeight / 2 - birdHeight / 2);

birdAnimation.animationSpeed = birdAnimationSpeed * 2;

app.stage.addChild(birdAnimation);

birdAnimation.play();
