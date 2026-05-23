import { useContext } from 'react';
import { ThemeContext } from '@/lib/context/ThemeContext';

export const useTheme = () => {
  return useContext(ThemeContext);
};
