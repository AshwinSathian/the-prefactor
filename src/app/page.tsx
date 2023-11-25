import LandingPage from "@/components/LandingPage/LandingPage";
import { PrimeReactProvider } from "primereact/api";

export default function Home() {
  return (
    <PrimeReactProvider>
      <LandingPage />
    </PrimeReactProvider>
  );
}
