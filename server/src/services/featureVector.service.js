import metadata from "../metadata/inference_metadata.json" with { type: "json" };

export const buildFeatureVector = (processedData) => {
  const { feature_cols, num_features } = metadata;

  const featureVector = feature_cols.map(
    (feature) => processedData[feature] ?? 0,
  );

  if (featureVector.length !== num_features) {
    throw new Error(
      `Feature vector mismatch. Expected ${num_features}, got ${featureVector.length}`,
    );
  }

  return featureVector;
};
