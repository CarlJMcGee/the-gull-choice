("");

import Image from "next/image";
import EndCard from "../../../components/EndCard";

export default function Page() {
  return (
    <>
      <EndCard
        prompt={[
          "As the milky fog fills your vision,",
          `you see someone, sitting across a table from you. They're beautiful; every detail of 
          their face as though sculpted from marble, their countenance endlessly expressive. 
          \"What could they be doing here with you!\" one can only ask oneself until you look down and all 
          becomes clear. You're sharing a Tinder Tenders meal from KFC™, the meal made for getting 
          to know your Tinder date. Includes 6 Extra Crispy tenders, 2 individual sides, 2 warm and 
          flaky biscuits, 2 medium beverages, and 3 dipping sauces including the brand new Buffalo Ranch 
          Sauce: the newest addition to KFC's already finger lickin' good sauce lineup! Try it today at 
          participating retailers.`,
        ]}
      />
      <Image
        className="mx-auto"
        width={1000}
        src="https://digitaleat.kfc.com/menus/image/bare/kfc-TinderTenders?q=75&w=1280"
        alt="kay ef see tinder tenders meal for two"
      />
    </>
  );
}
