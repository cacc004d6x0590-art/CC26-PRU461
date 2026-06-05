import * as tf from "@tensorflow/tfjs-node";
import path from "path";

let model = null;

export const loadModel = async () => {
  if (!model) {
    const modelPath = `file://models/tfjs_model/model.json")}`;

    model = await tf.loadLayersModel(modelPath);

    console.log("✅ TensorFlow Model Loaded");
    model.summary();
  }

  return model;
};

export const predict = async (inputArray) => {
  const loadedModel = await loadModel();

  const tensor = tf.tensor2d(inputArray);

  const prediction = loadedModel.predict(tensor);

  const result = await prediction.array();

  tensor.dispose();
  prediction.dispose();

  return result;
};
