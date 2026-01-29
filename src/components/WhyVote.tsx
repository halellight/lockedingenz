import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Users } from 'lucide-react';

const reasons = [
    {
        icon: <Zap className="text-yellow-400" />,
        title: "Local Impact",
        desc: "Your Councilor decides on your neighborhood's power, water, and waste management."
    },
    {
        icon: <Shield className="text-blue-400" />,
        title: "Security",
        desc: "Area Council leadership plays a key role in local community policing and safety."
    },
    {
        icon: <Globe className="text-nigerian-green" />,
        title: "Grassroots Tech",
        desc: "We are pushing for digitizing local council services. Your vote makes it happen."
    },
    {
        icon: <Users className="text-genz-purple" />,
        title: "Youth Voice",
        desc: "LockedIn GenZ ensures our generation's priorities are at the center of the agenda."
    }
];

export const WhyVote = () => {
    return (
        <section id="why-vote?" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">WHY IT <span className="text-nigerian-green">MATTERS</span></h2>
                    <p className="text-[var(--text-gray)] text-lg">The Abuja Area Council is the closest government to you.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-3xl group hover:border-nigerian-green/30 transition-all"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                            <p className="text-[var(--text-gray)] text-sm leading-relaxed">{reason.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
