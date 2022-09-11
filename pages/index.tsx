import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
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
    <div className={styles.container}>
      <Head>
        <title>Worm Wallet</title>
        <meta name="description" content="All things crypto wallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={`${styles.title} py-4`}>Welcome to WormWallet!</h1>
        <button
          onClick={() => authenticate({ signingMessage: "Authorize Wallet" })}
          className="px-7 py-4 text-xl rounded-xl bg-blue-300 animate-pulse"
        >
          Login using WalletConnect
        </button>
      </main>
    </div>
  );
}
