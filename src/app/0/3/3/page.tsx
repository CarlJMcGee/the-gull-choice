import EndCard from "../../../components/EndCard";

export default function Page() {
  return (
    <>
      <EndCard
        prompt={[
          `Fogg and Passepartout consider this suggestion,`,
          `then thank you, as they head back the way they came. After secretly reentering London, the duo
      hide in Fogg's cellar for 70 days, before sneaking back out of the city, then riding the train
      back in. The pair relish their fame with Fogg commissioning a book recounting their "adventure"
      where he just made a bunch of nonsense up and published it. That book would go on to be one of
      the most famous stories ever put to print.`,
        ]}
      />
    </>
  );
}
