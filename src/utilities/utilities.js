import {
	generateRandomNumberInRange,
	getRandomElement,
} from "isola/utilities";
import { poems } from "./poems";

export function drawImage() {
	try {
		const illustrations = [
			"/images/c9YD8Qw2HT.webp", "/images/cqTnZ6R0ft.webp",
			"/images/EoPMjgRhuR.webp", "/images/F9LRcJIzSA.webp",
			"/images/FSAPqbdUYz.webp", "/images/gmWh5bnUsl.webp",
			"/images/gUEluvQrrX.webp", "/images/hHkSPKmjpH.webp",
			"/images/JlUAAzCuSf.webp", "/images/tEnZcNHW6H.webp",
			"/images/UmzqhdP0jA.webp", "/images/V83opBusbG.webp",
			"/images/wFkprGimeJ.webp", "/images/wZyJdLicNB.webp",
			"/images/zRGvpnvJoZ.webp", "/images/zYdyL0xvWc.webp",
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
