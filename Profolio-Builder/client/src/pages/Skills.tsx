import { Section } from "@/components/Section";
import { SkillCategory } from "@/components/SkillCategory";
import { useSkills } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";

export default function Skills() {
  const { data: skills, isLoading } = useSkills();

  // Group skills by category
  const categories = {
    Frontend: skills?.filter(s => s.category === 'Frontend') || [],
    Backend: skills?.filter(s => s.category === 'Backend') || [],
    Tools: skills?.filter(s => s.category === 'Tools') || [],
  };

  return (
    <div className="pt-20">
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Technical <span className="text-gradient">Expertise</span>
          </motion.h1>
          <p className="text-xl text-muted-foreground">
            A comprehensive overview of the technologies and tools I work with daily.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-64 rounded-2xl bg-white/5 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.Frontend.length > 0 && (
              <SkillCategory title="Frontend Development" skills={categories.Frontend} delay={0} />
            )}
            {categories.Backend.length > 0 && (
              <SkillCategory title="Backend & Database" skills={categories.Backend} delay={0.1} />
            )}
            {categories.Tools.length > 0 && (
              <SkillCategory title="DevOps & Tools" skills={categories.Tools} delay={0.2} />
            )}
          </div>
        )}

        {/* Learning Now Section */}
        <div className="mt-20 p-8 rounded-3xl bg-primary/5 border border-primary/10 text-center">
          <h3 className="text-2xl font-bold mb-4">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-4">
             {["Rust", "WebAssembly", "Three.js", "AI Integration"].map(tech => (
               <span key={tech} className="px-4 py-2 rounded-full bg-background border border-white/10 text-muted-foreground font-medium">
                 {tech}
               </span>
             ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
