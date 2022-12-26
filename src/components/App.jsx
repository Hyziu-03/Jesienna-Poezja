import "../styles/index.css";

import React, { Suspense, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, child, get } from "firebase/database";
import { getRandomElement, generateRandomNumberInRange } from "isola/utilities";

const Header = React.lazy(() => import("./Header"));
const Footer = React.lazy(() => import("./Footer"));
const DiceIcon = React.lazy(() => import("./DiceIcon"));

const firebaseConfig = {
	apiKey: "AIzaSyBRrjB8_eQrUfPAqsLvByLkNblswtsfkAM",
	authDomain: "jesienna-poezja.firebaseapp.com",
	databaseURL: "https://jesienna-poezja-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "jesienna-poezja",
	storageBucket: "jesienna-poezja.appspot.com",
	messagingSenderId: "591293946116",
	appId: "1:591293946116:web:4a3a1ca271b1aaf9c41851",
	measurementId: "G-3Z3DV3HCCP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function drawImage() {
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

const initialValue = {
	author: "Jan Brzechwa",
	title: "Jesień",
	verses: {
		content: [
			"O, jakie rzewne widowisko: <br/> Czerwone liście za oknami <br/> I cienie brzóz, płynące nisko <br/> Za odbitymi obłokami.",
			"Pies nie ujada. Zły i chory <br/> Omija cienie października, <br/> Na tykach ciepłe pomidory <br/> Są jak korale u indyka,",
			"Na babim lecie, zawieszonym <br/> Między drzewami jak antena, <br/> Żałośnie drga wyblakłym tonem <br/> Niepowtarzalna kantylena,",
			"Rzednąca trawa, blade dzwońce, <br/> Rozklekotane późne świerszcze, <br/> I pomarszczone siwe słońce, <br/> I ja - piszący rzewne wiersze.",
		],
		length: 4
	},
};

export default function App() {
	const [index, setIndex] = useState(0);
	const [author, setAuthor] = useState(initialValue.author);
	const [title, setTitle] = useState(initialValue.title);
	const [verses, setVerses] = useState(initialValue.verses.content);
	const [totalVerses, getTotalVerses] = useState(initialValue.verses.content.length);

	async function drawPoem() {
		const reference = ref(getDatabase());
		const drawnIndex = generateRandomNumberInRange(0, 5);
		setIndex(drawnIndex);

		const path = `${index}`;
		const snapshot = await get(child(reference, path));
		if (!snapshot.exists()) return;

		const poem = snapshot.val();
		setAuthor(poem.author);
		setTitle(poem.title);
		setVerses(poem.verses);
		getTotalVerses(verses.length);
	}

	let counter = 0;
	const versesHTML = verses.map(verse => {
		counter += 1;
		
		const key = crypto.randomUUID();
		if (counter < totalVerses) return (
			<><p 	
				className="content" tabIndex={0} 
				key={key + "paragraph"}
				dangerouslySetInnerHTML={{
					__html: verse,
				}}
			></p>
			<img
				src={drawImage()} alt=""
				className="image" tabIndex={0}
				key={key + "-image"}
			/></>
		); else return (
			<p
				className="content" tabIndex={0} 
				dangerouslySetInnerHTML={{
					__html: verse,
				}}
				key={key + "-paragraph"}
			></p>
		);
	});

	return (
		<div className="App">
			<Header />
			<main>
				<article className="controls">
					<section className="name">
						<p className="author" tabIndex={0}>{author}</p>
						<p className="title" tabIndex={0}>{title}</p>
					</section>
					<section className="draw" tabIndex={0} onClick={drawPoem}>
						<DiceIcon />
						<p className="caption">Wylosuj kolejny wiersz!</p>
					</section>
				</article>
				<article className="text">
					<h2 className="subheading" tabIndex={0}>Tekst:</h2>
					{versesHTML}
				</article>
			</main>
			<Footer />
		</div>
	);
}
