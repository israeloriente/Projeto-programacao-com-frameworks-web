import apiClient from "./apiClient";

export const getHello = async () => {
  const response = await apiClient.get("helloworld");
  return response.data;
};
