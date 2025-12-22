'use client';

import { motion } from 'framer-motion';

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: 'text' | 'email' | 'textarea';
}

const InputField: React.FC<InputFieldProps> = ({ label, name, value, onChange, type = 'text' }) => (
  <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 200 }}>
    <label htmlFor={name} className="block text-sm font-medium mb-2 text-foreground">
      {label}
    </label>
    {type !== 'textarea' ? (
      <motion.input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
        whileFocus={{ scale: 1.02 }}
        className="w-full px-4 py-2 border border-border-base rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent dark:bg-background dark:text-foreground transition"
      />
    ) : (
      <motion.textarea
        id={name}
        name={name}
        rows={5}
        value={value}
        onChange={onChange}
        required
        whileFocus={{ scale: 1.02 }}
        className="w-full px-4 py-2 border border-border-base rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent dark:bg-background dark:text-foreground transition"
      />
    )}
  </motion.div>
);

export default InputField;
