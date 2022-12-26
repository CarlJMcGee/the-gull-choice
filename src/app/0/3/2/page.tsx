import EndCard from "../../../components/EndCard";

export default function Page() {
  return (
    <>
      <EndCard
        prompt={[
          `Fogg and Passepartout make their way south to Budapest,`,
          `as they journey across the beautiful divided city, Fogg says, "You know what,
      I kind of like it here. The climate, the people: I think it's perfect. Lets just stay here.
      Passepartout is not a huge fan of the city, not that there's anything wrong with Budapest, he just
      doesn't really vibe with it. Passepartout says his final good by to his friend and employer, 
      then boards his train back to France. Fogg would, as fate would have it, later die of a cold. `,
        ]}
      />
    </>
  );
}
