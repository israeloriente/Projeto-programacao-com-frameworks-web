import apiClient from "./apiClient";

namespace BarberAPI {
  export const getBarbers = async () => {
    return (await apiClient.get("/barber/"))?.data;
  };
}

export default BarberAPI;
