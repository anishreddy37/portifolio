import { db } from "./db";
import {
  projects,
  skills,
  messages,
  type InsertProject,
  type InsertSkill,
  type InsertMessage,
  type Project,
  type Skill,
  type Message
} from "@shared/schema";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getSkills(): Promise<Skill[]>;
  createMessage(message: InsertMessage): Promise<Message>;
  seedData(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [message] = await db.insert(messages).values(insertMessage).returning();
    return message;
  }

  async seedData(): Promise<void> {
    const existingProjects = await db.select().from(projects);
    if (existingProjects.length === 0) {
      await db.insert(projects).values([
        {
          title: "E-Commerce Dashboard",
          description: "A comprehensive analytics dashboard for online retailers, featuring real-time sales tracking, inventory management, and customer insights. Built with modern web technologies for performance and scalability.",
          techStack: ["React", "TypeScript", "D3.js", "Node.js"],
          githubUrl: "https://github.com",
          demoUrl: "https://demo.com",
          imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
          isFeatured: true
        },
        {
          title: "AI Content Generator",
          description: "An intelligent writing assistant that helps users generate blog posts, social media captions, and email drafts using advanced language models.",
          techStack: ["Next.js", "OpenAI API", "Tailwind CSS", "Prisma"],
          githubUrl: "https://github.com",
          demoUrl: "https://demo.com",
          imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
          isFeatured: true
        },
        {
          title: "Social Media Scheduler",
          description: "A centralized platform for managing and scheduling posts across multiple social media networks. Includes visual calendar and engagement metrics.",
          techStack: ["Vue.js", "Firebase", "Pinia", "Sass"],
          githubUrl: "https://github.com",
          demoUrl: "https://demo.com",
          imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
          isFeatured: false
        },
        {
          title: "Health & Wellness App",
          description: "A mobile-first application for tracking daily habits, workouts, and nutrition. Features personalized recommendations and progress visualization.",
          techStack: ["React Native", "GraphQL", "MongoDB", "Express"],
          githubUrl: "https://github.com",
          demoUrl: "https://demo.com",
          imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
          isFeatured: false
        }
      ]);
    }

    const existingSkills = await db.select().from(skills);
    if (existingSkills.length === 0) {
      await db.insert(skills).values([
        { name: "React", category: "Frontend", proficiency: 95 },
        { name: "TypeScript", category: "Frontend", proficiency: 90 },
        { name: "Tailwind CSS", category: "Frontend", proficiency: 95 },
        { name: "Next.js", category: "Frontend", proficiency: 85 },
        { name: "Node.js", category: "Backend", proficiency: 80 },
        { name: "PostgreSQL", category: "Backend", proficiency: 75 },
        { name: "Python", category: "Backend", proficiency: 70 },
        { name: "Docker", category: "Tools", proficiency: 65 },
        { name: "Git", category: "Tools", proficiency: 90 },
        { name: "Figma", category: "Tools", proficiency: 80 }
      ]);
    }
  }
}

export const storage = new DatabaseStorage();
