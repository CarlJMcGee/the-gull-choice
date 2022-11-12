"use client";

import Prompt from "../../../../components/Prompt";

export default function Page() {
  return (
    <>
      <Prompt
        linkHead="/3/0/0/"
        prompt={[
          "The warm milk splatters across the gulls toned legs,",
          "she screeches, hopping 10ft in place, as the druid reaches into his cloak pocket.",
        ]}
        choices={[
          {
            title: "Roll Inititive.",
            body: "Determine the order of combat.",
          },
          {
            title: "Ninja Vanish.",
            body: "Blend into your envionment and disappear from sight.",
          },
          {
            title: "Be on your Guard.",
            body: "Take a defensive postion low to the ground, hands high in the air.",
          },
          {
            title: "Be Insertive",
            body: "Grab for whatever is in the the young man's cloak.",
          },
        ]}
      />
    </>
  );
}
