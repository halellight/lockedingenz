import { motion } from 'framer-motion';
import { Instagram, Smartphone, ExternalLink } from 'lucide-react';

const socialPosts = [
    {
        type: 'Instagram',
        handle: '@LockedIn_genz',
        url: 'https://www.instagram.com/lockedin_genz/p/DTYFZ-BCO2P/',
        image: 'https://instagram.fabv3-2.fna.fbcdn.net/v/t51.2885-15/612984320_17847922371630626_5183008466372999010_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_ht=instagram.fabv3-2.fna.fbcdn.net&_nc_cat=102&_nc_oc=Q6cZ2QHWUfYzYJjnw8syM0IAk6v5e7O7sE8_dri57UNBSZmSwqk1TWYWlzcYNwuQUs9SPtM&_nc_ohc=X2rc1KiPOoAQ7kNvwFwnimr&_nc_gid=bPq_O1wEmmM3o0avFQ1nvg&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfqPSrFyy62wlc_FCFtEYrT1V3id0zrhl_zZCCcrJk-VLA&oe=69809158&_nc_sid=8b3546',
        caption: "You can’t be in Abuja and say you’re “Locked In” when you don’t even know your Area Council. 🤷🏾‍♂️ #iVoteFCT"
    },
    {
        type: 'TikTok',
        handle: '@LockedIn_genz',
        url: 'https://www.tiktok.com/@lockedin_genz/photo/7590458661600824632',
        image: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-i-photomode-us/f6b9212e935d4d33887c832f61e1ba31~tplv-photomode-image.jpeg?dr=14555&x-expires=1769817600&x-signature=%2B8c2IFrbQtMMh1EaGiyohsCEmOw%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=my2&ftpl=1',
        caption: "Big ‘26 is the year where we actively show up. To our Abuja people, 2026 is the year where we choose who leads!"
    },
    {
        type: 'Instagram',
        handle: '@LockedIn_genz',
        url: 'https://www.instagram.com/lockedin_genz/p/DTDcTUTCLA7/',
        image: 'https://instagram.fabv3-2.fna.fbcdn.net/v/t51.2885-15/610553244_17847134454630626_8174226910934951092_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08_tt6&_nc_ht=instagram.fabv3-2.fna.fbcdn.net&_nc_cat=102&_nc_oc=Q6cZ2QHWUfYzYJjnw8syM0IAk6v5e7O7sE8_dri57UNBSZmSwqk1TWYWlzcYNwuQUs9SPtM&_nc_ohc=NYzSsW3SoCMQ7kNvwF25k59&_nc_gid=bPq_O1wEmmM3o0avFQ1nvg&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfrrZuoEgcKdkwIPXEtzvNdlnIf1hLCYKi5G57Oi_DYLRw&oe=69806CDA&_nc_sid=8b3546',
        caption: "Talk is cheap. Participation is power. We’re calling for volunteers for our iVote FCT campaign!"
    },
    {
        type: 'TikTok',
        handle: '@LockedIn_genz',
        url: 'https://www.tiktok.com/@lockedin_genz/video/7600113726116662548',
        image: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/ogIu1WQAomAF2EQDDfjdhefSkGDpDC4QZJmSsy~tplv-tiktokx-origin.image?dr=14575&x-expires=1769817600&x-signature=MHt%2BnIXBiPu32ZqOkpO10nEA%2FSg%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2',
        caption: "Do YOU know about the upcoming FCT Area Council elections? 🫵🏾 INEC has resumed Continuous Voter Registration!"
    }
];

export const SocialFeed = () => {
    return (
        <section id="socials" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">STAY <span className="text-gradient">LOCKED IN</span></h2>
                        <p className="text-[var(--text-gray)] text-lg">Follow the movement on social media for daily updates and vibes.</p>
                    </div>
                    <div className="flex gap-4">
                        <a
                            href="https://instagram.com/LockedIn_genz"
                            target="_blank"
                            className="px-6 py-3 rounded-2xl glass font-bold flex items-center gap-2 hover:border-nigerian-green/50 transition-all"
                        >
                            <Instagram size={20} className="text-nigerian-green" /> Instagram
                        </a>
                        <a
                            href="https://tiktok.com/@LockedIn_genz"
                            target="_blank"
                            className="px-6 py-3 rounded-2xl glass font-bold flex items-center gap-2 hover:border-nigerian-green/50 transition-all"
                        >
                            <Smartphone size={20} className="text-nigerian-green" /> TikTok
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {socialPosts.map((post, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-4 rounded-[2rem] group cursor-pointer relative overflow-hidden flex flex-col h-full"
                            onClick={() => window.open(post.url, '_blank')}
                        >
                            <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-6">
                                <div className="absolute inset-0 bg-gradient-to-br from-nigerian-green/10 to-genz-purple/10" />
                                <img
                                    src={post.image}
                                    alt={post.caption}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    onError={(e) => {
                                        // Fallback if image link expires
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />

                                <div className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ExternalLink size={16} className="text-white" />
                                </div>
                            </div>

                            <div className="px-2 pb-2 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-nigerian-green/20 flex items-center justify-center font-bold text-[10px]">
                                        LG
                                    </div>
                                    <span className="font-bold text-xs">{post.handle}</span>
                                    <span className="text-[10px] text-[var(--text-gray)] ml-auto font-medium">{post.type}</span>
                                </div>
                                <p className="text-[var(--foreground)] opacity-90 text-xs leading-relaxed line-clamp-3 italic">
                                    "{post.caption}"
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
