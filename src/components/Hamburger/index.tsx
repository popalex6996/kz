import "./index.css";
import { useState } from "react";
import Index from "../Button";

const links = [
  { text: "Головна", link: "1", id: "1" },
  { text: "Профіль", link: "2", id: "2" },
  { text: "Каталог товарів", link: "3", id: "3" },
  { text: "Кошик", link: "4", id: "4" },
];

const Hamburger = () => {
  const [isOpen, setMenuOpen] = useState(false);

  const onOpen = () => {
    setMenuOpen(true);
    // @ts-ignore
    const menu = document.getElementById("hamburger-menu");
    menu?.classList.toggle("hamburger-open");
  };

  const onClose = () => {
    setMenuOpen(false);
    // @ts-ignore
    const menu = document.getElementById("hamburger-menu");
    menu?.classList.remove("hamburger-open");
  };

  return (
    <div className="hamburger-wrapper">
      <Index type="hamburger" onClick={onOpen} />
      <div className={` ${isOpen && "hamburger-shadow"}`} onClick={onClose}>
        <div id="hamburger-menu" className="hamburger-menu">
          <Index
            className="hamburger-close"
            type="hamburger"
            onClick={onClose}
          />
          <div>
            {links.map((l) => (
              <div key={l.id} className="link">
                {l.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
