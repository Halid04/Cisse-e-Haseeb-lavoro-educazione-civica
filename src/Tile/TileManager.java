package Tile;

import JumperFrogPackage1.GamePanel;

import javax.imageio.ImageIO;
import java.awt.*;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

public class TileManager {
    GamePanel gamePanel;
    Tile[] tile;
    int mapTileNum[][];

    public TileManager(GamePanel gamePanel) {
        this.gamePanel = gamePanel;
        tile = new Tile[10];
        mapTileNum = new int[gamePanel.maxScreenCol][gamePanel.maxScreenROw];
        getTileImage();
        loadMap("/Mappe/mappa1.txt");
    }

    int gg;
    public void getTileImage(){
        try {
            tile[0] = new Tile();
            tile[0].image = ImageIO.read(getClass().getResourceAsStream("/Sprites/grass.png"));

            tile[1] = new Tile();
            tile[1].image = ImageIO.read(getClass().getResourceAsStream("/Sprites/grassWater.png"));

            tile[2] = new Tile();
            tile[2].image = ImageIO.read(getClass().getResourceAsStream("/Sprites/darkGrass.png"));

            tile[3] = new Tile();
            tile[3].image = ImageIO.read(getClass().getResourceAsStream("/Sprites/darkGrassWater.png"));

            tile[4] = new Tile();
            tile[4].image = ImageIO.read(getClass().getResourceAsStream("/Sprites/water.png"));

        }catch (IOException e){
            e.printStackTrace();
        }
    }

    public void loadMap(String filePath){
        try {
            InputStream is = getClass().getResourceAsStream(filePath);
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(is));

            int col = 0;
            int row = 0;

            while (col<gamePanel.maxScreenCol && row<gamePanel.maxScreenROw){
                String line = bufferedReader.readLine();

                while (col < gamePanel.maxScreenCol){
                    String numbers[] = line.split(" ");
                    int num = Integer.parseInt(numbers[col]);
                    mapTileNum[col][row] = num;
                    System.out.println(mapTileNum[col][row]);
                    col++;

                }
                if(col == gamePanel.maxScreenCol){
                    col = 0;
                    row++;
                }

            }
            bufferedReader.close();
        }catch (Exception e){

        }
    }

    public void draw(Graphics2D graphics2){
        int col = 0;
        int row = 0;
        int x = 0;
        int y = 0;

        while (col<gamePanel.maxScreenCol && row<gamePanel.maxScreenROw){
            int tileNum = mapTileNum[col][row];
            graphics2.drawImage(tile[tileNum].image, x, y, gamePanel.tileSize, gamePanel.tileSize, null);
            col++;
            x += gamePanel.tileSize;

            if(col == gamePanel.maxScreenCol){
                col = 0;
                x = 0;
                row++;
                y += gamePanel.tileSize;
            }
        }
    }
}
