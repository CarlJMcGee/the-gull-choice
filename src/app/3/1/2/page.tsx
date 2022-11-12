"use client";

import Prompt from "../../../../components/Prompt";

export default function Page() {
  return (
    <>
      <Prompt
        linkHead="/3/1/2/"
        prompt={[
          "Anxiety swells as you wait for your call to be answered.",
          `The phone ring, then rings, then rings again, then a few more times. Until finally 
        you hear a voice on the other end of the line.`,
        ]}
        choices={[
          {
            title: "Mom",
            body: "Good old mom knows everything.",
          },
          {
            title: "Dad",
            body: "It's been years, but this is too important to let feelings get in the way.",
          },
          {
            title: "Ken Jennings",
            body: "Nerd from Seattle, Washington.",
          },
          {
            title: "Barnes Murphy",
            body: "He knows stuff.",
          },
        ]}
      />
    </>
  );
}
