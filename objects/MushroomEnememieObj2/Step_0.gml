if !global.mushroomCollision {
	if (timer < durata) {
		timer += 1;

		posizione = timer / durata;
		if (direzione) {
			x = lerp(xIniziale, xFinale, posizione);
			y = lerp(yIniziale, yFinale, posizione);
			sprite_index = MushroomEnememieRight;
		} else {
	        x = lerp(xFinale, xIniziale, posizione);
	        y = lerp(yFinale, yIniziale, posizione);
			sprite_index = MushroomEnememieLeft;
		    }
	} else {
		direzione = !direzione;
		timer = 0;
	}

	if place_meeting(x+0.01, y, NinjaFrog) && alarm[0]<0{
		alarm[0] = 60;
		image_speed = 0;
		global.mushroomCollision = true;
	}

	if place_meeting(x, y+0.01, NinjaFrog) && alarm[0]<0{
		alarm[0] = 80;
		speed = 0;
		image_speed = 0;
		global.mushroomCollision = true;
	}
}
