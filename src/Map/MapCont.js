import React, { useEffect, useRef, useState } from "react";
import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";

export default function SimpleMap() {
  const listingPins = [
    {
      title: "Food Dey Here",
      latitude: 5.678138,
      longitude: -0.172901,
    },
    {
      title: "Food Dey Here",
      latitude: 5.682921,
      longitude: -0.165863,
    },
    {
      title: "Food Dey Here",
      latitude: 5.683818,
      longitude: -0.174017,
    },
    {
      title: "Food Dey Here",
      latitude: 5.680273,
      longitude: -0.167542,
    },

    {
      title: "Food Dey Here",
      latitude: 5.688865,
      longitude: -0.198784,
    },
  ];

  const [currentPosition, setCurrentPosition] = useState({});

  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  });

  const renderMarkers = (map, maps) => {
    console.log(map, maps);
    let marker = new maps.Marker({
      position: listingPins,
      map,
      title: "Food Dey Here",
    });
    return marker;
  };

  const Pins = listingPins.map((listing, index) => {
    if (listing.latitude === null || listing.longitude === null) {
      return null;
    } else {
      return (
        <MapMarker
          name={"Food"}
          key={index}
          listing={listing}
          lat={listing.latitude}
          lng={listing.longitude}
        />
      );
    }
  });

  const defaultProps = {
    center: {
      lat: 5.678138,
      lng: -0.172901,
    },
    zoom: 13,
  };

  return (
    // Important! Always set the container height explicitly
    <div className="container" style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_API_KEY,
          libraries: ["places", "directions"],
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals={true}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      >
        {Pins}
      </GoogleMapReact>
    </div>
  );
}
