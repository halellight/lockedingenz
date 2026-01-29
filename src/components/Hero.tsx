import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

export const Hero = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0, hours: 0, minutes: 0, seconds: 0
    });

    useEffect(() => {
        const target = new Date('2026-02-21T00:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = target - now;

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-height-[90vh] flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-nigerian-green/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-genz-purple/10 rounded-full blur-[100px]" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center z-10"
            >
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold mb-6 tracking-wider uppercase text-nigerian-green">
                    Powered by Yiaga Africa x LockedIn GenZ
                </span>
                <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
                    ABUJA, ARE YOU <br />
                    <span className="text-gradient">LOCKED IN?</span>
                </h1>
                <p className="max-w-2xl mx-auto text-[var(--text-gray)] text-lg md:text-xl mb-12">
                    The Area Council Elections are coming. Don't just watch from the sidelines.
                    <span className="text-[var(--foreground)] font-medium"> #japa2thepolls </span> and take charge of your local council.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full md:w-auto bg-nigerian-green text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 text-lg"
                        onClick={() => window.open('https://inecnigeria.org/polling-units/', '_blank')}
                    >
                        Locate Polling Unit <ChevronRight className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full md:w-auto px-8 py-4 rounded-2xl font-bold border border-white/20 text-lg"
                        onClick={() => window.open('https://cvr.inecnigeria.org/', '_blank')}
                    >
                        Register As a New Voter

                    </motion.button>
                </div>

                {/* Countdown */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                    {[
                        { label: 'DAYS', value: timeLeft.days },
                        { label: 'HOURS', value: timeLeft.hours },
                        { label: 'MINUTES', value: timeLeft.minutes },
                        { label: 'SECONDS', value: timeLeft.seconds },
                    ].map((item) => (
                        <motion.div
                            key={item.label}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="glass p-6 rounded-3xl"
                        >
                            <div className="text-4xl font-black mb-1">{item.value < 0 ? '0' : item.value}</div>
                            <div className="text-[10px] font-bold tracking-widest text-[var(--text-gray)]">{item.label}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Decorative Text */}
            <div className="absolute -bottom-10 left-0 right-0 opacity-[0.05] whitespace-nowrap text-[15rem] font-black pointer-events-none select-none italic">
                IVOTEFCT IVOTEFCT IVOTEFCT
            </div>
        </section>
    );
};
