import { motion } from 'framer-motion';
import { Vote, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const menuItems = [
        { name: 'Election Info', path: '/#election-info' },
        { name: 'Polling Units', path: '/#polling-units' },
        { name: 'Why Vote?', path: '/#why-vote' },
        { name: 'Candidates', path: '/candidates' }
    ];

    const isHome = location.pathname === '/';

    const getHref = (path: string) => {
        if (path.startsWith('/#')) {
            return isHome ? path.substring(1) : path;
        }
        return path;
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3">
                <Link to="/">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <Vote className="text-nigerian-green w-8 h-8" />
                        <span className="font-bold text-xl tracking-tight">
                            iVote<span className="text-nigerian-green">FCT</span>
                        </span>
                    </motion.div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {menuItems.map((item, i) => {
                        const isCandidates = item.path === '/candidates';
                        const isActive = location.pathname === item.path;

                        return (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                {isCandidates ? (
                                    <Link
                                        to={item.path}
                                        className={`text-sm font-medium transition-colors ${isActive ? 'text-nigerian-green' : 'hover:text-nigerian-green'}`}
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    <a
                                        href={getHref(item.path)}
                                        className="text-sm font-medium hover:text-nigerian-green transition-colors"
                                    >
                                        {item.name}
                                    </a>
                                )}
                            </motion.div>
                        );
                    })}
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
                    {menuItems.map((item) => {
                        const isCandidates = item.path === '/candidates';
                        return isCandidates ? (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium"
                            >
                                {item.name}
                            </Link>
                        ) : (
                            <a
                                key={item.name}
                                href={getHref(item.path)}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium"
                            >
                                {item.name}
                            </a>
                        );
                    })}
                </motion.div>
            )}
        </nav>
    );
};
