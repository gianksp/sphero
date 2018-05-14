async function onCollision() {
	stopRoll();
	setMainLed({ r: 255, g: 0, b: 0 });
	setHeading((getHeading() + 180));
	await delay(0.5);
	setMainLed({ r: 0, g: 0, b: 255 });
	setSpeed(100);
}
registerEvent(EventType.onCollision, onCollision);
async function startProgram() {
	setMainLed({
		r: 255,
		g: 255,
		b: 255
	});
	setSpeed(100);
}

async function onFreefall() {
	setMainLed({ r: 0, g: 255, b: 0 });
	await delay(0.5);
}
registerEvent(EventType.onFreefall, onFreefall);
