import LandingPage from "@/components/LandingPage/LandingPage";
import Head from "next/head";
import { PrimeReactProvider } from "primereact/api";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="vuKVBhnZ3XiP7AOIJ5boOHpf-uWMi37hs1YXWLO9xfM"
        >
          vuKVBhnZ3XiP7AOIJ5boOHpf-uWMi37hs1YXWLO9xfM
        </meta>
      </Head>

      <PrimeReactProvider>
        <LandingPage />
      </PrimeReactProvider>
    </>
  );
}
