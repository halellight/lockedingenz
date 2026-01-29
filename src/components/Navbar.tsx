import { motion } from 'framer-motion';
import { Vote, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2"
                >
                    <Vote className="text-nigerian-green w-8 h-8" />
                    <span className="font-bold text-xl tracking-tight">
                        iVote<span className="text-nigerian-green">FCT</span>
                    </span>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {['Election Info', 'Polling Units', 'Why Vote?', 'Socials'].map((item, i) => (
                        <motion.a
                            key={item}
                            href={item === 'Why Vote?' ? '#why-vote?' : item === 'Polling Units' ? '#polling-units' : `#${item.toLowerCase().replace(' ', '-')}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-sm font-medium hover:text-nigerian-green transition-colors"
                        >
                            {item}
                        </motion.a>
                    ))}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />

                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden mt-4 glass rounded-2xl p-6 flex flex-col gap-4"
                >
                    {['Election Info', 'Polling Units', 'Why Vote', 'Socials'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-').replace('?', '')}`}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium"
                        >
                            {item}
                        </a>
                    ))}

                </motion.div>
            )}
        </nav>
    );
};
