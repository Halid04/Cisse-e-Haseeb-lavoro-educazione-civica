if alarm[0] < 0 {
	alarm[0] = room_speed;
}

minutes = global.timer div room_speed div 60; 
seconds = (global.timer div room_speed) mod 60; 

minutesStr = string(minutes);
secondsStr = string(seconds)

if minutes<10 {
	minutesStr = "0"+ minutesStr;
}

if seconds<10 {
	secondsStr = "0" + secondsStr;
}


testoTimer = "Tempo rimasto: " + minutesStr + ":" + secondsStr;

global.timer -= 1; // Sottrai 1 dal timer

if(global.timer <= 0 && global.itemMancanti>0){
	global.timer = 0;
	room_goto(GameOverRoom)
}
