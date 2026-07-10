import type { Metadata } from "next";
import { buildSteelLandingMetadata, SteelLandingPage, steelLandingBrescia } from "@/lib/steel-landing";

export const metadata: Metadata = buildSteelLandingMetadata(steelLandingBrescia);

export default function ProgettazioneStruttureAcciaioBresciaPage() {
  return <SteelLandingPage config={steelLandingBrescia} />;
}
