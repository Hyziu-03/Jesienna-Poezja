import {
	generateRandomNumberInRange,
	getRandomElement,
} from "isola/utilities";
import { poems } from "./poems";

export function drawImage() {
	try {
		const illustrations = [
			"/illustrations/dalle_hat_01.png",
			"/illustrations/dalle_hat_02.png",
			"/illustrations/dalle_hat_03.png",
			"/illustrations/dalle_hat_04.png",
			"/illustrations/dalle_hat_05.png",
			"/illustrations/dalle_hat_06.png",
			"/illustrations/dalle_hat_07.png",
			"/illustrations/dalle_pumpkin_01.png",
			"/illustrations/dalle_pumpkin_02.png",
			"/illustrations/dalle_pumpkin_03.png",
			"/illustrations/dalle_pumpkin_04.png",
			"/illustrations/dalle_pumpkin_05.png",
			"/illustrations/dalle_pumpkin_06.png",
			"/illustrations/dalle_skull_01.png",
			"/illustrations/dalle_skull_02.png",
			"/illustrations/dalle_skull_03.png",
			"/illustrations/dalle_skull_04.png",
			"/illustrations/dalle_skull_05.png",
			"/illustrations/dalle_skull_06.png",
			"/illustrations/dalle_skull_07.png",
			"/illustrations/dalle_skull_08.png",
			"/illustrations/dalle_skull_09.png",
			"/illustrations/dalle_skull_10.png",
			"/illustrations/dalle_gravestone_01.png",
			"/illustrations/dalle_gravestone_02.png",
			"/illustrations/dalle_gravestone_03.png",
		];
		return getRandomElement(illustrations);
	} catch (error) {
		console.error(error);
	}
}

export function drawIndex() {
	try {
		return (
			generateRandomNumberInRange(0, poems.length) - 1
		);
	} catch (error) {
		console.error(error);
	}
}
