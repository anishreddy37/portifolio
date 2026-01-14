import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { useProjects } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

export default function Home() {
  const { data: projects, isLoading } = useProjects();
  const featuredProjects = projects?.filter(p => p.isFeatured).slice(0, 2) || [];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
          <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] opacity-20" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span>Available for freelance work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8"
            >
              Building digital <br />
              <span className="text-gradient">experiences</span> that matter.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
            >
              I'm a full-stack developer passionate about creating beautiful, functional, and user-centered digital products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/projects">
                <a className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25 flex items-center gap-2">
                  View My Work
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Link>
              <Link href="/contact">
                <a className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-lg font-medium hover:scale-105 active:scale-95">
                  Contact Me
                </a>
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Featured Projects Preview */}
      <Section className="bg-muted/30">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-muted-foreground">A selection of my recent projects.</p>
          </div>
          <Link href="/projects">
            <a className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 group">
              View all projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((n) => (
              <div key={n} className="h-[400px] rounded-2xl bg-white/5 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </Section>

      {/* Brief About Preview */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-30 transform -rotate-6" />
              {/* Unsplash minimalist desk setup */}
              <img
                src="https://pixabay.com/get/g07463b7a66eebbaa770ee4712ede77e06ca42fa0268772843bb72b88f2034b0f2894d264f90c83bb6ed74fec05086ecbea9e292178e8207495de799de83ffb4a_1280.jpg"
                alt="Workspace"
                className="relative rounded-2xl border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Code that solves real problems.</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I don't just write code; I build solutions. With a background in design and engineering, I bridge the gap between aesthetics and functionality.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Clean, maintainable code architecture",
                "User-centric design philosophy",
                "Performance-first approach",
                "Modern tech stack expertise"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Sparkles className="w-3 h-3" />
                  </div>
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/about">
              <a className="text-primary font-medium hover:underline">More about me</a>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
