import { getAllSkills, getSkillCount, SKILLS } from '@/constants/skills';

describe('Skills Constants', () => {
  describe('SKILLS constant', () => {
    it('should be a non-empty array', () => {
      expect(Array.isArray(SKILLS)).toBe(true);
      expect(SKILLS.length).toBeGreaterThan(0);
    });

    it('should contain string values', () => {
      SKILLS.forEach((skill) => {
        expect(typeof skill).toBe('string');
        expect(skill.length).toBeGreaterThan(0);
      });
    });

    it('should include common technologies', () => {
      const skillsAsArray = Array.from(SKILLS);
      expect(skillsAsArray).toContain('React.js / Next.js');
      expect(skillsAsArray).toContain('TypeScript / JavaScript');
    });
  });

  describe('getAllSkills', () => {
    it('should return an array of skills', () => {
      const skills = getAllSkills();
      expect(Array.isArray(skills)).toBe(true);
    });

    it('should return same number of skills as SKILLS constant', () => {
      const skills = getAllSkills();
      expect(skills.length).toBe(SKILLS.length);
    });

    it('should return a copy of the original array', () => {
      const skills1 = getAllSkills();
      const skills2 = getAllSkills();
      expect(skills1).not.toBe(skills2);
      expect(skills1).toEqual(skills2);
    });

    it('should not affect original SKILLS when modified', () => {
      const skills = getAllSkills();
      const originalLength = SKILLS.length;
      skills.push('New Skill');
      expect(SKILLS.length).toBe(originalLength);
    });
  });

  describe('getSkillCount', () => {
    it('should return a number', () => {
      const count = getSkillCount();
      expect(typeof count).toBe('number');
    });

    it('should return the correct skill count', () => {
      const count = getSkillCount();
      expect(count).toBe(SKILLS.length);
    });

    it('should return a positive number', () => {
      const count = getSkillCount();
      expect(count).toBeGreaterThan(0);
    });
  });
});
