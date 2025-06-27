import { 
  users, projects, testimonials, contacts, blogPosts,
  type User, type InsertUser,
  type Project, type InsertProject,
  type Testimonial, type InsertTestimonial,
  type Contact, type InsertContact,
  type BlogPost, type InsertBlogPost
} from "@shared/schema";

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

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private projects: Map<number, Project>;
  private testimonials: Map<number, Testimonial>;
  private contacts: Map<number, Contact>;
  private blogPosts: Map<number, BlogPost>;
  private currentId: { [key: string]: number };

  constructor() {
    this.users = new Map();
    this.projects = new Map();
    this.testimonials = new Map();
    this.contacts = new Map();
    this.blogPosts = new Map();
    this.currentId = {
      users: 1,
      projects: 1,
      testimonials: 1,
      contacts: 1,
      blogPosts: 1,
    };

    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
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
        title: "Aconchego Moderno",
        description: "Funcionalidade e conforto em perfeita harmonia, criando um ambiente acolhedor e contemporâneo.",
        imageUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "Residencial",
        featured: true,
      },
      {
        title: "Escritório Criativo",
        description: "Espaço que inspira e estimula a criatividade, combinando produtividade com bem-estar.",
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "Comercial",
        featured: false,
      },
      {
        title: "Fachada Renovada",
        description: "Transformação que encanta desde a primeira vista, valorizando o imóvel e criando identidade.",
        imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "Fachada",
        featured: false,
      },
      {
        title: "Cozinha do Coração",
        description: "O centro da casa onde memórias são criadas, combinando funcionalidade e acolhimento.",
        imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "Residencial",
        featured: false,
      },
    ];

    sampleProjects.forEach(project => this.createProject(project));

    // Sample testimonials
    const sampleTestimonials: InsertTestimonial[] = [
      {
        clientName: "Maria Silva",
        projectTitle: "Casa dos Sonhos",
        content: "A Cynthia conseguiu capturar exatamente quem eu sou e transformou isso no meu lar. Cada cantinho tem a minha personalidade, mas com uma funcionalidade que eu nunca imaginei ser possível. É mais que arquitetura, é amor materializado.",
        rating: 5,
        featured: true,
      },
      {
        clientName: "Ana Santos",
        projectTitle: "Apartamento Aconchego",
        content: "O cuidado da Cynthia com cada detalhe me impressionou. Ela pensou em coisas que eu nem sabia que precisava. Meu apartamento se tornou um refúgio verdadeiro, onde cada momento em casa é especial. Ela tem um dom único!",
        rating: 5,
        featured: true,
      },
      {
        clientName: "Carla Mendes",
        projectTitle: "Reforma Completa",
        content: "Reformar uma casa pode ser estressante, mas com a Cynthia foi uma jornada incrível. Ela esteve presente em cada etapa, me tranquilizando e garantindo que tudo saísse perfeito. O resultado superou todos os meus sonhos!",
        rating: 5,
        featured: true,
      },
    ];

    sampleTestimonials.forEach(testimonial => this.createTestimonial(testimonial));
  }

  // Users
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId.users++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Projects
  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).sort((a, b) => 
      new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime()
    );
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return Array.from(this.projects.values())
      .filter(project => project.featured)
      .sort((a, b) => new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime());
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentId.projects++;
    const project: Project = { 
      ...insertProject, 
      id, 
      createdAt: new Date()
    };
    this.projects.set(id, project);
    return project;
  }

  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).sort((a, b) => 
      new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime()
    );
  }

  async getFeaturedTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values())
      .filter(testimonial => testimonial.featured)
      .sort((a, b) => new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentId.testimonials++;
    const testimonial: Testimonial = { 
      ...insertTestimonial, 
      id, 
      createdAt: new Date()
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  // Contacts
  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort((a, b) => 
      new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime()
    );
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentId.contacts++;
    const contact: Contact = { 
      ...insertContact, 
      id, 
      status: "new",
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  // Blog Posts
  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort((a, b) => 
      new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime()
    );
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.published)
      .sort((a, b) => new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime());
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async createBlogPost(insertBlogPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentId.blogPosts++;
    const blogPost: BlogPost = { 
      ...insertBlogPost, 
      id, 
      createdAt: new Date()
    };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }
}

export const storage = new MemStorage();
