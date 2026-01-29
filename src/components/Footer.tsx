import { Vote } from 'lucide-react';
import { FaTiktok, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="py-20 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                <div className="max-w-xs">
                    <div className="flex items-center gap-2 mb-6">
                        <Vote className="text-nigerian-green w-8 h-8" />
                        <span className="font-bold text-xl tracking-tight">
                            iVote<span className="text-nigerian-green">FCT</span>
                        </span>
                    </div>
                    <p className="text-[var(--text-gray)] text-sm leading-relaxed mb-6">
                        An initiative by LockedIn GenZ, powered by Yiaga Africa.
                        Empowering Abuja citizens to take charge of their local government.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://tiktok.com/@LockedIn_genz" target="_blank" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-nigerian-green transition-colors">
                            <FaTiktok size={18} />
                        </a>
                        <a href="https://instagram.com/LockedIn_genz" target="_blank" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-nigerian-green transition-colors">
                            <FaInstagram size={18} />
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-[var(--text-gray)]">Quick Links</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><a href="#election-info" className="hover:text-nigerian-green transition-colors">Election Info</a></li>
                            <li><a href="#polling-units" className="hover:text-nigerian-green transition-colors">Polling Units</a></li>
                            <li><a href="#why-vote?" className="hover:text-nigerian-green transition-colors">Why Vote?</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-[var(--text-gray)]">Resources</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><a href="https://inecnigeria.org" target="_blank" className="hover:text-nigerian-green transition-colors">INEC Nigeria</a></li>
                            <li><a href="https://yiaga.org" target="_blank" className="hover:text-nigerian-green transition-colors">Yiaga Africa</a></li>
                            <li><a href="https://inecnigeria.org/rights-and-responsibilities-of-the-voter/" target="_blank" className="hover:text-nigerian-green transition-colors">Voter Rights</a></li>
                            <li><a href="https://naijaelections.netlify.app/" target="_blank" className="hover:text-nigerian-green transition-colors">Learn More About Nigerian Elections</a></li>
                        </ul>
                    </div>
                    <div className="hidden md:block">
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-[var(--text-gray)]">Campaign</h4>
                        <div className="p-4 glass rounded-2xl border-nigerian-green/20">
                            <div className="text-xs font-bold text-nigerian-green mb-1">HASHTAG</div>
                            <div className="text-lg font-black italic">#japa2thepolls</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-xs font-medium text-[var(--text-gray)]">
                <p>© 2026 LockedIn GenZ. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                </div>
            </div>
        </footer>
    );
};
