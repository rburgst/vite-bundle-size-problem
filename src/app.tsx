import { Logo } from "./logo";
import { useEffect, useRef } from "preact/hooks";
import { Player } from "bitmovin-player";
import { BmComponent } from "./components/bm-component";

export function App() {
  return (
    <>
      <Logo />
      <p>Hello Vite + Preact!</p>
      <p>
        <a
          class="link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
        <BmComponent />
      </p>
    </>
  );
}
