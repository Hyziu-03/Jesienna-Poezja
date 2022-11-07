import { refresh } from "isola/browser";

import DiceIcon from "./DiceIcon";

export default function Draw() {
  return (
    <section className="draw" onClick={refresh} tabIndex={0}>
        <DiceIcon />
        <p className="caption">Wylosuj kolejny wiersz!</p>
    </section>
  );
}
