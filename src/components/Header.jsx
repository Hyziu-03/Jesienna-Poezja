import { refresh } from "isola/browser";

export default function Header() {
  return (
    <header className="header" onClick={refresh} tabIndex={0}>
      <h1 className="heading">jesienna.poezja.vercel.app</h1>
    </header>
  );
}
