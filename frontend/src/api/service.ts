import apiClient from "./apiClient";

namespace ServiceAPI {
  export const getServices = async () => {
    return (await apiClient.get("/service/"))?.data;
  };
}

export default ServiceAPI;
