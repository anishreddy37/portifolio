import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { useProjects } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function Projects() {
  const { data: projects, isLoading } = useProjects();

  return (
    <div className="pt-20">
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Featured <span className="text-gradient">Work</span>
          </motion.h1>
          <p className="text-xl text-muted-foreground">
            A showcase of my best projects, experiments, and open-source contributions.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}

        {projects?.length === 0 && (
          <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/5">
            <h3 className="text-xl font-bold mb-2">No projects found</h3>
            <p className="text-muted-foreground">Check back soon for updates!</p>
          </div>
        )}
      </Section>
    </div>
  );
}
