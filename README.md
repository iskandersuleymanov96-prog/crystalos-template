# CrystalOS Template

Production-ready starter template for all CrystalOS products. Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Testing**: Playwright
- **Code Quality**: ESLint, Prettier, Husky, lint-staged
- **Deployment**: Vercel

## Project Structure

```
crystalos-template/
├── app/                    # Next.js App Router pages
│   ├── components/         # Components showcase page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/
│   └── ui/                 # shadcn/ui components
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── input.tsx
│       ├── sheet.tsx
│       ├── sonner.tsx
│       ├── table.tsx
│       └── tabs.tsx
├── features/               # Feature modules
├── hooks/                  # Custom React hooks
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
├── public/                 # Static assets
├── services/               # API services
├── styles/                 # Additional styles
├── tests/                  # Playwright tests
│   └── example.spec.ts
├── types/                  # TypeScript types
└── utils/                  # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/iskandersuleymanov96-prog/crystalos-template.git

# Navigate to the project
cd crystalos-template

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Format code
npm run format

# Check formatting
npm run format:check

# Run tests
npm run test

# Open Playwright UI
npm run test:ui
```

## Adding shadcn/ui Components

To add new shadcn/ui components to your project:

```bash
npx shadcn@latest add <component-name>
```

Example:

```bash
npx shadcn@latest add popover
npx shadcn@latest add select
npx shadcn@latest add checkbox
```

Components will be added to `components/ui/` and automatically configured.

## Development Workflow

1. **Create feature branch**: `git checkout -b feature/your-feature`
2. **Make changes**: Edit files in `features/` for feature modules
3. **Commit**: Husky will run lint-staged automatically
4. **Push**: `git push origin feature/your-feature`
5. **Create PR**: Open a pull request for review

## Code Quality

- **ESLint**: Configured with Next.js recommended rules
- **Prettier**: Consistent code formatting
- **Husky**: Pre-commit hooks for linting
- **TypeScript**: Strict mode enabled

## Testing

Tests are written using Playwright. Run tests with:

```bash
# Run all tests
npm run test

# Run with UI mode
npm run test:ui

# Run specific test file
npx playwright test tests/example.spec.ts
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

### Manual Deployment

```bash
# Build the application
npm run build

# The output is in the .next directory
# Deploy to your preferred hosting provider
```

## Environment Variables

Create a `.env.local` file for local development:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## License

MIT
