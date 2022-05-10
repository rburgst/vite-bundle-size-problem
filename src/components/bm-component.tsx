import Player from "bitmovin-player";
import { FunctionalComponent } from "preact";
import { useEffect, useRef } from "preact/hooks";

const playerConfig = {
  key: "YOUR KEY HERE",
};

export const BmComponent: FunctionalComponent = () => {
  const playerDivRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef(null);
  useEffect(() => {
    if (playerDivRef.current) {
      const player = new Player(playerDivRef.current, playerConfig);
    }
  }, [playerDivRef, playerRef]);
  return (
    <>
      <div id="bitmovin-player" ref={playerDivRef}></div>
    </>
  );
};
