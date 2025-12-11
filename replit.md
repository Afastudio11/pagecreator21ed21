# Replit.md

## Overview

This is an event landing page for a F&B (Food & Beverage) business workshop focused on TikTok and Affiliate marketing strategies. The application is built as a full-stack TypeScript project with a React frontend and Express backend, designed to showcase workshop details, speakers, pricing, and registration information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS v4 with custom theme configuration
- **UI Components**: shadcn/ui component library (New York style) built on Radix UI primitives
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with custom plugins for Replit integration

The frontend follows a component-based architecture with:
- Page components in `client/src/pages/`
- Reusable UI components in `client/src/components/ui/`
- Feature components in `client/src/components/`
- Constants and configuration in `client/src/lib/constants.ts`

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with tsx for TypeScript execution
- **API Design**: RESTful endpoints prefixed with `/api`
- **Storage**: Abstracted storage interface (`IStorage`) with in-memory implementation

The backend uses a modular structure:
- `server/index.ts`: Main entry point with middleware setup
- `server/routes.ts`: API route registration
- `server/storage.ts`: Data persistence layer (currently in-memory)
- `server/static.ts`: Static file serving for production

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts` using Drizzle's table definitions
- **Validation**: Zod schemas generated from Drizzle schemas via drizzle-zod
- **Current Storage**: In-memory storage (MemStorage class) with interface ready for PostgreSQL migration

### Build System
- Development: Vite dev server with HMR
- Production: Custom build script using esbuild for server bundling and Vite for client

## External Dependencies

### Database
- **PostgreSQL**: Configured via `DATABASE_URL` environment variable
- **Drizzle Kit**: Database migrations stored in `./migrations` directory

### UI Framework Dependencies
- **Radix UI**: Complete primitive library for accessible components
- **Lucide React**: Icon library
- **Class Variance Authority**: Component variant management
- **Embla Carousel**: Carousel functionality

### Development Tools
- **Replit Plugins**: 
  - `@replit/vite-plugin-runtime-error-modal`: Error overlay
  - `@replit/vite-plugin-cartographer`: Development mapping
  - `@replit/vite-plugin-dev-banner`: Development banner

### Session Management
- **connect-pg-simple**: PostgreSQL session storage (available but not currently active)

### External Services
- No third-party API integrations currently configured
- WhatsApp contact links for user engagement