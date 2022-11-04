import { generateRandomNumberInRange, getRandomElement } from "isola/utilities";
import { poems } from "./poems";

export function drawImage() {
  const illustrations = [
    "/illustrations/dalle_hat_01.png",
    "/illustrations/dalle_hat_02.png",
    "/illustrations/dalle_hat_03.png",
    "/illustrations/dalle_hat_04.png",
    "/illustrations/dalle_pumpkin_01.png",
    "/illustrations/dalle_pumpkin_02.png",
    "/illustrations/dalle_pumpkin_03.png",
    "/illustrations/dalle_skull_01.png",
    "/illustrations/dalle_skull_02.png",
    "/illustrations/dalle_skull_03.png",
    "/illustrations/dalle_skull_04.png"
  ];
  return getRandomElement(illustrations);
}

export function drawIndex() {
  return generateRandomNumberInRange(0, poems.length) - 1;
}
