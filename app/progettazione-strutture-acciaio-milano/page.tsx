import type { Metadata } from "next";
import { buildSteelLandingMetadata, SteelLandingPage, steelLandingMilano } from "@/lib/steel-landing";

export const metadata: Metadata = buildSteelLandingMetadata(steelLandingMilano);

export default function ProgettazioneStruttureAcciaioMilanoPage() {
  return <SteelLandingPage config={steelLandingMilano} />;
}
