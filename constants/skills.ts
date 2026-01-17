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
