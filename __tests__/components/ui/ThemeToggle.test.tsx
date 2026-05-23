import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { ThemeContext } from '@/lib/context/ThemeContext';

const renderWithTheme = (theme: 'light' | 'dark', toggleTheme = jest.fn()) => {
  return render(
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeToggle />
    </ThemeContext.Provider>
  );
};

describe('ThemeToggle', () => {
  it('should render a button', () => {
    renderWithTheme('light');
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should have correct aria-label in light mode', () => {
    renderWithTheme('light');
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Switch to dark mode');
  });

  it('should have correct aria-label in dark mode', () => {
    renderWithTheme('dark');
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Switch to light mode');
  });

  it('should call toggleTheme when clicked', () => {
    const toggleTheme = jest.fn();
    renderWithTheme('light', toggleTheme);
    fireEvent.click(screen.getByRole('button'));
    expect(toggleTheme).toHaveBeenCalledTimes(1);
  });
});
