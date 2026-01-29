import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ElectionInfo } from './components/ElectionInfo';
import { WhyVote } from './components/WhyVote';
import { SocialFeed } from './components/SocialFeed';
import { Footer } from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans selection:bg-nigerian-green/30 selection:text-nigerian-green">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-nigerian-green z-[60] origin-left"
          style={{ scaleX }}
        />

        <Navbar />

        <main>
          <Hero />

          {/* Polling Unit Locator Section (Small Callout) */}
          <section id="polling-units" className="py-12 px-6">
            <div className="max-w-7xl mx-auto glass p-10 rounded-[2.5rem] border-nigerian-green/20 overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-nigerian-green/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform group-hover:scale-125" />

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-3xl font-black mb-3">WHERE DO YOU <span className="text-nigerian-green">VOTE?</span></h3>
                  <p className="text-[var(--text-gray)] max-w-xl">
                    INEC has created new polling units to bring voting closer to you.
                    Make sure you know exactly where to go on Feb 21st.
                  </p>
                </div>
                <motion.a
                  href="https://inecnigeria.org/elections/polling-unit-locator/"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-8 py-4 rounded-2xl font-bold whitespace-nowrap"
                >
                  Find your Polling Unit
                </motion.a>
              </div>
            </div>
          </section>

          <ElectionInfo />
          <WhyVote />
          <SocialFeed />

          {/* Closing CTA */}
          <section className="py-32 px-6 text-center bg-nigerian-green/5 relative">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-black mb-10 leading-tight">
                DONE TALKING. <br />
                <span className="text-nigerian-green">START VOTING.</span>
              </h2>
              <p className="text-xl text-[var(--text-gray)] mb-12 italic">
                "Power isn't given, it's taken at the ballot box. See you at the polls."
              </p>
              <div className="flex justify-center gap-4">
                <span className="text-3xl font-black">#japa2thepolls</span>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
