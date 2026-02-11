"use client";

import { NavigationControl } from "react-map-gl";

export default function MapControls() {
  return (
    <NavigationControl
      position="top-right"
      showCompass={false}
      style={{ marginTop: 60 }}
    />
  );
}
