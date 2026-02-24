import Navbar from "@/components/Navbar";
import Terminal from "@/components/Terminal";
import BlueprintCard from "@/components/BlueprintCard";
import ProjectPolaroid from "@/components/ProjectPolaroid";
import type { ProjectData } from "@/components/ProjectPolaroid";
import SystemStatus from "@/components/SystemStatus";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import AnimatedSection from "@/components/AnimatedSection";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingParticles from "@/components/FloatingParticles";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { getGitHubStatus } from "@/actions/github-status";

export default async function Home() {
  const status = await getGitHubStatus();

  // Map data/projects → ProjectData with rich visuals
  const rotations = ["rotate-1-cw", "rotate-1-ccw", "rotate-2-cw"];
  const projectCards: { data: ProjectData; rotation: string }[] = projects.map(
    (p, i) => ({
      rotation: rotations[i % rotations.length],
      data: {
        title: p.title,
        tagline: p.tagline,
        category: p.category,
        categoryPosition: p.categoryPosition,
        categoryBg: p.categoryBg,
        tags: p.tags,
        link: p.link,
        visual: (
          <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center relative z-10 shadow-xl border-4 border-slate-800 group-hover:shadow-[0_0_30px_rgba(255,87,34,0.3)] transition-shadow duration-300">
            <span className="material-symbols-outlined text-7xl text-safety-orange">
              {p.visualIcon}
            </span>
          </div>
        ),
      },
    })
  );

  return (
    <>
      <ScrollProgress />
      <FloatingParticles />
      <Navbar />

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-32">
        {/* ═════════ HERO ═════════ */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          {/* Background gradient orbs */}
          <div className="absolute -top-20 -left-40 w-[500px] h-[500px] bg-safety-orange/15 rounded-full blur-[100px] pointer-events-none animate-float-slow" />
          <div className="absolute -bottom-20 -right-40 w-[400px] h-[400px] bg-electric-blue/15 rounded-full blur-[100px] pointer-events-none animate-float-medium" />

          {/* Left: Text */}
          <div className="lg:col-span-7 flex flex-col justify-center pt-8">
            <SystemStatus isOnline={status.isOnline} />

            {/* Name card */}
            <BlueprintCard
              rotation="rotate-1-cw"
              borderAccent="border-l-8 border-l-safety-orange"
              pins={[
                { position: "top-4 right-1/2 translate-x-1/2" },
                { position: "top-4 left-4" },
                { position: "top-4 right-4" },
              ]}
              className="p-12 mb-10 max-w-3xl"
              animDelay={0.1}
            >
              {/* Paper texture overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />

              <h1 className="font-bold text-6xl md:text-8xl leading-[0.85] tracking-tighter text-slate-900 mt-2">
                {profile.name.first}
                <br />
                <span
                  className="text-transparent bg-clip-text bg-gradient-to-br from-blueprint-blue to-slate-800"
                  style={{ WebkitTextStroke: "1px #1a3c6e" }}
                >
                  {profile.name.last}
                </span>
              </h1>

              {/* Floating badge */}
              <div className="absolute -right-8 top-24 rotate-12 bg-safety-orange text-white px-6 py-2 font-bold font-marker shadow-lg border border-orange-800 transform text-lg hover:shadow-[0_0_20px_rgba(255,87,34,0.4)] transition-shadow duration-300">
                {profile.title}
              </div>
            </BlueprintCard>

            {/* Tagline card */}
            <div className="relative max-w-xl ml-4">
              <BlueprintCard
                variant="slate"
                rotation="rotate-1-ccw"
                pins={[{ style: "chrome" }]}
                className="p-8 relative z-10"
                animDelay={0.25}
              >
                <p
                  className="text-xl md:text-2xl font-medium leading-relaxed font-mono text-gray-200 mt-2"
                  dangerouslySetInnerHTML={{ __html: profile.tagline }}
                />
                <div className="mt-6 font-mono text-xs text-slate-400 text-right">
                  {"// TODO: Deploy to prod"}
                </div>
              </BlueprintCard>
            </div>

            {/* CTA buttons */}
            <AnimatedSection className="mt-16 flex flex-wrap gap-6 items-center" delay={0.3}>
              <a
                className="group rotate-2-cw bg-blueprint-dark text-electric-blue px-8 py-4 font-bold text-lg uppercase flex items-center gap-3 shadow-sharp hover:translate-y-1 hover:shadow-none transition-all rounded-sm border border-electric-blue/30 font-mono relative overflow-hidden"
                href="#projects"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="material-symbols-outlined relative z-10">terminal</span>
                <span className="relative z-10">Execute: Deploy</span>
              </a>
              <a
                className="group rotate-1-ccw bg-white text-slate-900 border-2 border-slate-800 px-8 py-4 font-bold text-lg uppercase flex items-center gap-3 shadow-sharp hover:translate-y-1 hover:shadow-none transition-all rounded-sm font-sans relative overflow-hidden"
                href="#"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-safety-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="material-symbols-outlined text-safety-orange relative z-10">
                  description
                </span>
                <span className="relative z-10">cat cv.pdf</span>
              </a>
            </AnimatedSection>
          </div>

          {/* Right: Terminal */}
          <div className="lg:col-span-5 relative flex flex-col justify-end lg:pt-20">
            <Terminal />
          </div>
        </div>

        {/* ═════════ STATS ROW ═════════ */}
        <div
          id="stack"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-32"
        >
          {/* Projects Shipped */}
          <BlueprintCard
            variant="orange"
            rotation="rotate-1-ccw"
            pins={[{ style: "chrome" }]}
            className="col-span-1 md:col-span-2 lg:col-span-2 p-8 flex flex-col justify-between"
            animDelay={0}
          >
            <p className="font-marker text-xl text-white mb-4 border-b-2 border-white/30 pb-2">
              Projects Shipped
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-8xl font-bold font-sans text-white drop-shadow-md">
                {profile.stats.projectsShipped.replace("+", "")}
              </span>
              <span className="text-5xl text-slate-900 font-bold handwritten">
                +
              </span>
            </div>
            <div className="absolute bottom-4 right-4 text-white text-7xl opacity-20 rotate-12">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 80 }}
              >
                rocket_launch
              </span>
            </div>
          </BlueprintCard>

          {/* Tech Stack */}
          <BlueprintCard
            rotation="rotate-1-cw"
            className="col-span-1 md:col-span-2 lg:col-span-4 p-10 blueprint-grid-bg border-2 border-slate-200"
            animDelay={0.1}
          >
            <div className="tape-strip -top-4 right-1/4 rotate-2 bg-slate-200/50 border-slate-300" />
            <div className="tape-strip -bottom-4 left-1/4 -rotate-2 bg-slate-200/50 border-slate-300" />
            <div className="absolute top-0 right-0 bg-slate-800 text-electric-blue px-6 py-2 font-mono font-bold text-sm z-10 shadow-md transform translate-x-2 -translate-y-2 rotate-2 border border-slate-600">
              TECH_STACK
            </div>
            <TechStack />
          </BlueprintCard>

          {/* Education */}
          <BlueprintCard
            variant="slate"
            rotation="rotate-2-ccw"
            pins={[
              {
                style: "chrome",
                position: "top-3 right-1/2 translate-x-1/2",
              },
            ]}
            className="col-span-1 md:col-span-2 lg:col-span-2 p-8 flex flex-col justify-between relative overflow-hidden"
            animDelay={0.2}
          >
            <span className="material-symbols-outlined absolute -right-6 -bottom-6 text-9xl text-slate-600 rotate-12 z-0 opacity-50">
              school
            </span>
            <div className="bg-electric-blue text-slate-900 w-max px-3 py-1 font-mono text-xs font-bold mb-4 z-10 rotate-1 shadow-sm">
              EDUCATION.LOG
            </div>
            <div className="relative z-10 mt-4">
              <h3 className="font-bold text-3xl mb-1 text-white tracking-tight">
                {profile.education.degree}
              </h3>
              <p className="font-marker text-lg text-neon-green border-t border-slate-500 pt-3 mt-3 inline-block">
                {profile.education.graduationYear}
              </p>
            </div>
          </BlueprintCard>

          {/* Experience */}
          <BlueprintCard
            rotation="rotate-1-cw"
            borderAccent="border-l-8 border-l-slate-800"
            className="col-span-1 md:col-span-2 lg:col-span-4 p-10"
            animDelay={0.3}
          >
            <div className="tape-strip -top-3 left-10 rotate-1 bg-slate-200/50" />
            <div
              id="experience"
              className="flex justify-between items-start mb-8 border-b-2 border-dashed border-slate-200 pb-4"
            >
              <p className="font-marker text-slate-500 text-lg">LATEST ROLE</p>
              <span className="bg-slate-100 text-slate-800 border border-slate-300 px-3 py-1 text-sm font-bold font-mono shadow-sm">
                {profile.experience.period}
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-20 h-20 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg border-2 border-slate-600 text-white">
                <span className="material-symbols-outlined text-4xl">
                  business
                </span>
              </div>
              <div>
                <h3 className="font-bold text-3xl mb-3 text-slate-900">
                  {profile.experience.role}
                </h3>
                <p className="text-slate-600 font-mono text-sm leading-relaxed border-l-2 border-safety-orange pl-4">
                  {profile.experience.description.map((line, i) => (
                    <span key={i}>
                      &gt;{" "}
                      <span dangerouslySetInnerHTML={{ __html: line }} />
                      {i < profile.experience.description.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </BlueprintCard>
        </div>

        {/* ═════════ SERVICES SECTION ═════════ */}
        <AnimatedSection delay={0}>
          <div id="services" className="scroll-mt-32">
            <Services />
          </div>
        </AnimatedSection>


        {/* ═════════ PROJECTS SECTION ═════════ */}
        <AnimatedSection delay={0}>
          <div id="projects" className="mb-20 relative py-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full section-divider" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-blueprint-dark px-10 py-3 text-xl font-bold uppercase tracking-widest font-mono text-electric-blue border border-electric-blue/30 shadow-lg -rotate-1 text-glow">
                Selected Operations
              </span>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-4">
          {projectCards.map((card, i) => (
            <ProjectPolaroid
              key={card.data.title}
              project={card.data}
              rotation={card.rotation}
              animDelay={i * 0.15}
            />
          ))}
        </div>

        {/* ═════════ PAST EXPERIENCES SECTION ═════════ */}
        <AnimatedSection delay={0}>
          <div id="past-experience" className="mt-32 mb-20 relative py-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full section-divider" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-blueprint-dark px-10 py-3 text-xl font-bold uppercase tracking-widest font-mono text-electric-blue border border-electric-blue/30 shadow-lg rotate-1 text-glow">
                Mission Logs
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* Experience cards with timeline connector */}
        <div className="relative px-4">
          {/* Vertical timeline line */}
          <div className="absolute left-[2.5rem] top-8 bottom-8 w-px bg-gradient-to-b from-safety-orange via-electric-blue to-neon-green hidden md:block" />

          <div className="space-y-10">
            {/* Orange Business */}
            <div className="relative">
              {/* Timeline dot */}
              <div className="absolute left-[2.1rem] top-10 w-3 h-3 rounded-full bg-safety-orange shadow-[0_0_10px_rgba(255,87,34,0.6)] z-10 hidden md:block" />
              <BlueprintCard
                borderAccent="border-l-8 border-l-safety-orange"
                className="p-8 md:p-10 md:ml-14"
                animDelay={0}
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-16 h-16 bg-safety-orange rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg text-white">
                    <span className="material-symbols-outlined text-3xl">smart_toy</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                      <h3 className="font-bold text-2xl text-slate-900">Data &amp; AI Intern</h3>
                      <span className="bg-neon-green/20 text-neon-green border border-neon-green/40 px-3 py-1 text-xs font-bold font-mono shadow-sm rounded-sm animate-subtle-glow">
                        PRESENT
                      </span>
                    </div>
                    <p className="font-marker text-lg text-slate-500 mb-4">Orange Business Services · Gurugram</p>
                    <ul className="space-y-2 font-mono text-sm text-slate-600">
                      <li className="flex gap-2">
                        <span className="text-safety-orange font-bold">&gt;</span>
                        Engineering an internal AI Assistant using Generative AI to automate team workflows and reduce manual response times.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-safety-orange font-bold">&gt;</span>
                        Building end-to-end data pipelines with Python and SQL for real-time network data visualization in Power BI.
                      </li>
                    </ul>
                  </div>
                </div>
              </BlueprintCard>
            </div>

            {/* Smart Eye */}
            <div className="relative">
              <div className="absolute left-[2.1rem] top-10 w-3 h-3 rounded-full bg-electric-blue shadow-[0_0_10px_rgba(0,229,255,0.6)] z-10 hidden md:block" />
              <BlueprintCard
                borderAccent="border-l-8 border-l-electric-blue"
                className="p-8 md:p-10 md:ml-14"
                animDelay={0.1}
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-16 h-16 bg-electric-blue rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg text-slate-900">
                    <span className="material-symbols-outlined text-3xl">sensors</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                      <h3 className="font-bold text-2xl text-slate-900">AI &amp; IoT Intern</h3>
                      <span className="bg-slate-100 text-slate-800 border border-slate-300 px-3 py-1 text-xs font-bold font-mono shadow-sm rounded-sm">
                        OCT – DEC 2024
                      </span>
                    </div>
                    <p className="font-marker text-lg text-slate-500 mb-4">Smart Eye · New Delhi</p>
                    <ul className="space-y-2 font-mono text-sm text-slate-600">
                      <li className="flex gap-2">
                        <span className="text-electric-blue font-bold">&gt;</span>
                        Optimized AI-driven IoT algorithms, achieving 15% improvement in real-time data processing on edge devices.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-electric-blue font-bold">&gt;</span>
                        Prototyped scalable ML pipelines for low-latency inference in resource-constrained embedded environments.
                      </li>
                    </ul>
                  </div>
                </div>
              </BlueprintCard>
            </div>

            {/* Kanad Networks */}
            <div className="relative">
              <div className="absolute left-[2.1rem] top-10 w-3 h-3 rounded-full bg-neon-green shadow-[0_0_10px_rgba(57,255,20,0.6)] z-10 hidden md:block" />
              <BlueprintCard
                borderAccent="border-l-8 border-l-slate-800"
                className="p-8 md:p-10 md:ml-14"
                animDelay={0.2}
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg text-white">
                    <span className="material-symbols-outlined text-3xl">local_hospital</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                      <h3 className="font-bold text-2xl text-slate-900">Backend Developer Intern</h3>
                      <span className="bg-slate-100 text-slate-800 border border-slate-300 px-3 py-1 text-xs font-bold font-mono shadow-sm rounded-sm">
                        JUN – JUL 2024
                      </span>
                    </div>
                    <p className="font-marker text-lg text-slate-500 mb-4">Kanad Networks Pvt. Ltd. · Gurugram</p>
                    <ul className="space-y-2 font-mono text-sm text-slate-600">
                      <li className="flex gap-2">
                        <span className="text-slate-800 font-bold">&gt;</span>
                        Architected MedVisor, a HIPAA-compliant healthcare platform; optimized SQL schemas to reduce query latency by 40%.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-slate-800 font-bold">&gt;</span>
                        Developed modular RESTful APIs using MERN Stack and established CI/CD pipelines for automated deployment.
                      </li>
                    </ul>
                  </div>
                </div>
              </BlueprintCard>
            </div>
          </div>
        </div>

        {/* ═════════ ACHIEVEMENTS & LEADERSHIP SECTION ═════════ */}
        <AnimatedSection delay={0}>
          <div id="achievements" className="mt-32 mb-20 relative py-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full section-divider" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-blueprint-dark px-10 py-3 text-xl font-bold uppercase tracking-widest font-mono text-electric-blue border border-electric-blue/30 shadow-lg -rotate-1 text-glow">
                Commendations
              </span>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Hackathon */}
          <BlueprintCard
            variant="orange"
            rotation="rotate-1-cw"
            pins={[{ style: "chrome" }]}
            className="p-8 flex flex-col justify-between group/achievement"
            animDelay={0}
          >
            <div>
              <span
                className="material-symbols-outlined text-white/30 absolute -bottom-4 -right-2 rotate-12 group-hover/achievement:text-white/50 transition-colors duration-300"
                style={{ fontSize: 100 }}
              >
                emoji_events
              </span>
              <div className="bg-white text-slate-900 w-max px-3 py-1 font-mono text-xs font-bold mb-5 -rotate-1 shadow-sm">
                HACKATHON
              </div>
              <h3 className="font-bold text-2xl text-white mb-3 relative z-10">
                1st Runner-Up
              </h3>
              <p className="font-mono text-sm text-white/80 leading-relaxed relative z-10">
                Technova ChronoQuest — Recognized for architecting a novel solution to complex time-bound challenges.
              </p>
            </div>
          </BlueprintCard>

          {/* Sports Captain */}
          <BlueprintCard
            variant="slate"
            rotation="rotate-1-ccw"
            pins={[{ style: "chrome", position: "top-3 right-1/2 translate-x-1/2" }]}
            className="p-8 flex flex-col justify-between group/achievement"
            animDelay={0.1}
          >
            <div>
              <span
                className="material-symbols-outlined text-slate-600/30 absolute -bottom-4 -right-2 rotate-12 group-hover/achievement:text-slate-500/50 transition-colors duration-300"
                style={{ fontSize: 100 }}
              >
                target
              </span>
              <div className="bg-electric-blue text-slate-900 w-max px-3 py-1 font-mono text-xs font-bold mb-5 rotate-1 shadow-sm">
                LEADERSHIP
              </div>
              <h3 className="font-bold text-2xl text-white mb-3 relative z-10">
                Sports Captain — Archery
              </h3>
              <p className="font-mono text-sm text-slate-300 leading-relaxed relative z-10">
                Demonstrated leadership and discipline by mentoring a university-level team and managing logistical tournament operations.
              </p>
            </div>
          </BlueprintCard>

          {/* NGO */}
          <BlueprintCard
            rotation="rotate-2-cw"
            pins={[{ style: "red" }]}
            className="p-8 flex flex-col justify-between group/achievement"
            animDelay={0.2}
          >
            <div>
              <span
                className="material-symbols-outlined text-slate-300/30 absolute -bottom-4 -right-2 rotate-12 group-hover/achievement:text-slate-400/50 transition-colors duration-300"
                style={{ fontSize: 100 }}
              >
                volunteer_activism
              </span>
              <div className="bg-safety-orange text-white w-max px-3 py-1 font-mono text-xs font-bold mb-5 -rotate-1 shadow-sm">
                SOCIAL IMPACT
              </div>
              <h3 className="font-bold text-2xl text-slate-900 mb-3 relative z-10">
                Design Head — SAVERA NGO
              </h3>
              <p className="font-mono text-sm text-slate-600 leading-relaxed relative z-10">
                Orchestrated creative strategy for social advocacy, leading a team to execute high-impact digital awareness campaigns.
              </p>
            </div>
          </BlueprintCard>
        </div>

        {/* ═════════ CONTACT SECTION ═════════ */}
        <AnimatedSection delay={0}>
          <div className="mb-20 relative py-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full section-divider" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-blueprint-dark px-10 py-3 text-xl font-bold uppercase tracking-widest font-mono text-electric-blue border border-electric-blue/30 shadow-lg -rotate-1 text-glow">
                Contact Me
              </span>
            </div>
          </div>

          <div id="contact" className="scroll-mt-32">
            <Contact />
          </div>
        </AnimatedSection>
      </main>

      <Footer />
      <Chatbot />
    </>
  );
}
