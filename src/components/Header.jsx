const path = "../../public/assets/favicon.webp";
const shortenedTitle = "KALNICA";
const fullTitle = "KALNICA - Jesienna Poezja";

export default function Header() {
  const condition = window.innerWidth < 465;
  return (
    <header className="header" tabIndex={0}>
      <img src={path} alt="" />
      <h1 className="heading">
        {condition ? shortenedTitle : fullTitle}
      </h1>
    </header>
  );
}
