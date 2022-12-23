import "../styles/index.css";

import { drawImage, drawIndex } from "../utilities/utilities";
import { poems } from "../utilities/poems";
import { initial } from "../utilities/initialValues";

import React, { Suspense, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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

export default function App() {
	const [index, setIndex] = useState(0);
	const [author, setAuthor] = useState(initial.author);
	const [title, setTitle] = useState(initial.title);
	const [verses, setVerses] = useState(initial.verses.content);
	const [totalVerses, getTotalVerses] = useState(initial.verses.length);

	function drawPoem() {
		setIndex(drawIndex());
		setAuthor(poems[index].author);
		setTitle(poems[index].title);
		setVerses(poems[index].verses);
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
