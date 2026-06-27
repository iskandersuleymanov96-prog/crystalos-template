import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            CrystalOS
          </Link>
          <nav className="flex gap-4">
            <Link href="/components" className="text-sm font-medium hover:underline">
              Components
            </Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                GitHub
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">CrystalOS Template</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Production-ready starter template for CrystalOS products
          </p>

          <div className="flex gap-4 justify-center">
            <Link href="/components">
              <Button size="lg">View Components</Button>
            </Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          CrystalOS Template - Built with Next.js, TypeScript, and shadcn/ui
        </div>
      </footer>
    </div>
  );
}
