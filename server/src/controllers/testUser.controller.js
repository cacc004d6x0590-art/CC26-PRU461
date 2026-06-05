import { predictMajor } from "../services/ai.service.js";
import { buildFeatureVector } from "../services/featureVector.service.js";
import { preprocessData } from "../services/preprocess.service.js";

export const createTest = async (req, res) => {
  try {
    const processedData = preprocessData(req.body);

    const featureVector = buildFeatureVector(processedData);

    const prediction = await predictMajor(featureVector);

    res.status(200).json({
      success: true,
      prediction,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
