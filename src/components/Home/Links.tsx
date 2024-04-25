import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faKeybase } from "@fortawesome/free-brands-svg-icons";

const Links = () => (
  <section id="links" className="box">
    <h1 className="h1">Links</h1>
    <h2 className="h2">Social</h2>
    <ul className="pl-2 my-2">
      <li>
        <FontAwesomeIcon icon={faGithub} className="mr-2" />
        <a href="https://github.com/cordx56" target="_blank" rel="noreferrer">
          GitHub
        </a>{" "}
        <small>@cordx56</small>
      </li>
      <li>
        <FontAwesomeIcon icon={faKeybase} className="mr-2" />
        <a href="https://keybase.io/cordx56" target="_blank" rel="noreferrer">
          Keybase
        </a>{" "}
        <small>@cordx56</small>
      </li>
    </ul>
    <h2 className="h2">Blog</h2>
    <ul className="ul">
      <li>
        <a href="https://blog.cordx.cx/" target="_blank" rel="noreferrer">
          Arc&lt;hive&gt;
        </a>{" "}
        (tech blog)
      </li>
      <li>
        <a
          href="https://cordx56.hatenablog.com/"
          target="_blank"
          rel="noreferrer"
        >
          正論なんて諭んないで
        </a>{" "}
        (others)
      </li>
    </ul>
    <h2 className="h2">Wishlists</h2>
    <ul className="ul">
      <li>
        <a
          href="https://www.amazon.jp/hz/wishlist/ls/1ZGQXE8MOZ3BM?ref_=wl_share"
          target="_blank"
          rel="noreferrer"
        >
          Tools
        </a>
      </li>
      <li>
        <a
          href="https://www.amazon.jp/hz/wishlist/ls/10NBRCXBA42XF?ref_=wl_share"
          target="_blank"
          rel="noreferrer"
        >
          Foods
        </a>
      </li>
    </ul>
    <h2 className="h2">Others</h2>
    <ul className="ul">
      <li>
        <a href="https://otsu.care/" target="_blank" rel="noreferrer">
          お疲れ様です
        </a>
      </li>
      <li>
        <a href="https://moudame.com/" target="_blank" rel="noreferrer">
          もうだめ
        </a>
      </li>
      <li>
        <a href="https://internetyame.ro/" target="_blank" rel="noreferrer">
          インターネットやめろ
        </a>
      </li>
      <li>
        <a href="https://dareka.help/" target="_blank" rel="noreferrer">
          誰か助けて〜
        </a>
      </li>
      <li>
        <a href="https://iterator.zip/" target="_blank" rel="noreferrer">
          iterator.zip
        </a>
      </li>
    </ul>
  </section>
);

export default Links;
