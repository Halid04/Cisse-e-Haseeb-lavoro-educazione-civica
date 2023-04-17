package Character;

import JumperFrogPackage1.GamePanel;
import JumperFrogPackage1.KeyHandler;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.IOException;

public class Player extends Entity{
    GamePanel gamePanel;
    KeyHandler keyHandler;

    public Player(GamePanel gamePanel, KeyHandler keyHandler) {
        this.gamePanel = gamePanel;
        this.keyHandler = keyHandler;
        setDefaultValues();
        getPlayerImage();
    }

    public void setDefaultValues() {
        x = 350;
        y = 500;
        speed = 4;
        direction = "up";
    }

    public void getPlayerImage(){
        try{
            up1 = ImageIO.read(getClass().getResourceAsStream("/Sprites/frog_up1.png"));
            up2 = ImageIO.read(getClass().getResourceAsStream("/Sprites/frog_up2.png"));
            left1 = ImageIO.read(getClass().getResourceAsStream("/Sprites/frog_left1.png"));
            left2 = ImageIO.read(getClass().getResourceAsStream("/Sprites/frog_left2.png"));
            right1 = ImageIO.read(getClass().getResourceAsStream("/Sprites/frog_right1.png"));
            right2 = ImageIO.read(getClass().getResourceAsStream("/Sprites/frog_right2.png"));
            System.out.println("2");
        }catch (IOException e){
            e.printStackTrace();
        }
    }

    public void update(){
        if (keyHandler.upPressed || keyHandler.leftPressed || keyHandler.rightPressed){
            if(keyHandler.upPressed){
                direction = "up";
                y -= speed;
            }else if(keyHandler.leftPressed){
                direction = "left";
                x -= speed;
            }else if(keyHandler.rightPressed){
                direction = "right";
                x += speed;
            }
            spriteCounter++;
            if(spriteCounter > 5){
                if (spriteNum == 1){
                    spriteNum = 2;
                } else if (spriteNum == 2) {
                    spriteNum = 1;
                }
                spriteCounter = 0;
            }
        }


    }

    public void draw(Graphics2D graphics2){
        BufferedImage image = null;

        switch (direction){
            case "up":
                if (spriteNum == 1){
                    image = up1;
                }
                if(spriteNum == 2){
                    image = up2;
                }
                break;
            case "left":
                if (spriteNum == 1){
                    image = left1;
                }
                if (spriteNum == 2){
                    image = left2;
                }
                break;
            case "right":
                if (spriteNum == 1){
                    image = right1;
                }
                if (spriteNum == 2){
                    image = right2;
                }
                break;
        }
        graphics2.drawImage(image, x, y, gamePanel.tileSize, gamePanel.tileSize, null);
    }
}
