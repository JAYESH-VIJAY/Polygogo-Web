import { API_ROUTE } from "@/constant/url";
import axios, { AxiosError, AxiosResponse } from "axios";

interface PosterType {
  method: "POST" | "PUT" | "DELETE" | "GET";
  bodyData?: any;
  url: string;
  authToken?: any;
}

// By using this function, we can call POST, DELETE, and PUT methods
const poster = async ({
  url,
  method = "POST",
  bodyData,
  authToken,
}: PosterType) => {
  const config = {
    method: method,
    url: API_ROUTE + url,
    data: bodyData,
    headers: { Authorization: `Bearer ${authToken}` },
  };

  try {
    const response: AxiosResponse = await axios(config);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
    throw error; // Rethrow the error for the calling function to handle it
  }
};

const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    console.error("Axios Error:", error.message);

    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);

      // Handle specific HTTP error codes
      if (error.response.status === 401) {
        console.error("Unauthorized - Check authentication credentials");
      } else if (error.response.status === 404) {
        console.error("Resource not found");
      }
      // Add more specific error handling as needed
    } else if (axios.isAxiosError(error) && error.request) {
      console.error("Request made but no response received");
      console.error("Request:", error.request);
    } else {
      console.error("Error setting up request:", (error as AxiosError).message);
    }

    console.error("Error config:", (error as AxiosError).config);
  } else {
    console.error("Non-Axios Error:", (error as Error).message);
  }
};

export { poster };
