export const normalizeData = (data) => {
  const numericFields = [
    "class",
    "matematika",
    "sejarah",
    "fisika",
    "kimia",
    "biologi",
    "bahasa_inggris",
    "geografi",
  ];

  const normalized = { ...data };

  numericFields.forEach((field) => {
    if (normalized[field] !== undefined) {
      normalized[field] = Number(normalized[field]);
    }
  });

  return normalized;
};
