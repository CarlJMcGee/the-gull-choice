import "../styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>The Gull Choice</title>
        <meta
          name="description"
          content="The choice has always been yours, my friend..."
        />
        <link rel="stylesheet" href="../styles/global.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
