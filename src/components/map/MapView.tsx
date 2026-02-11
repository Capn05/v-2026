"use client";

import { useState, useCallback } from "react";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MAPBOX_TOKEN, MAP_STYLE, INITIAL_VIEW } from "@/lib/mapbox";
import { memories } from "@/data/memories";
import type { Memory } from "@/types";
import { useMapFlyTo } from "@/hooks/useMapFlyTo";
import { useIsDesktop } from "@/hooks/useMediaQuery";
import MapMarker from "./MapMarker";
import JourneyPath from "./JourneyPath";
import MapControls from "./MapControls";
import PinDetailDrawer from "../detail/PinDetailDrawer";
import TimelineBar from "../timeline/TimelineBar";
import TimelineSidebar from "../timeline/TimelineSidebar";
import MusicToggle from "../shared/MusicToggle";
import OurStats from "../shared/OurStats";

export default function MapView() {
  const [activeMemory, setActiveMemory] = useState<Memory | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { mapRef, flyToMemory, resetView } = useMapFlyTo();
  const isDesktop = useIsDesktop();

  const sortedMemories = [...memories].sort((a, b) => a.order - b.order);

  const handlePinClick = useCallback(
    (memory: Memory) => {
      setActiveMemory(memory);
      flyToMemory(memory, () => {
        setDrawerOpen(true);
      });
    },
    [flyToMemory]
  );

  const handleDrawerClose = useCallback(() => {
    setDrawerOpen(false);
    setTimeout(() => {
      resetView(
        [INITIAL_VIEW.longitude, INITIAL_VIEW.latitude],
        INITIAL_VIEW.zoom
      );
    }, 300);
  }, [resetView]);

  const handleNavigate = useCallback(
    (direction: "prev" | "next") => {
      if (!activeMemory) return;
      const currentIndex = sortedMemories.findIndex(
        (m) => m.id === activeMemory.id
      );
      const nextIndex =
        direction === "next"
          ? Math.min(currentIndex + 1, sortedMemories.length - 1)
          : Math.max(currentIndex - 1, 0);

      if (nextIndex !== currentIndex) {
        const nextMemory = sortedMemories[nextIndex];
        setActiveMemory(nextMemory);
        setDrawerOpen(false);
        flyToMemory(nextMemory, () => {
          setDrawerOpen(true);
        });
      }
    },
    [activeMemory, sortedMemories, flyToMemory]
  );

  const handleTimelineSelect = useCallback(
    (memory: Memory) => {
      handlePinClick(memory);
    },
    [handlePinClick]
  );

  return (
    <div className="relative w-screen h-dvh overflow-hidden">
      <Map
        ref={mapRef}
        initialViewState={INITIAL_VIEW}
        mapboxAccessToken={MAPBOX_TOKEN}
        mapStyle={MAP_STYLE}
        style={{ width: "100%", height: "100%" }}
        maxZoom={18}
        minZoom={4}
      >
        <JourneyPath memories={sortedMemories} />
        {sortedMemories.map((memory, index) => (
          <MapMarker
            key={memory.id}
            memory={memory}
            index={index}
            isActive={activeMemory?.id === memory.id}
            onClick={() => handlePinClick(memory)}
          />
        ))}
        <MapControls />
      </Map>

      {/* Timeline */}
      {isDesktop ? (
        <TimelineSidebar
          memories={sortedMemories}
          activeId={activeMemory?.id ?? null}
          onSelect={handleTimelineSelect}
        />
      ) : (
        <TimelineBar
          memories={sortedMemories}
          activeId={activeMemory?.id ?? null}
          onSelect={handleTimelineSelect}
        />
      )}

      {/* Detail drawer */}
      <PinDetailDrawer
        memory={activeMemory}
        isOpen={drawerOpen}
        onClose={handleDrawerClose}
        onNavigate={handleNavigate}
        isFirst={activeMemory?.order === 1}
        isLast={activeMemory?.order === sortedMemories.length}
      />

      {/* Stats */}
      <OurStats />

      {/* Music toggle */}
      <MusicToggle />
    </div>
  );
}
