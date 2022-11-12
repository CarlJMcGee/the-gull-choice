import "../styles/globals.css";
import Image from "next/image";
import gull from "./assets/gull-milk(cropped).jpg";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="m-5 flex flex-row justify-center">
          <Image src={gull} alt="the gull and the druid" width={500} />
        </div>

        {children}
      </body>
    </html>
  );
}
