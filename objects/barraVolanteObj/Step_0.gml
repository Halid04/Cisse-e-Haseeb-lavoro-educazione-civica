if (timer < durata) {
	timer += 1;

	posizione = timer / durata;
	if (direzione) {
		x = lerp(xIniziale, xFinale, posizione);
		y = lerp(yIniziale, yFinale, posizione);
	} else {
	    x = lerp(xFinale, xIniziale, posizione);
	    y = lerp(yFinale, yIniziale, posizione);
		}
} else {
	direzione = !direzione;
	timer = 0;
}


