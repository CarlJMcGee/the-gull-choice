import EndCard from "../../../components/EndCard";

export default function Page() {
  return (
    <>
      <EndCard
        prompt={[
          `Fogg and Passepartout decide to detour north toward the pole,`,
          `riding on a state of the art snow and tundra traversal vehicle.
          As they ride north, technical sabotage and food shortage makes for a slow and painful
          expedition. Fogg becomes quite sick, with only his loyal valet to care for him. Suddenly, as
          all hope seems loss, the group is rescued, then swiftly taken hostage by the secret society
          who has lived in the northern circle for countless generations. While the group narrowly
          avoids execution for trespassing on sacred land, they will not be permitted to leave the
          north; knowledge of the people living there can not risk spreading south. Passepartout
          and Fogg manage to sneak into a dirigible and fly to safety, managing to make their way
          back to the British Isles and complete their challenge with days to spare. The harrowing
          journey around the globe would go on to inspire one of the most famous stories ever put to 
          print.`,
        ]}
      />
    </>
  );
}
