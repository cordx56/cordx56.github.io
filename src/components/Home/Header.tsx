"use client";

import { useEffect, useRef, useState } from "react";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerContentsRef = useRef<HTMLDivElement>(null);
  const [headerContentsWrapperTop, setHeaderContentsWrapperTop] = useState(0);
  const [blur, setBlur] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const onScrollOrResize = () => {
    updateHeader();
  };
  const updateHeader = (reset = false) => {
    const maxBlur = 8;
    if (window && headerRef.current && headerContentsRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      const headerContentsHeight = headerContentsRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const initScrollY = headerHeight - headerContentsHeight;
      if (reset) {
        setHeaderContentsWrapperTop(0);
        window.scrollTo(0, initScrollY);
      } else if (scrollY < initScrollY) {
        setHeaderContentsWrapperTop(
          (headerHeight - scrollY - headerContentsHeight) / 2,
        );
        setBlur(0);
      } else {
        setHeaderContentsWrapperTop(0);
        setBlur(
          Math.min(1, (scrollY - initScrollY) / headerContentsHeight) * maxBlur,
        );
      }
    }
  };
  const onNameClick = () => {
    setShowLogo(!showLogo);
  };
  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", onScrollOrResize);
      window.addEventListener("resize", onScrollOrResize);
      updateHeader(true);

      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDark(mq.matches);
      mq.onchange = (e) => {
        setIsDark(e.matches);
      };
    }
    return () => {
      if (window) {
        window.removeEventListener("scroll", onScrollOrResize);
        window.removeEventListener("resize", onScrollOrResize);
      }
    };
  }, []);

  const [qrcode, setQrcode] = useState(false);
  const qrcodeSwitch = () => {
    setQrcode(!qrcode);
  };
  return (
    <header
      className="sticky top-0 z-0 h-screen"
      ref={headerRef}
      style={{ filter: `blur(${blur}px)` }}
    >
      <div
        className="absolute w-full"
        style={{ top: headerContentsWrapperTop }}
      >
        <div
          className="flex flex-col sm:flex-row justify-center items-center p-4"
          ref={headerContentsRef}
        >
          <div className="delay-1" style={{ width: 100, height: 100 }}>
            {qrcode ? (
              <img
                className="w-full h-full"
                src="/qr-cordx-cx.svg"
                alt="cordx.cx QR code"
                onClick={qrcodeSwitch}
              />
            ) : (
              <img
                className="rounded-full w-full h-full"
                src="/icon.png"
                alt="cordx56 icon"
                onClick={qrcodeSwitch}
              />
            )}
          </div>
          <div className="w-72 py-2 px-4">
            {showLogo ? (
              <img
                src={isDark ? "/logo-white.svg" : "/logo-black.svg"}
                alt="logo"
                className="h-12 mx-auto"
                onClick={onNameClick}
              />
            ) : (
              <h1
                className="block text-5xl text-center delay-2"
                onClick={onNameClick}
              >
                @cordx56
              </h1>
            )}
            <ul className="flex justify-between">
              <li className="">
                <h2 className="text-2xl">
                  <a
                    href="https://github.com/cordx56"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </h2>
              </li>
              <li className="">
                <h2 className="text-2xl">
                  <a
                    href="https://keybase.io/cordx56"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Keybase
                  </a>
                </h2>
              </li>
              <li className="">
                <h2 className="text-2xl">
                  <a href="mailto:cordx56@cordx.cx">email</a>
                </h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
