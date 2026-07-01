import { useState, useEffect } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const userPosition = [23.0225, 72.5714]; // Ahmedabad

const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  iconSize: [40, 40],
});

const helperIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [40, 40],
});

function MapView() {

  const [helperPosition, setHelperPosition] = useState([
    23.0280,
    72.5650,
  ]);

  const [arrived, setArrived] = useState(false);

  useEffect(() => {

    const interval = setInterval(() => {

      setHelperPosition((prev) => {

        const newLat =
          prev[0] + (userPosition[0] - prev[0]) * 0.02;

        const newLng =
          prev[1] + (userPosition[1] - prev[1]) * 0.02;

        const latDiff = Math.abs(newLat - userPosition[0]);
        const lngDiff = Math.abs(newLng - userPosition[1]);

        if (latDiff < 0.0001 && lngDiff < 0.0001) {
          clearInterval(interval);
          setArrived(true);
          return userPosition;
        }

        return [newLat, newLng];

      });

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (
    <MapContainer
      center={userPosition}
      zoom={14}
      style={{
        height: "500px",
        width: "100%",
        borderRadius: "30px",
      }}
    >

      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* User */}

      <Marker
        position={userPosition}
        icon={userIcon}
      >
        <Popup>
          Your Location
        </Popup>
      </Marker>

      {/* Helper */}

      <Marker
        position={helperPosition}
        icon={helperIcon}
      >
        <Popup>
          {arrived
            ? "✅ Helper Arrived"
            : "🚴 Helper On The Way"}
        </Popup>
      </Marker>

      {/* Live Route */}

      <Polyline
        positions={[
          helperPosition,
          userPosition,
        ]}
        pathOptions={{
          color: "#2563EB",
          weight: 5,
        }}
      />

    </MapContainer>
  );
}

export default MapView;