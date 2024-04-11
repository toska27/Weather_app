import React, { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./Map.css";

const Map = ({ place }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [zoom, setZoom] = useState(0);
  const lonCoordinate = place.hasOwnProperty("main")
    ? place.coord.lon
    : "0.000000";
  const latCoordinate = place.hasOwnProperty("main")
    ? place.coord.lat
    : "0.000000";

  maptilersdk.config.apiKey = "HGwsGiRN39SdZYO0C0Mq";

  useEffect(() => {
    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [lonCoordinate, latCoordinate],
      zoom: lonCoordinate === "0.000000" ? zoom : 7,
    });
    if (lonCoordinate != "0.000000") {
      new maptilersdk.Marker({ color: "#FF0000" })
        .setLngLat([lonCoordinate, latCoordinate])
        .addTo(map.current);
    }
  }, [lonCoordinate, latCoordinate, place]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
};

export default Map;
