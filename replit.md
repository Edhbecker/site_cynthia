# Architecture Documentation

## Overview

This is a full-stack web application built with React and Express, featuring a modern architectural portfolio website for Cynthia Aparecida, an architect specializing in interior design and architectural projects. The application uses TypeScript throughout, with a focus on emotional design and feminine architectural aesthetics.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Validation**: Zod schemas for request/response validation
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Hot reload with Vite integration

### Database Design
The application uses five main entities:
- **Users**: Authentication and user management
- **Projects**: Portfolio projects with images, descriptions, and categories
- **Testimonials**: Client feedback with ratings and featured status
- **Contacts**: Contact form submissions with status tracking
- **Blog Posts**: Content management for blog articles

## Key Components

### Data Layer
- **Drizzle ORM**: Type-safe database operations with automatic TypeScript generation
- **PostgreSQL**: Primary database using Neon serverless
- **Schema Definition**: Centralized in `shared/schema.ts` with Zod validation schemas

### API Layer
- **RESTful Design**: Standard HTTP methods for CRUD operations
- **Error Handling**: Centralized error middleware with proper status codes
- **Request Validation**: Zod schemas ensure data integrity
- **Logging**: Request/response logging for API endpoints

### Frontend Components
- **Component Library**: Custom components built on Radix UI
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animation**: Smooth transitions and hover effects
- **Form Management**: React Hook Form with real-time validation

## Data Flow

1. **Client Request**: User interacts with React components
2. **State Management**: TanStack Query manages server state and caching
3. **API Communication**: HTTP requests to Express.js backend
4. **Validation**: Zod schemas validate incoming data
5. **Database Operations**: Drizzle ORM handles PostgreSQL queries
6. **Response**: Data flows back through the same chain

### Key Data Flows
- **Project Gallery**: Fetches featured projects for homepage display
- **Contact Form**: Validates and stores contact submissions
- **Testimonials**: Displays client feedback with rating system
- **Content Management**: Admin-style operations for projects and blog posts

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with TypeScript support
- **Component Library**: Radix UI for accessible primitives
- **Styling**: Tailwind CSS with custom color variables
- **Date Handling**: date-fns for date formatting
- **Carousel**: Embla Carousel for image galleries

### Backend Dependencies
- **Database**: Neon PostgreSQL serverless
- **ORM**: Drizzle with PostgreSQL dialect
- **Session Store**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build System**: Vite with React plugin
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESLint integration through Vite
- **Error Overlay**: Replit-specific development tools

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild compiles TypeScript server to `dist/index.js`
- **Assets**: Static files served from Express in production

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution with hot reload
- **Production**: Compiled JavaScript with NODE_ENV=production
- **Database**: Environment variable DATABASE_URL for connection

### Replit Integration
- **Autoscale Deployment**: Configured for automatic scaling
- **Port Configuration**: Express serves on port 5000, mapped to port 80
- **Development Tools**: Cartographer and error overlay for enhanced DX

## Changelog

- June 27, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.