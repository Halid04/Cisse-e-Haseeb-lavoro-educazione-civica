x = clamp(x, (sprite_width/2), (room_width-(sprite_width/2)));
y = clamp(y, sprite_height, (room_height));

destra = keyboard_check(vk_right);
sinistra = keyboard_check(vk_left);
salto = keyboard_check_pressed(vk_up);

xSpeed = (destra - sinistra) * moveSpeed;
ySpeed += gravita;

//terreno 
if salto && place_meeting(x, y+ySpeed, CollisionBoxObj){
	ySpeed = jumpSpeed;
	
}

if place_meeting(x+xSpeed, y, CollisionBoxObj){
	
	//opzionale
	var _pixelCheck = sign(xSpeed);
	while !place_meeting(x+ _pixelCheck, y, CollisionBoxObj){
		x += _pixelCheck
	}
	
	xSpeed = 0;
}

if place_meeting(x+xSpeed, y+ySpeed, CollisionBoxObj){
	
	//opzionale
	var _pixelCheck = sign(ySpeed);
	while !place_meeting(x+ xSpeed, y+_pixelCheck, CollisionBoxObj){
		y += _pixelCheck
	}
	
	ySpeed = 0;
}


if(rightPos){
	sprite_index = StandUpAnimationRight;
}else if(leftPos){
	sprite_index = StandUpAnimationLeft;
}


if keyboard_check(vk_left)
{
	sprite_index = RunAnimationLeft;
	leftPos = true;
	rightPos = false;
}

if keyboard_check(vk_right)
{
	sprite_index = RunAnimationRight;
	leftPos = false;
	rightPos = true;
}

if global.mushroomCollision{
	xSpeed = 0;
	ySpeed = 0;
	image_speed = 0;
}


x += xSpeed;
y += ySpeed;
