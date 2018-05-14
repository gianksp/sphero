async function startProgram() {
	setMainLed({ r: 0, g: 0, b: 255 });
	await speak("Hello Square", true);
	await delay(1.0);
	for (var count_1 = 0; count_1 < 4; count_1++) {
		setMainLed({ r: getRandomInt(0, 255), g: getRandomInt(0, 255), b: getRandomInt(0, 255) });
		await Sound.Game.Coin.play(true);
		await roll((getHeading() + 90.0), 60.0, 1.0);
		await delay(1.0);
	}
}
