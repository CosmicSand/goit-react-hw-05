import Navigation from "../components/Navigation/Navigation";
import ScrollBtn from "../components/ScrollBtn/ScrollBtn";

export default function HeaderPage({ isScroll }) {
  return (
    <header className="header" id="header">
      <Navigation></Navigation>
      {isScroll && <ScrollBtn />}
    </header>
  );
}
