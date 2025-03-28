import React, { useEffect, useRef } from "react";
import { Map, View } from "ol";
//import TileLayer from "ol/layer/Tile";
//import { OSM } from "ol/source";
import { useGeographic } from "ol/proj";

import "ol/ol.css";
import { MapboxVectorLayer } from "ol-mapbox-style";

useGeographic();

// const osmLayer = new TileLayer({ source: new OSM() });
const mapBoxLayer = new MapboxVectorLayer({
  styleUrl: "mapbox://styles/mapbox/bright-v9",
  accessToken:
    "pk.eyJ1IjoiaGVzaTAxNiIsImEiOiJjbThzb2x3bDUwMXZnMmtzZWFydXRmODF0In0.UmDA5L5jhVM4C1LxTVWiGQ",
});

const map = new Map({
  view: new View({ center: [10.8, 59.9], zoom: 10 }),
  layers: [mapBoxLayer],
});

export function Application() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    map.setTarget(mapRef.current!);
  }, []);

  return <div ref={mapRef}></div>;
}
