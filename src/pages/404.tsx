import EndCard from "../components/EndCard";

export default function NotFound() {
  return (
    <EndCard
      prompt={[
        "Uh Oh,",
        "this is awkward. I haven't actually built an ending for this route. So you can either hit the back button, or start over.",
      ]}
    />
  );
}
