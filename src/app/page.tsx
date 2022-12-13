import Prompt from "./components/Prompt";

export default function Page() {
  return (
    <div>
      <Prompt
        linkHead="/"
        prompt={[
          "You're Traveling through the forest",
          "when you happen upon a rouge druid milking his gull.",
        ]}
        choices={[
          {
            title: "Be Still.",
            body: "Assume his vision has been clouded after years of consuming the milk.",
          },
          {
            title: "Turn Back.",
            body: "Your conjuring levels are no match for this forbidden incantation.",
          },
          {
            title: "Unsheath Your Lute.",
            body: "Award the pair with a pleasant carol.",
          },
          {
            title: "Confront Him.",
            body: "Politly ask for a glass.",
          },
        ]}
      />
    </div>
  );
}
