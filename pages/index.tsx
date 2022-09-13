import Head from "next/head";
import { useRouter } from "next/router";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";

export default function Home() {
  const { isAuthenticated, authenticate } = useMoralis();
  const router = useRouter();
  useEffect(() => {
    if (isAuthenticated) router.replace("/dashboard");
  }, [isAuthenticated]);
  return (
    <div>
      <Head>
        <title>Wallet Worm</title>
        <meta name="description" content="All things crypto wallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-white bg-gray-900">
        <div className="px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
              Wallet Worm
              <span className="sm:block">Frictionless Web3.</span>
            </h1>

            <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
              Connect all of your crypto wallets and Transport and Visualize
              cross chain assets. LFG.
            </p>

            <div className="flex flex-wrap justify-center mt-8 gap-4">
              <button
                onClick={() =>
                  authenticate({
                    signingMessage: "Authorize Wallet",
                    provider: "walletConnect",
                  })
                }
                className="button animate-pulse"
              >
                Login using WalletConnect
              </button>

              <a className="button2" href="/about">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <h1>Welcome to Wallet Worm!</h1>
      </section>
    </div>
  );
}
