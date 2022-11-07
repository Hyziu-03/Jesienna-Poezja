import "../styles/index.css";

import { poems } from "../utilities/poems";
import { drawIndex, drawImage } from "../utilities/utilities";
// import { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Draw from "./Draw";

export default function App() {
  // const [ currentVerse, setCurrenVerse ] = useState(0);
  // const [ index, setDrawnIndex ] = useState();
  // const [ author, setAuthor ] = useState();
  // const [ title, setTitle ] = useState();
  const index = drawIndex();
  const author = poems[index].author;
  const title = poems[index].title;
  const verses = poems[index].verses;
  const totalVerses = verses.length;
  let counter = 0;

  return (
    <div className="App">
      <Header />
      <main>
        <article className="controls">
          <section className="name" tabIndex={0}>
            <p className="author" tabIndex={0}>{author}</p>
            <p className="title" tabIndex={0}>{title}</p>
          </section>
          <Draw />
        </article>
        <article className="text">
          <h2 className="subheading" tabIndex={0}>Tekst:</h2>
          {verses.map(verse => {
            counter += 1;
            if(counter < totalVerses) return (
              <>
                <p
                  className="content"
                  dangerouslySetInnerHTML={{ __html: verse }}
                  tabIndex={0}
                ></p>
                <img src={drawImage()} alt="" className="image" tabIndex={0}/>
              </>
            );
            else return (
              <p
                className="content"
                dangerouslySetInnerHTML={{ __html: verse }}
                tabIndex={0}
              ></p>
            );
          })}
        </article>
      </main>
      <Footer />
    </div>
  );
}
