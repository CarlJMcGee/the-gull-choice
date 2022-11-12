"use client";

import * as React from "react";
import Prompt from "../../components/Prompt";

export default function Page() {
  return (
    <>
      <Prompt
        linkHead="/3/1/"
        prompt={[
          "You politely demand the druid give you ice for your beverage,",
          `anger now visible on your kind, patient face. He smiles a wicked and smelly smile,
          "Alright then, but you must EARN it. Choose a hand." he cackles, raising his three fists to you.`,
        ]}
        choices={[
          {
            title: "Left Hand.",
            body: ``,
          },
          {
            title: "Right Hand.",
            body: ``,
          },
          {
            title: "Phone A Friend.",
            body: `Use your last remaining life-line to call for help.`,
          },
          {
            title: "Hmm?",
            body: `Sorry I wasn't paying attention, can you say that again?`,
          },
        ]}
      />
    </>
  );
}
