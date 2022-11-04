import "../styles/index.css";

import { poems } from "../utilities/poems";
import { drawIndex, drawImage } from "../utilities/utilities";
import { refresh } from "isola/browser";

import DiceIcon from "./DiceIcon";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  const index = drawIndex();
  let id = 0;
  return (
    <div className="App">
      <Header />
      <main>
        {/* The interactive part starts from here */}
        <article className="controls">
          <section className="name">
            <p className="author">{poems[index].author}</p>
            <p className="title">{poems[index].title}</p>
          </section>
          <section className="draw" onClick={refresh}>
            <DiceIcon />
            <p className="caption">Wylosuj kolejny wiersz!</p>
          </section>
        </article>
        <article className="text">
          <h2 className="subheading">Tekst:</h2>
          {poems[index].verses.map(verse => {
            id += 1; return <p className="content" key={id}>{verse}</p>;
          })}
          <img src="/illustrations/dalle_pumpkin_01.png" alt="" className="image"/>
        </article>
        {/* The interactive part ends up here */}
      </main>
      <Footer />
    </div>
  )
}
