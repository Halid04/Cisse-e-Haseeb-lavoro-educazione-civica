if(right){
	sprite_index = StandUpAnimationRight;
}else if(left){
	sprite_index = StandUpAnimationLeft;
}


if keyboard_check(vk_left)
{
    x -= 2;
	sprite_index = RunAnimationLeft
	left = true;
	right = false;
}

if keyboard_check(vk_right)
{
    x += 2;
	sprite_index = RunAnimationRight;
	left = false;
	right = true;
}

if keyboard_check(vk_up)
{
    y -= 2;
}

if keyboard_check(vk_down)
{
    y += 2;
}
