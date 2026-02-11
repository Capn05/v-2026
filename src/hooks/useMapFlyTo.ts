"use client";

import { useCallback, useRef } from "react";
import type { MapRef } from "react-map-gl";
import { FLY_TO_OPTIONS } from "@/lib/mapbox";
import type { Memory } from "@/types";

export function useMapFlyTo() {
  const mapRef = useRef<MapRef>(null);

  const flyToMemory = useCallback(
    (memory: Memory, onComplete?: () => void) => {
      const map = mapRef.current;
      if (!map) return;

      map.flyTo({
        center: memory.coordinates,
        zoom: FLY_TO_OPTIONS.zoom,
        pitch: FLY_TO_OPTIONS.pitch,
        bearing: FLY_TO_OPTIONS.bearing,
        speed: FLY_TO_OPTIONS.speed,
        curve: FLY_TO_OPTIONS.curve,
        essential: true,
      });

      if (onComplete) {
        const handler = () => {
          onComplete();
          map.off("moveend", handler);
        };
        map.on("moveend", handler);
      }
    },
    []
  );

  const resetView = useCallback(
    (center: [number, number], zoom: number) => {
      const map = mapRef.current;
      if (!map) return;

      map.flyTo({
        center,
        zoom,
        pitch: 0,
        bearing: 0,
        speed: 0.6,
        essential: true,
      });
    },
    []
  );

  return { mapRef, flyToMemory, resetView };
}
