const fetchZipCode = async (lat: number, lon: number) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`,
    );
    const data = await response.json();
    if (data.address && data.address.postcode) {
      return { address: data.address, postcode: data.address.postcode };
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
};

export default fetchZipCode;
