import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMoralis, useNativeBalance } from "react-moralis";

function Index() {
  const { isAuthenticated, logout } = useMoralis();
  const router = useRouter();
  const { data: balance } = useNativeBalance();

  useEffect(() => {
    if (!isAuthenticated) router.replace("/");
  }, [isAuthenticated]);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <Head>
        <title>WormWallet Dashboard</title>
      </Head>
      <div>{balance.formatted}</div>
      <button className="button bg-red-300" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
export default Index;
