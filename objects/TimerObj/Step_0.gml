if alarm[0] < 0 {
	alarm[0] = room_speed;
}

minutes = global.timer div room_speed div 60; // Calcola i minuti
seconds = (global.timer div room_speed) mod 60; // Calcola i secondi

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

if(global.timer <= 0){
	global.timer = 0;
	room_goto(GameOverRoom)
}
