import "../styles/index.css";

import { poems } from "../utilities/poems";
import { drawIndex, drawImage } from "../utilities/utilities";
import { refresh } from "isola/browser";

import DiceIcon from "./DiceIcon";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  const index = drawIndex();
  const author = poems[index].author;
  const title = poems[index].title;
  const verses = poems[index].verses;

  return (
    <div className="App">
      <Header />
      <main>
        {/* The interactive part starts from here */}
        <article className="controls">
          <section className="name">
            <p className="author">{author}</p>
            <p className="title">{title}</p>
          </section>
          <section className="draw" onClick={refresh}>
            <DiceIcon />
            <p className="caption">Wylosuj kolejny wiersz!</p>
          </section>
        </article>
        <article className="text">
          <h2 className="subheading">Tekst:</h2>
          {verses.map((verse) => {
            return (
              <>
                <p
                  className="content"
                  dangerouslySetInnerHTML={{ __html: verse }}
                ></p>
                <img src={drawImage()} alt="" className="image" />
              </>
            );
          })}
        </article>
        {/* The interactive part ends up here */}
      </main>
      <Footer />
    </div>
  );
}
