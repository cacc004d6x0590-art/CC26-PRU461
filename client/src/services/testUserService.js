import api from "../api/api";

export const createTest = async (answers) => {
  const response = await api.post("/test", answers);

  return response.data;
};
