async function onFreefall() {
	setMainLed({ r: 255, g: 0, b: 0 });
	speak("freefall", false);
	await delay(0.5);
}
registerEvent(EventType.onFreefall, onFreefall);

async function startProgram() {
	while (true) {
		setMainLed({ r: 255, g: 255, b: 255 });
		await delay(0.1);
	}
}
