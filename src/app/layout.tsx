import "../styles/globals.css";
import Image from "next/image";
import gull from "./assets/gull-milk(cropped).jpg";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>The Gull Choice</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="The choice has always been yours, my friend..."
        />
        <link rel="stylesheet" href="../styles/global.css" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <div className="m-5 flex flex-row justify-center">
          <Image src={gull} alt="the gull and the druid" width={500} />
        </div>

        {children}
      </body>
    </html>
  );
}
