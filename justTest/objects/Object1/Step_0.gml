righKey = keyboard_check(vk_right)
leftKey = keyboard_check(vk_left)
upKey = keyboard_check(vk_up)
downKey = keyboard_check(vk_down)

xSpeed = (righKey-leftKey) * moveSpeed;
ySpeed = (downKey-upKey) * moveSpeed;

x += xSpeed;
y += ySpeed

if(keyboard_check(vk_right) || 
keyboard_check(vk_left) || 
keyboard_check(vk_up) ||
keyboard_check(vk_down)){
	image_speed = 1;
}else{
	image_speed = 0;
}