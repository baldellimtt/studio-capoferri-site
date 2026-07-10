import type { Metadata } from "next";
import { buildSteelLandingMetadata, SteelLandingPage, steelLandingBergamo } from "@/lib/steel-landing";

export const metadata: Metadata = buildSteelLandingMetadata(steelLandingBergamo);

export default function ProgettazioneStruttureAcciaioBergamoPage() {
  return <SteelLandingPage config={steelLandingBergamo} />;
}
