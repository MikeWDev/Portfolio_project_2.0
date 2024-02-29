import { useEffect, useState } from "react";
const UseIntersecting = () => {
  const [stickyNav, setStickyNav] = useState("");
  const [homePadding, setHomePadding] = useState("");
  const [navStyle, setNavStyle] = useState("");
  useEffect(() => {
    const obs = new IntersectionObserver(
      function (entires) {
        const ent = entires[0];

        if (ent.isIntersecting === false) {
          setStickyNav("sticky-nav");
          setHomePadding("home-padding");
          setTimeout(() => {
            setStickyNav("sticky-nav sticky-nav-slide ");
            setNavStyle("nav-style");
          }, 300);
        } else {
          setStickyNav(" ");
          setHomePadding(" ");
          setNavStyle("");
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-90px",
      }
    );

    const homeElement = document.querySelectorAll(".home");

    homeElement.forEach((el) => {
      obs.observe(el);
    });
  }, [stickyNav]);

  return { stickyNav, homePadding, navStyle };
};

export default UseIntersecting;
