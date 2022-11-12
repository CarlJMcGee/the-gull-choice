"use client";

import EndCard from "../../../../components/EndCard";

export default function Page() {
  return (
    <>
      <EndCard
        prompt={[
          "The halfling, who has definitly been here the whole time,",
          `Politely shakes his head in decline. "What the HELL is that thing?! 
        Why are its legs so long?! Why in the Gods does it have udders?! 
        Why are you all acting like this is normal? I don't understand what's going on?!" he asked calmly.
        "Like, I don't get it? Is this supposed to be a joke? What's the punch line; What is even the 
        setup? Like I know this make me sound old and out of date, but I genuinly don't get this. 
        Is it like 'high art' why your not supposed to get it? This isn't funny, it's just really confusing.
        Is the joke the image itself? If that's the case why did someone go through the effort to 
        write all this extra nonsense. It just doesn't make sense. Like back in the day, memes 
        were pretty cut and dry: you had an image of an animal, top text, and bottem text. But now it just
        seems like people are throwing whatever at the wall, and seeing what sticks. No rhyme or reason. 
        I mean, I know it's not that big of a deal at the end of the day, but still."`,
        ]}
      />
    </>
  );
}
