import { motion } from 'framer-motion';
import { ExternalLink, User, Users, ChevronRight, MapPin } from 'lucide-react';
import { areaCouncils } from '../data/candidates';

export const Candidates = () => {
    return (
        <div className="pt-32 pb-20 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-black mb-6">
                        MEET YOUR <span className="text-nigerian-green">CANDIDATES</span>
                    </h1>
                    <p className="text-xl text-[var(--text-gray)] max-w-3xl mx-auto">
                        Informed voters make for better governance. Browse the official list of candidates
                        for the February 2026 FCT Area Council Elections.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {areaCouncils.map((council, idx) => (
                        <motion.div
                            key={council.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass p-8 rounded-[2rem] border-nigerian-green/10 flex flex-col h-full relative group overflow-hidden"
                        >
                            {/* Decorative Background Element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-nigerian-green/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-nigerian-green/10 transition-colors" />

                            <div className="flex items-center gap-3 mb-4 text-nigerian-green">
                                <MapPin size={20} />
                                <span className="font-bold uppercase tracking-widest text-xs">FCT Area Council</span>
                            </div>

                            <h3 className="text-2xl font-black mb-4 group-hover:text-nigerian-green transition-colors">
                                {council.name}
                            </h3>
                            <p className="text-[var(--text-gray)] text-sm mb-8 flex-grow leading-relaxed">
                                {council.description}
                            </p>

                            <div className="space-y-3">
                                {council.links.map((link) => (
                                    <a
                                        key={link.title}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-nigerian-green/10 border border-white/5 hover:border-nigerian-green/20 transition-all group/link"
                                    >
                                        <div className="flex items-center gap-3">
                                            {link.title.includes('Chairman') ? (
                                                <Users size={18} className="text-nigerian-green" />
                                            ) : (
                                                <User size={18} className="text-nigerian-green" />
                                            )}
                                            <span className="font-bold text-sm">{link.title}</span>
                                        </div>
                                        <ExternalLink size={16} className="opacity-0 group-hover/link:opacity-100 transition-opacity text-nigerian-green" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Important Notice Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 p-8 md:p-12 glass rounded-[2.5rem] border-nigerian-green/20 relative overflow-hidden"
                >
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                        <div className="w-20 h-20 rounded-2xl bg-nigerian-green/10 flex items-center justify-center shrink-0">
                            <ChevronRight size={40} className="text-nigerian-green" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold mb-2">Voting is your Right & Responsibility</h4>
                            <p className="text-[var(--text-gray)]">
                                Ensure you research your candidates beyond these lists. Look for their manifestos,
                                track records, and plans for your local community. Your vote determines the quality of
                                primary healthcare, local roads, and primary education in your area.
                            </p>
                        </div>
                    </div>
                    {/* Background decoration */}
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-nigerian-green/5 rounded-full blur-3xl -mb-32 -mr-32" />
                </motion.div>
            </div>
        </div>
    );
};
