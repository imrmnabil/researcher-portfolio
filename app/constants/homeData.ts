type AcademicRecord = {
  startYear: number;
  endYear: number;
  subjectOrPosition: string;
  type: 'Education' | 'Academic Position';
  university: string;
  description: string;
};

const academicRecords: AcademicRecord[] = [
  {
    startYear: 2015,
    endYear: 2019,
    subjectOrPosition: 'Computer Science',
    type: 'Education',
    university: 'University of Example',
    description: 'Studied core concepts of computer science, including algorithms, data structures, and software development, while engaging in collaborative projects and research.'
  },
  {
    startYear: 2020,
    endYear: 2022,
    subjectOrPosition: 'Assistant Professor',
    type: 'Academic Position',
    university: 'Institute of Technology',
    description: 'As a Student Researcher, I conducted impactful investigations, showcasing a commitment to rigorous inquiry and contributing to advancements in programming. My work reflects a blend of analytical acumen and collaborative problem-solving.'
  },
  {
    startYear: 2023,
    endYear: 2025,
    subjectOrPosition: 'PhD in Artificial Intelligence',
    type: 'Education',
    university: 'Research University',
    description: 'Pursuing a PhD with a focus on AI, engaging in advanced research and contributing to cutting-edge developments in machine learning and artificial intelligence.'
  },
  {
    startYear: 2023,
    endYear: 2025,
    subjectOrPosition: 'PhD in Artificial Intelligence',
    type: 'Education',
    university: 'Research University',
    description: 'Pursuing a PhD with a focus on AI, engaging in advanced research and contributing to cutting-edge developments in machine learning and artificial intelligence.'
  },
];

export { academicRecords };
export type { AcademicRecord };
