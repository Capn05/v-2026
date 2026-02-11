"use client";

import { useEffect, useState } from "react";
import { Source, Layer } from "react-map-gl";
import type { Memory } from "@/types";

interface JourneyPathProps {
  memories: Memory[];
}

export default function JourneyPath({ memories }: JourneyPathProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate the line drawing
    const duration = 3000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const p = Math.min(elapsed / duration, 1);
      // Ease out cubic
      setProgress(1 - Math.pow(1 - p, 3));

      if (p < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timeout = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 1500); // Start after pins appear

    return () => clearTimeout(timeout);
  }, []);

  const sorted = [...memories].sort((a, b) => a.order - b.order);
  const allCoords = sorted.map((m) => m.coordinates);

  // Only show up to current progress
  const coordCount = Math.max(
    2,
    Math.floor(allCoords.length * progress)
  );
  const visibleCoords = allCoords.slice(0, coordCount);

  const geojson: GeoJSON.Feature<GeoJSON.LineString> = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: visibleCoords,
    },
  };

  return (
    <Source id="journey-path" type="geojson" data={geojson}>
      <Layer
        id="journey-line"
        type="line"
        paint={{
          "line-color": "#F4A0B0",
          "line-width": 2.5,
          "line-dasharray": [4, 3],
          "line-opacity": 0.7,
        }}
        layout={{
          "line-join": "round",
          "line-cap": "round",
        }}
      />
    </Source>
  );
}
