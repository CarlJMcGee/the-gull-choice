import EndCard from "../../../components/EndCard";

export default function Page() {
  return (
    <>
      <EndCard
        prompt={[
          `You pickup some rocks from the ground and start thowig them in the air.`,
          `The sweaty stranger and his gull look up in amazement, then horror as the 30 or so rocks 
          fall onto them, killing them both. You look around to see if anyone saw, then quickly meander 
          elsewhere, pushing the days events to the back of your mind to deal with later.`,
        ]}
      />
    </>
  );
}
