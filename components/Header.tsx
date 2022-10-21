import Image from "next/image";

const Header = () => (
  <header className="p-2">
    <div className="container flex flex-wrap mx-auto">
      <div className="w-full sm:w-1/4">
        <div className="ml-auto mr-0">
        <Image
          className="rounded-full"
          src="https://github.com/cordx56.png"
          width={100}
          height={100}
        /></div>
      </div>
      <div className="w-full sm:w-3/4 p-4">
        <h1 className="text-5xl">@cordx56</h1>
        <ul className="flex justify-center sm:justify-start">
          <li className="mr-8">
            <h2 className="text-2xl">
              <a href="https://github.com/cordx56" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </h2>
          </li>
          <li className="">
            <h2 className="text-2xl">
              <a href="mailto:cordx56@cordx.net">
                email
              </a>
            </h2>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;
