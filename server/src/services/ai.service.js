import axios from "axios";

export const predictMajor = async (featureVector) => {
  const response = await axios.post("http://127.0.0.1:8000/predict", {
    features: featureVector,
  });

  return response.data;
};
