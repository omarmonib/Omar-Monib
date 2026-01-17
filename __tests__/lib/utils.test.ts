import { cn } from '@/lib/utils';

describe('Utils - cn function', () => {
  describe('basic functionality', () => {
    it('should merge single class', () => {
      expect(cn('px-2')).toBe('px-2');
    });

    it('should merge multiple classes', () => {
      const result = cn('px-2', 'py-4');
      expect(result).toContain('px-2');
      expect(result).toContain('py-4');
    });

    it('should handle conditional classes with object syntax', () => {
      const result = cn('px-2', { 'py-4': true });
      expect(result).toContain('px-2');
      expect(result).toContain('py-4');
    });

    it('should exclude false conditional classes', () => {
      const result = cn('px-2', { 'py-4': false });
      expect(result).toBe('px-2');
    });
  });

  describe('tailwind class merging', () => {
    it('should resolve conflicting padding classes', () => {
      const result = cn('px-2', 'px-4');
      expect(result).toBe('px-4');
    });

    it('should resolve conflicting margin classes', () => {
      const result = cn('m-2', 'm-4');
      expect(result).toBe('m-4');
    });

    it('should keep non-conflicting classes', () => {
      const result = cn('px-2', 'py-4');
      expect(result).toContain('px-2');
      expect(result).toContain('py-4');
    });

    it('should handle complex class combinations', () => {
      const result = cn(
        'inline-flex items-center justify-center rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-slate-50 ring-offset-slate-950 hover:bg-slate-800',
        { 'ring ring-slate-300': true }
      );
      expect(result).toContain('inline-flex');
      expect(result).toContain('bg-slate-900');
    });
  });

  describe('edge cases', () => {
    it('should handle empty input', () => {
      expect(cn()).toBe('');
    });

    it('should handle undefined values', () => {
      const result = cn('px-2', undefined, 'py-4');
      expect(result).toContain('px-2');
      expect(result).toContain('py-4');
    });

    it('should handle null values', () => {
      const result = cn('px-2', null, 'py-4');
      expect(result).toContain('px-2');
      expect(result).toContain('py-4');
    });

    it('should handle empty strings', () => {
      const result = cn('px-2', '', 'py-4');
      expect(result).toContain('px-2');
      expect(result).toContain('py-4');
    });

    it('should handle arrays of classes', () => {
      const result = cn(['px-2', 'py-4']);
      expect(result).toContain('px-2');
      expect(result).toContain('py-4');
    });

    it('should be a pure function', () => {
      const input = 'px-2 py-4';
      const result1 = cn(input);
      const result2 = cn(input);
      expect(result1).toBe(result2);
    });
  });

  describe('performance', () => {
    it('should handle large number of classes', () => {
      const classes = Array.from({ length: 100 }, (_, i) => `class-${i}`);
      const result = cn(...classes);
      expect(result).toBeTruthy();
    });
  });
});
