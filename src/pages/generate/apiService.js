import { mockData } from "./mockData";
import { useMockData } from "./config";

export const fetchData = async () => {
  if (useMockData) {
    return Promise.resolve(mockData);
  }

  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
};
