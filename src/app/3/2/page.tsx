import EndCard from "../../components/EndCard";

export default function Page() {
  return (
    <>
      <EndCard
        prompt={[
          `The milk seeps into the poor druid's eyes,`,
          `"Ah, my eyes!" he screams. You take the oppertunity to grab the gull and run. 
        After some time, you finally stop to rest. The fragile gull looks up at you and says, 
        "Thank you stranger, that man stole me from my family years ago. Will you help me find them?" 
        You smile at the bird with the glint of adventure in your eye, answering, "Where do we start?"`,
        ]}
      />
    </>
  );
}
