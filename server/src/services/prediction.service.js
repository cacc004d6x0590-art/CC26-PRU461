import * as tf from "@tensorflow/tfjs-node";
import { loadModel } from "./model.service.js";

export const predictMajor = async (featureVector) => {
  const model = await loadModel();

  const inputTensor = tf.tensor2d([featureVector], [1, featureVector.length]);

  const prediction = model.predict(inputTensor);

  const probabilities = await prediction.data();

  const probsArray = Array.from(probabilities);

  const classId = probsArray.indexOf(Math.max(...probsArray));

  return {
    class_id: classId,
    confidence: Math.max(...probsArray),
    probabilities: probsArray,
  };
};
