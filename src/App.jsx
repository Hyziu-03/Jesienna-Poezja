import "./styles/index.css";
import { poems } from "./poems";
import { generateRandomNumberInRange } from "isola/utilities";

import DiceIcon from "./DiceIcon";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  function drawPoem() {
    const index = generateRandomNumberInRange(0, poems.length) - 1;
    document.getElementById("author").innerText = poems[index].author;
    document.getElementById("title").innerText = poems[index].title;
  }
  window.addEventListener("load", drawPoem);

  return (
    <div className="App">
      <Header />
      <main>
        {/* The interactive part starts from here */}
        <article className="controls">
          <section className="name">
            <p className="author" id="author"></p>
            <p className="title" id="title"></p>
          </section>
          <section className="draw" onClick={drawPoem}>
            <DiceIcon />
            <p className="caption">Wylosuj kolejny wiersz!</p>
          </section>
        </article>
        <article className="text">
          <h2 className="subheading">Tekst:</h2>
            <p className="content"></p> 
          <img src="/illustrations/dalle_pumpkin_01.png" alt="" className="image"/>
        </article>
        {/* The interactive part ends up here */}
      </main>
      <Footer />
    </div>
  )
}
