import { useEffect, useState } from "react";

const useLocation = () => {
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [permission, setPermission] = useState<PermissionState>("prompt");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if ("permissions" in navigator) {
      navigator.permissions
        .query({ name: "geolocation" as PermissionName })
        .then((result) => {
          setPermission(result.state);
          result.onchange = () => setPermission(result.state);
        })
        .catch(() => setError("Failed to check location permission."));
    }
  }, []);

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        setError(null);
      },
      (err) => setError(err.message),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 },
    );
  };

  return { location, permission, requestLocation, error };
};

export default useLocation;
