import {
  users,
  projects,
  testimonials,
  contacts,
  blogPosts,
  type User,
  type InsertUser,
  type Project,
  type InsertProject,
  type Testimonial,
  type InsertTestimonial,
  type Contact,
  type InsertContact,
  type BlogPost,
  type InsertBlogPost,
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Projects
  getProjects(): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;

  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  getFeaturedTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;

  // Contacts
  getContacts(): Promise<Contact[]>;
  createContact(contact: InsertContact): Promise<Contact>;

  // Blog Posts
  getBlogPosts(): Promise<BlogPost[]>;
  getPublishedBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
}

export class DatabaseStorage implements IStorage {
  constructor() {
    // Initialize with sample data if tables are empty
    this.initializeSampleData();
  }

  private async initializeSampleData() {
    try {
      // Check if we already have data
      const existingProjects = await db.select().from(projects).limit(1);
      if (existingProjects.length > 0) return;

      // Sample projects
      const sampleProjects: InsertProject[] = [
        {
          title: "Refúgio Zen",
          description: "Um espaço de tranquilidade e equilíbrio, onde cada elemento foi pensado para promover bem-estar e serenidade.",
          imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
          category: "Residencial",
          featured: true,
        },
        {
          title: "Casa dos Sonhos",
          description: "Onde cada detalhe conta uma história de amor, funcionalidade e beleza em perfeita harmonia.",
          imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
          category: "Residencial",
          featured: true,
        },
        {
          title: "Loft Urbano",
          description: "Modernidade e sofisticação se encontram neste projeto inovador que redefine o conceito de moradia urbana.",
          imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
          category: "Comercial",
          featured: false,
        },
      ];

      // Sample testimonials
      const sampleTestimonials: InsertTestimonial[] = [
        {
          clientName: "Maria Silva",
          projectTitle: "Casa dos Sonhos",
          content: "Cynthia transformou nossa casa em algo muito além do que imaginávamos. O Método Coração Arquitetônico® realmente fez a diferença!",
          rating: 5,
          featured: true,
        },
        {
          clientName: "João Santos",
          projectTitle: "Refúgio Zen",
          content: "Profissional excepcional! Entendeu exatamente nossa necessidade de um espaço acolhedor e funcional.",
          rating: 5,
          featured: true,
        },
      ];

      // Insert sample data
      await db.insert(projects).values(sampleProjects);
      await db.insert(testimonials).values(sampleTestimonials);
    } catch (error) {
      console.error("Error initializing sample data:", error);
    }
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  // Project methods
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects).orderBy(projects.createdAt);
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return await db
      .select()
      .from(projects)
      .where(eq(projects.featured, true))
      .orderBy(projects.createdAt);
  }

  async getProject(id: number): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.id, id));
    return project || undefined;
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const [project] = await db
      .insert(projects)
      .values(insertProject)
      .returning();
    return project;
  }

  // Testimonial methods
  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials).orderBy(testimonials.createdAt);
  }

  async getFeaturedTestimonials(): Promise<Testimonial[]> {
    return await db
      .select()
      .from(testimonials)
      .where(eq(testimonials.featured, true))
      .orderBy(testimonials.createdAt);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const [testimonial] = await db
      .insert(testimonials)
      .values(insertTestimonial)
      .returning();
    return testimonial;
  }

  // Contact methods
  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts).orderBy(contacts.createdAt);
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db
      .insert(contacts)
      .values(insertContact)
      .returning();
    return contact;
  }

  // Blog post methods
  async getBlogPosts(): Promise<BlogPost[]> {
    return await db.select().from(blogPosts).orderBy(blogPosts.createdAt);
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.published, true))
      .orderBy(blogPosts.createdAt);
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    const [blogPost] = await db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return blogPost || undefined;
  }

  async createBlogPost(insertBlogPost: InsertBlogPost): Promise<BlogPost> {
    const [blogPost] = await db
      .insert(blogPosts)
      .values(insertBlogPost)
      .returning();
    return blogPost;
  }
}

export const storage = new DatabaseStorage();