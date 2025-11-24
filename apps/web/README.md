# Staff Lab - AI-Powered Engineering Leadership Platform

A modern Next.js 15 application showcasing best practices for building scalable, performant web applications with React Server Components, TypeScript, and shadcn/ui.

## 🎯 Features

- ✅ **Dashboard**: Three-column layout with Today, Work Queue, and Story Vault sections
- ✅ **Project Management**: Track active projects, work queue, and progress
- ✅ **Story Tracking**: Capture and manage engineering stories
- ✅ **Dark Mode**: Automatic theme switching with system preference detection
- ✅ **Responsive Design**: Optimized for mobile, tablet, and desktop
- ✅ **Type Safety**: Full TypeScript coverage with strict mode

## 🏗️ Architecture

### Clean Architecture + Feature-Based Structure

```
src/
├── app/              # Next.js App Router (Server Components)
├── features/         # Feature modules (dashboard, navigation)
├── components/       # Shared UI components (shadcn/ui)
├── types/            # Domain types & interfaces
├── lib/              # Utilities
└── hooks/            # React hooks
```

See [NEXTJS_BEST_PRACTICES.md](./NEXTJS_BEST_PRACTICES.md) for detailed architecture explanation.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Yarn (or npm/pnpm)

### Installation

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Create optimized production build
yarn build

# Start production server
yarn start
```

## 🎨 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **UI Library**: shadcn/ui (Radix UI + Tailwind)
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 📚 Key Concepts

### Server vs Client Components

**By default, all components are Server Components.** Only use `"use client"` when you need:

- Event handlers (onClick, onChange)
- React hooks (useState, useEffect)
- Browser APIs (localStorage, window)
- Context consumers (useContext)

**Example:**

```typescript
// ✅ Server Component (default)
export function StatsCard({ label, value }) {
  return <Card>{/* ... */}</Card>;
}

// ✅ Client Component (needs onClick)
"use client";
export function InteractiveButton() {
  return <Button onClick={() => alert("Hi!")}>Click</Button>;
}
```

See [NEXTJS_BEST_PRACTICES.md](./NEXTJS_BEST_PRACTICES.md) for comprehensive guide.

## 📁 Project Structure

### Feature-Based Organization

Each feature is self-contained:

```
features/
  dashboard/
    components/       # Feature-specific components
      dashboard-page.tsx
      project-card.tsx
      stats-card.tsx
    lib/              # Feature logic & data
      mock-data.ts
    index.ts          # Public API (re-exports)
```

### Import Pattern

```typescript
// ✅ Import from feature root
import { DashboardPage } from '@/features/dashboard';

// ❌ Don't import from internals
import { DashboardPage } from '@/features/dashboard/components/dashboard-page';
```

## 🎨 Styling

### Tailwind CSS Utility Classes

```typescript
<div className="flex items-center justify-between gap-4 p-6">
  <h1 className="text-2xl font-bold">Dashboard</h1>
</div>
```

### Theme Variables

Defined in `globals.css`:

```css
--background: 0 0% 100%;
--foreground: 222.2 84% 4.9%;
--primary: 221.2 83.2% 53.3%;
/* ... more variables */
```

### Dark Mode

Automatic switching via `ThemeProvider`:

```typescript
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  {children}
</ThemeProvider>
```

## 🧩 Components

### shadcn/ui Components

Pre-installed components:

- `Button`, `Card`, `Badge`, `Avatar`
- `Input`, `Progress`, `Separator`
- `Sidebar`, `Sheet`, `Tooltip`, `Skeleton`

Add more:

```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
```

### Custom Components

Located in `features/*/components/`:

- `ProjectCard` - Display project information
- `StatsCard` - Show statistics
- `StoryItem` - Story list item
- `ProjectQueueCard` - Queue project with actions

## 🔧 Development

### Adding a New Feature

1. Create feature folder:

```bash
mkdir -p src/features/my-feature/components
```

2. Create components:

```typescript
// src/features/my-feature/components/my-component.tsx
export function MyComponent() {
  return <div>Hello</div>;
}
```

3. Export from index:

```typescript
// src/features/my-feature/index.ts
export { MyComponent } from './components/my-component';
```

4. Use in page:

```typescript
// src/app/my-page/page.tsx
import { MyComponent } from "@/features/my-feature";

export default function Page() {
  return <MyComponent />;
}
```

### Adding Types

```typescript
// src/types/my-types.ts
export interface MyData {
  id: string;
  name: string;
}
```

### Using Path Aliases

Configured in `tsconfig.json`:

```json
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

## 🧪 Testing (Coming Soon)

```bash
# Unit tests
yarn test

# E2E tests
yarn test:e2e

# Type checking
yarn type-check
```

## 📝 Scripts

```bash
yarn dev          # Start dev server
yarn build        # Build for production
yarn start        # Start production server
yarn lint         # Run ESLint
yarn type-check   # Run TypeScript compiler
```

## 🚧 Roadmap

- [ ] API integration (replace mock data)
- [ ] Authentication & authorization
- [ ] Real-time updates (WebSockets)
- [ ] Database integration (Prisma + PostgreSQL)
- [ ] E2E tests (Playwright)
- [ ] CI/CD pipeline
- [ ] Performance optimization
- [ ] Accessibility audit

## 📖 Documentation

- [Next.js Best Practices](./NEXTJS_BEST_PRACTICES.md) - Server vs Client Components guide
- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

1. Create feature branch
2. Follow existing patterns (feature-based structure)
3. Use TypeScript with strict mode
4. Prefer Server Components
5. Add types for all data structures
6. Test your changes

## 📄 License

MIT

---

**Built with ❤️ using Next.js, React, TypeScript, and shadcn/ui**
