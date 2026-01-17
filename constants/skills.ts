/**
 * List of technical skills and competencies
 */
export const SKILLS = [
  'React.js / Next.js',
  'TypeScript / JavaScript',
  'Tailwind CSS',
  'Node.js / Express',
  'Git & GitHub',
  'Responsive Design',
  'Jest & Testing',
  'State Management (Zustand)',
  'Form Handling (React Hook Form)',
  'API Integration & REST',
  'Database Design (SQL)',
  'Problem Solving',
] as const;

/**
 * Get all skills as an array
 */
export const getAllSkills = (): string[] => {
  return [...SKILLS];
};

/**
 * Get skill count
 */
export const getSkillCount = (): number => {
  return SKILLS.length;
};
