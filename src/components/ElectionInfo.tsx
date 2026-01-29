import { motion } from 'framer-motion';

const councils = [
    "Abuja Municipal (AMAC)",
    "Abaji",
    "Bwari",
    "Gwagwalada",
    "Kuje",
    "Kwali"
];

export const ElectionInfo = () => {
    return (
        <section id="election-info" className="py-24 px-6 border-y border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
                <div className="flex-1">
                    <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                        6 COUNCILS, <br />
                        <span className="text-nigerian-green">ONE FUTURE.</span>
                    </h2>
                    <p className="text-[var(--text-gray)] text-lg mb-8 leading-relaxed">
                        On February 21st, 2026, residents of the Federal Capital Territory will head to the polls to elect
                        <span className="text-[var(--foreground)] font-bold"> Chairmen </span> and <span className="text-[var(--foreground)] font-bold"> Councilors </span>
                        across the six area councils.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {councils.map((council) => (
                            <span
                                key={council}
                                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium"
                            >
                                {council}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex-1 grid grid-cols-1 gap-6">
                    <motion.div
                        whileHover={{ x: 10 }}
                        className="glass p-8 rounded-3xl"
                    >
                        <h4 className="text-nigerian-green font-bold text-sm mb-2 uppercase tracking-widest">The Role</h4>
                        <h3 className="text-2xl font-bold mb-4">Area Council Chairman</h3>
                        <p className="text-[var(--text-gray)] text-sm">
                            The executive head of the council. They manage the budget, oversee local infrastructure, and primary health centers.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ x: 10 }}
                        className="glass p-8 rounded-3xl border-l-2 border-l-genz-purple"
                    >
                        <h4 className="text-genz-purple font-bold text-sm mb-2 uppercase tracking-widest">The Role</h4>
                        <h3 className="text-2xl font-bold mb-4">Wards & Councilors</h3>
                        <p className="text-[var(--text-gray)] text-sm">
                            Each council is divided into wards. Councilors represent you at the local legislative level, making bylaws for your ward.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
