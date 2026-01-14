import { motion } from "framer-motion";
import { Skill } from "@shared/schema";

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  delay?: number;
}

export function SkillCategory({ title, skills, delay = 0 }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-6 rounded-2xl glass-card border border-white/5"
    >
      <h3 className="text-lg font-bold mb-6 text-foreground flex items-center gap-2">
        <span className="w-1.5 h-6 bg-primary rounded-full" />
        {title}
      </h3>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={skill.id} className="group">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {skill.name}
              </span>
              <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                {skill.proficiency}%
              </span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.proficiency}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-primary/80 to-purple-400 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
