"use client";

import EndCard from "../../../../components/EndCard";

export default function Page() {
  return (
    <>
      <EndCard
        prompt={[
          `As you lunge for the druid's odorous cloak,`,
          `time slows to a crawl. You see the glint of something hiding in the folds, 
        but you can't make out what. You meet the pee stained man and reach blindly into the cloak.
        When your hand touches something, you stop. You stare deeply into the druids eyes as you pull out
        Mr Hamlton, the stuffed owlbear you loved as a child; lost decades before in a terrible skiing 
        accident. "Dad?" "Welcome home, son." The two of you embrace, knowing now that everything will be alright.`,
        ]}
      />
    </>
  );
}
