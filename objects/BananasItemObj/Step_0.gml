if place_meeting(x+1, y, NinjaFrog) && alarm[0] < 0 {
	isCollect = true;
	sprite_index = Collected;
	alarm[0] = 10;
	global.itemMancanti -= 1;
}

if place_meeting(x, y+1, NinjaFrog) && alarm[0] < 0 {
	isCollect = true;
	alarm[0] = 10;
	sprite_index = Collected;
	global.itemMancanti -= 1;
}

