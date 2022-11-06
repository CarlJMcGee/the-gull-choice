import { type NextPage } from "next";
import Image from "next/image";

import gull from "./assets/gull-milk(cropped).jpg";

const Home: NextPage = () => {
  return (
    <>
      <main>
        <Image src={gull} alt="the gull and the druid" width={250} />
      </main>
    </>
  );
};

export default Home;
