import json
import numpy as np
from model_loader import model

with open("metadata/label_mapping.json", "r", encoding="utf-8") as f:
    LABELS = json.load(f)


def predict_major(feature_vector):

    input_data = np.array([feature_vector], dtype=np.float32)

    prediction = model.predict(input_data, verbose=0)

    predicted_class = int(np.argmax(prediction, axis=1)[0])

    confidence = round(float(np.max(prediction)) * 100, 2)

    major_name = LABELS.get(str(predicted_class), "Unknown")

    return {
        "class_id": predicted_class,
        "major": major_name,
        "confidence": confidence,
        "probabilities": prediction[0].tolist(),
    }
