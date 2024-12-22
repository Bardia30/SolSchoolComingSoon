import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      {/* Head Section */}
      <Head>
        <title>Sol School of Music</title>
        <meta name="description" content="Welcome to Sol School of Music - Coming Soon!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground font-hanken">
        {/* Logo Section */}
        <div className="mb-28">
          <Image
            src="/Logo.jpg"
            alt="Sol School of Music Logo"
            width={600}
            height={600}
            className="w-auto h-auto max-w-full max-h-full"
          />
        </div>

        {/* Coming Soon Section */}
        <h1 className="font-bold mb-8 leading-tight">
          Coming Soon
        </h1>

        {/* Footer Section */}
        <footer>
          <p>
            Call us:{" "}
            <a href="tel:(416)-819-2817" className="underline mr-8">
              (416)-819-2817
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:solschoolofmusic@gmail.com" className="underline">
              solschoolofmusic@gmail.com
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}