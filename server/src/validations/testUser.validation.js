export const validateTestData = (data) => {
  // Full Name
  if (!data.full_name || data.full_name.trim().length < 4) {
    throw new Error("Nama lengkap minimal 4 karakter");
  }

  // Gender
  const validGenders = ["Laki-Laki", "Perempuan"];

  if (!validGenders.includes(data.gender)) {
    throw new Error("Gender tidak valid");
  }

  // School
  if (!data.school || data.school.trim().length < 4) {
    throw new Error("Nama sekolah minimal 4 karakter");
  }

  // Class
  const validClasses = [10, 11, 12];

  if (!validClasses.includes(data.class)) {
    throw new Error("Kelas harus 10, 11, atau 12");
  }

  // Scores
  const scoreFields = [
    "matematika",
    "sejarah",
    "fisika",
    "kimia",
    "biologi",
    "bahasa_inggris",
    "geografi",
  ];

  scoreFields.forEach((field) => {
    const score = data[field];

    if (
      typeof score !== "number" ||
      Number.isNaN(score) ||
      score < 0 ||
      score > 100
    ) {
      throw new Error(`${field} harus bernilai 0 - 100`);
    }
  });

  return true;
};
