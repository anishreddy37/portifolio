import { Section } from "@/components/Section";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pt-20">
      <Section>
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Passionate about <span className="text-gradient">technology</span> & design.
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-xl text-muted-foreground leading-relaxed"
          >
            I'm a Full Stack Developer with over 5 years of experience building web applications. 
            I specialize in the React ecosystem and modern backend technologies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              My journey began when I wrote my first line of code in high school. What started as curiosity quickly turned into a career obsession. I love the feeling of creating something from nothing and the constant challenge of solving complex problems.
            </p>
            <p>
              Today, I work with startups and established companies to build scalable, high-performance web applications. My philosophy is simple: **user experience comes first**. No matter how complex the backend is, the interface should feel simple, intuitive, and magical.
            </p>
            <p>
              When I'm not coding, you can find me exploring new coffee shops, reading about space exploration, or contributing to open-source projects.
            </p>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-2xl blur-xl" />
             {/* Unsplash abstract tech/coding image */}
             <img 
               src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80" 
               alt="Coding"
               className="relative rounded-2xl border border-white/10 shadow-2xl w-full h-full object-cover min-h-[400px]" 
             />
          </div>
        </div>

        {/* Timeline / Experience */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Journey</h2>
          
          <div className="space-y-12 relative border-l border-white/10 ml-4 md:ml-0 pl-8 md:pl-0">
            {[
              {
                year: "2023 - Present",
                role: "Senior Frontend Engineer",
                company: "TechCorp Inc.",
                desc: "Leading the frontend team, architecting design systems, and migrating legacy codebases to Next.js."
              },
              {
                year: "2021 - 2023",
                role: "Full Stack Developer",
                company: "StartUp Studio",
                desc: "Built MVPs for early-stage startups using React, Node.js, and PostgreSQL. Handled both design and development."
              },
              {
                year: "2019 - 2021",
                role: "Junior Developer",
                company: "Web Agency",
                desc: "Developed responsive websites for clients across various industries. Mastered CSS, HTML, and JavaScript basics."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative md:grid md:grid-cols-5 gap-8"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[39px] md:left-auto md:right-0 top-1.5 w-5 h-5 rounded-full bg-background border-4 border-primary z-10 md:col-start-2 md:translate-x-1/2 md:mr-[-1px] md:hidden" />
                
                <div className="hidden md:block md:col-span-2 text-right pt-1 text-muted-foreground font-mono text-sm">
                  {item.year}
                </div>
                
                {/* Desktop Center Dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 w-4 h-4 rounded-full bg-background border-4 border-primary z-10" />

                <div className="md:col-span-3 pt-0.5">
                  <div className="md:hidden text-sm text-primary font-mono mb-1">{item.year}</div>
                  <h3 className="text-xl font-bold text-foreground">{item.role}</h3>
                  <p className="text-primary/80 font-medium mb-2">{item.company}</p>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
