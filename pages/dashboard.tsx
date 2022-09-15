import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMoralis, useNativeBalance, useNFTBalances } from "react-moralis";

function Index() {
  const { isAuthenticated, logout, user } = useMoralis();
  const { getNFTBalances, data, error } = useNFTBalances();
  const router = useRouter();
  const { data: balance } = useNativeBalance();

  useEffect(() => {
    if (!isAuthenticated) router.replace("/");
  }, [isAuthenticated]);

  const NftImages = () => {
    return (
      <>
        {data.result.map((item, i) => {
          console;
          if (item.metadata.animation_url) {
            return (
              <video width="320" height="240" controls>
                <source src={item.metadata.animation_url} type="video/mp4" />
              </video>
            );
          }
          return (
            <Image
              width="300"
              height="300"
              key={i}
              src={item.metadata.image}
            ></Image>
          );
        })}
      </>
    );
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <Head>
        <title>Wallet Worm Dashboard</title>
      </Head>
      <div className="px-12">{'JSON.stringify(user.get("username"))'}</div>
      <div>
        {error && <>{JSON.stringify(error)}</>}
        {/* <button onClick={() => getNFTBalances({ params: { chain: "rinkeby", address: user.accounts[0] })}>
          Refetch NFTBalances
        </button> */}
        {data ? <NftImages /> : null}
        <div>{JSON.stringify(data, null, 2)}</div>
      </div>
      <div>{balance.formatted}</div>
      <button className="button bg-red-300" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
export default Index;
