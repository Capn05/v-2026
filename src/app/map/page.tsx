"use client";

import dynamic from "next/dynamic";

const MapView = dynamic(() => import("@/components/map/MapView"), {
  ssr: false,
  loading: () => (
    <div className="w-screen h-dvh bg-blush flex items-center justify-center">
      <div className="text-center">
        <div className="animate-pulse text-4xl mb-4">💕</div>
        <p className="font-serif text-rose text-lg">Loading our memories...</p>
      </div>
    </div>
  ),
});

export default function MapPage() {
  return <MapView />;
}
