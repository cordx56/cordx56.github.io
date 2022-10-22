import Image from "next/image";

const Header = () => (
  <header className="sticky p-4 cards-container">
    <div className="flex flex-col sm:flex-row justify-center items-center mx-auto h-full">
      <Image
        className="rounded-full mr-4"
        src="https://github.com/cordx56.png"
        width={100}
        height={100}
        alt="cordx56 icon"
      />
      <div className="pt-2 px-4">
        <h1 className="text-5xl">@cordx56</h1>
        <ul className="flex justify-around">
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
              <a href="mailto:cordx56@cordx.net">email</a>
            </h2>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;
