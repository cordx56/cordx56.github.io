"use client";

import { MouseEvent } from "react";

const Navbar = () => {
  const easing = (x: number) => {
    return 1 - Math.pow(1 - x, 3);
  };
  const scrollTo = (to: string, milisec: number) => {
    const interval = 1;
    const iteration = milisec / interval;
    const start = window.scrollY;
    const target = document.getElementById(to)?.getBoundingClientRect().top;
    if (target) {
      const distance = Math.min(
        target - 8,
        document.documentElement.offsetHeight - window.innerHeight - start,
      );
      const scroll = (distance: number, currentIter: number) => {
        const x = currentIter / iteration;
        window.scrollTo(0, start + distance * easing(x));
        if (currentIter < iteration) {
          setTimeout(scroll, interval, distance, currentIter + 1);
        }
      };
      setTimeout(scroll, interval, distance, 0);
    }
  };
  const scrollClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const url = new URL(e.currentTarget.href);
    scrollTo(url.hash.slice(1), 150);
  };
  return (
    <nav className="nav">
      <ul>
        <li className="inline-block">
          <a href="#profile" onClick={scrollClick}>
            Profile
          </a>
        </li>
        <li className="inline-block">
          <a href="#works" onClick={scrollClick}>
            Works
          </a>
        </li>
        <li className="inline-block">
          <a href="#links" onClick={scrollClick}>
            Links
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
