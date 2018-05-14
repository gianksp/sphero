async function startProgram() {
	setMainLed({ r: 0, g: 0, b: 255 });
	await speak("Hello Square", true);
	await delay(1.0);
}

async function onCollision() {
	stopRoll();
	setMainLed({ r: 255, g: 0, b: 0 });
	await speak("Collision", false);
	setHeading((getHeading() + 180));
	await delay(1.0);
	setMainLed({ r: 0, g: 0, b: 255 });
	setSpeed(100);
}
registerEvent(EventType.onCollision, onCollision);

async function onFreefall() {
	setMainLed({ r: 0, g: 255, b: 0 });
	await speak("freefall", false);
	setMainLed({ r: 0, g: 0, b: 255 });
}
registerEvent(EventType.onFreefall, onFreefall);

