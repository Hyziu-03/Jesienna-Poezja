import DiceIcon from "./DiceIcon";
import "./styles/index.css";
import { poems } from "./poems";

const index = 0, verseNumber = 0;

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>jesienna.poezja.vercel.app</h1>
      </header>
      <main>
        <article className="controls">
          <section className="name">
            <p className="author">{poems[index].author}</p>
            <p className="title">{poems[index].title}</p>
          </section>
          <section className="draw">
            <DiceIcon />
            {/*<p className="caption">Wylosuj kolejny wiersz!</p>*/}
          </section>
        </article>
        <article className="text">
          <h2>Tekst:</h2>
          <p className="content" dangerouslySetInnerHTML={
            { __html: poems[index].verse[verseNumber] }
          }></p> 
          <img src="/illustrations/skull.png" alt="" className="image"/>
        </article>
      </main>
      <footer>
        <p>Szymon Hyziak &copy; 2022</p>
      </footer>
    </div>
  )
}
