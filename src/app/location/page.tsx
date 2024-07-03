"use client";
import mapboxgl from "mapbox-gl";
import React from "react";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_TOKEN!;

function LocationPage() {
  const mapContainer = React.useRef(null);
  const map = React.useRef(null);

  const [lng, setLng] = React.useState(-70.9);
  const [lat, setLat] = React.useState(42.35);
  const [zoom, setZoom] = React.useState(9);

  React.useEffect(() => {}, []);
  
  return <div>LocationPage</div>;
}

export default LocationPage;
