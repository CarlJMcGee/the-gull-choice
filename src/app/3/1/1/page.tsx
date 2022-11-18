"use client";

import { useEffect, useState } from "react";
import * as random from "lol-random";
import EndCard from "../../../components/EndCard";

export default function Page() {
  const [coin, flipCoin] = useState<string | null>(null);
  useEffect(() => {
    flipCoin(random.coinFlip());
  });

  return (
    <>
      {coin === "heads" ? (
        <EndCard
          prompt={[
            `"You choose... wisely."`,
            `The old fellow presents his left hand to you, cold wads of hair and skin encased in ice. 
        Finaly, you can enjoy your beverage with your new friend as the sun sets on this blessed day.`,
          ]}
        />
      ) : (
        <EndCard
          prompt={[
            `"You choose... poorly."`,
            `Dark energy springs forth from the middling druid's left hand ensnaring your soul. 
            And with the power of but a word, you are killed: "Bazinga"`,
          ]}
        />
      )}{" "}
    </>
  );
}
