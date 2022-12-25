import { poems } from "./poems";

export const initial = {
	author: poems[0].author,
	title: poems[0].title,
	verses: {
		content: poems[0].verses,
		length: 3,
	},
};
