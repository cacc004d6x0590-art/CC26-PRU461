import zipfile
import json
import shutil
import tempfile
import os

SOURCE_MODEL = "models/best_model.keras"
PATCHED_MODEL = "models/best_model_patched.keras"


def remove_quantization(obj):
    if isinstance(obj, dict):
        obj.pop("quantization_config", None)

        for value in obj.values():
            remove_quantization(value)

    elif isinstance(obj, list):
        for item in obj:
            remove_quantization(item)


with tempfile.TemporaryDirectory() as temp_dir:

    with zipfile.ZipFile(SOURCE_MODEL, "r") as z:
        z.extractall(temp_dir)

    config_path = os.path.join(temp_dir, "config.json")

    with open(config_path, "r", encoding="utf-8") as f:
        config = json.load(f)

    remove_quantization(config)

    with open(config_path, "w", encoding="utf-8") as f:
        json.dump(config, f)

    with zipfile.ZipFile(PATCHED_MODEL, "w", zipfile.ZIP_DEFLATED) as z:

        for root, dirs, files in os.walk(temp_dir):
            for file in files:

                full_path = os.path.join(root, file)

                arcname = os.path.relpath(full_path, temp_dir)

                z.write(full_path, arcname)

print("Patched model saved:")
print(PATCHED_MODEL)
