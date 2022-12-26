import EndCard from "../../components/EndCard";

export default function Page() {
  return (
    <EndCard
      prompt={[
        `"...won't you fly high, free bird, yeah?"`,
        `The druid and gull cheer demanding an encore. You end up playing Freebird at least six more times
  before passing out in exhaustion. You wake up with $20 stuffed into your pocket.`,
      ]}
    />
  );
}
