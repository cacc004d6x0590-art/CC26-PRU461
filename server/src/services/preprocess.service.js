export const preprocessData = (data) => {
  // Mapping Activity Features
  const partTimeJob = data.work === "Ya" ? 1 : 0;

  const extracurricularActivities =
    data.extracurricular === "Ya, aktif" ? 1 : 0;

  const studyHoursMap = {
    "Kurang dari 5 jam": 0.2,
    "5 - 10 jam": 0.4,
    "11 - 20 jam": 0.6,
    "Lebih dari 20 jam": 1.0,
  };

  const weeklySelfStudyHours = studyHoursMap[data.study_hours] ?? 0;

  const absenceMap = {
    "0 hari": 0.0,
    "1 - 3 hari": 0.3,
    "4 - 7 hari": 0.7,
    "Lebih dari 7 hari": 1.0,
  };

  const absenceDays = absenceMap[data.avg_absences] ?? 0;

  // Normalisasi Nilai
  const mathScore = Number(data.matematika) / 100;
  const historyScore = Number(data.sejarah) / 100;
  const physicsScore = Number(data.fisika) / 100;
  const chemistryScore = Number(data.kimia) / 100;
  const biologyScore = Number(data.biologi) / 100;
  const englishScore = Number(data.bahasa_inggris) / 100;
  const geographyScore = Number(data.geografi) / 100;

  // Feature Engineering
  const averageScore =
    (mathScore +
      historyScore +
      physicsScore +
      chemistryScore +
      biologyScore +
      englishScore +
      geographyScore) /
    7;

  const sainsScore =
    (mathScore + physicsScore + chemistryScore + biologyScore) / 4;

  const sosialScore = (historyScore + geographyScore) / 2;

  const bahasaScore = englishScore;

  // Gender Encoding
  const isMale = data.gender === "Laki-Laki";

  const genderFemale = isMale ? 0 : 1;
  const genderMale = isMale ? 1 : 0;

  const gender_Female = genderFemale;
  const gender_Male = genderMale;

  // Career Encoding
  const careerOptions = [
    "Accountant",
    "Artist",
    "Banker",
    "Business Owner",
    "Construction Engineer",
    "Designer",
    "Doctor",
    "Game Developer",
    "Government Officer",
    "Lawyer",
    "Real Estate Developer",
    "Scientist",
    "Social Network Studies",
    "Software Engineer",
    "Stock Investor",
    "Teacher",
    "Writer",
  ];

  const careerFeatures = {};

  careerOptions.forEach((career) => {
    careerFeatures[`career_aspiration_${career}`] = 0;
  });

  const careerMapping = {
    Akuntan: "Accountant",
    Seniman: "Artist",
    Bankir: "Banker",
    Pengusaha: "Business Owner",
    "Insinyur Konstruksi": "Construction Engineer",
    Desainer: "Designer",
    Dokter: "Doctor",
    "Game Developer": "Game Developer",
    "Pegawai Pemerintah": "Government Officer",
    Pengacara: "Lawyer",
    "Developer Properti": "Real Estate Developer",
    Ilmuwan: "Scientist",
    "Studi Media Sosial": "Social Network Studies",
    "Software Engineer": "Software Engineer",
    "Innvestor Saham": "Stock Investor",
    "Guru / Pendidik": "Teacher",
    Penulis: "Writer",
  };

  const selectedCareer = careerMapping[data.career];

  if (selectedCareer) {
    careerFeatures[`career_aspiration_${selectedCareer}`] = 1;
  }

  // Major Encoding
  const majorFeatures = {
    "major_group_Bisnis & Keuangan": 0,
    "major_group_Sains & Kesehatan": 0,
    "major_group_Seni & Kreatif": 0,
    "major_group_Sosial & Hukum": 0,
    "major_group_Teknik & Konstruksi": 0,
    major_group_Teknologi: 0,
  };

  if (data.jurusan) {
    majorFeatures[`major_group_${data.jurusan}`] = 1;
  }

  // Performance Category
  const performanceFeatures = {
    performance_category_Rendah: 0,
    performance_category_Sedang: 0,
    performance_category_Tinggi: 0,
  };

  if (averageScore < 0.6) {
    performanceFeatures.performance_category_Rendah = 1;
  } else if (averageScore < 0.8) {
    performanceFeatures.performance_category_Sedang = 1;
  } else {
    performanceFeatures.performance_category_Tinggi = 1;
  }

  // Final Object
  return {
    part_time_job: partTimeJob,
    absence_days: absenceDays,
    extracurricular_activities: extracurricularActivities,
    weekly_self_study_hours: weeklySelfStudyHours,

    math_score: mathScore,
    history_score: historyScore,
    physics_score: physicsScore,
    chemistry_score: chemistryScore,
    biology_score: biologyScore,
    english_score: englishScore,
    geography_score: geographyScore,

    average_score: averageScore,
    sains_score: sainsScore,
    sosial_score: sosialScore,
    bahasa_score: bahasaScore,

    gender_female: genderFemale,
    gender_male: genderMale,
    gender_Female,
    gender_Male,

    ...careerFeatures,
    ...majorFeatures,
    ...performanceFeatures,
  };
};
