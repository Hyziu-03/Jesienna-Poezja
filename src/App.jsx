import DiceIcon from "./DiceIcon";
import "./styles/index.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>jesienna.poezja.vercel.app</h1>
      </header>
      <main>
        <article className="controls">
          <section className="name">
            <p className="author">Leopold Staff</p>
            <p className="title">Deszcz Jesienny</p>
          </section>
          <section className="draw">
            <DiceIcon />
            {/*<p className="caption">Wylosuj kolejny wiersz!</p>*/}
          </section>
        </article>
        <article className="text">
          <h2>Tekst:</h2>
          <p className="content">
            O szy­by deszcz dzwo­ni, deszcz dzwo­ni je­sien­ny <br />
            I plusz­cze jed­na­ki, mia­ro­wy, niezmien­ny <br /> 
            Dżdżu kro­ple pa­da­ją i tłu­ką w me okno... <br />
            Jęk szkla­ny... płacz szkla­ny... a szy­by w mgle mok­ną <br /> 
            I świa­tła sza­re­go blask są­czy się sen­ny...</p> <br />
          <img src="../public/illustrations/skull.png" alt="" className="image"/>
          <p className="content">
            O szy­by deszcz dzwo­ni, deszcz dzwo­ni je­sien­ny... <br />
            Wie­czor­nych snów mary powiew­ne, dzie­wi­cze <br />
            Na próż­no cze­ka­ły na słoń­ca ob­li­cze...</p>
        </article>
      </main>
      <footer>
        <p>Szymon Hyziak &copy; 2022</p>
      </footer>
    </div>
  )
}
