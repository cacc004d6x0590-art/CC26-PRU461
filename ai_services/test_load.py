from model_loader import model

print(model.summary())

# import zipfile
# import json

# with zipfile.ZipFile("models/best_model.keras", "r") as z:
#     config = json.loads(z.read("config.json"))

# print(config.keys())

# import zipfile
# import json

# with zipfile.ZipFile("models/best_model.keras", "r") as z:
#     metadata = json.loads(z.read("metadata.json"))

# print(metadata)

# import zipfile
# import json

# with zipfile.ZipFile("models/best_model.keras", "r") as z:
#     config = json.loads(z.read("config.json"))

# print(config["compile_config"])

# import keras
# import tensorflow as tf

# print("TensorFlow:", tf.__version__)
# print("Keras:", keras.__version__)
