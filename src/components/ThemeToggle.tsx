import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-xl glass hover:bg-white/5 transition-colors relative h-10 w-10 flex items-center justify-center overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={false}
                animate={{
                    y: theme === 'light' ? 0 : 30,
                    opacity: theme === 'light' ? 1 : 0
                }}
                className="absolute"
            >
                <Sun size={20} className="text-yellow-500" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    y: theme === 'dark' ? 0 : -30,
                    opacity: theme === 'dark' ? 1 : 0
                }}
                className="absolute"
            >
                <Moon size={20} className="text-genz-purple" />
            </motion.div>
        </motion.button>
    );
};
