
'use client';

import Image from 'next/image';
import { MapPin, Circle } from 'lucide-react';
import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { professionals, type Professional } from '@/lib/data';

const ProfessionalCard = ({ professional }: { professional: Professional }) => (
  <Card className="overflow-hidden border-accent/50 bg-card shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-1">
    <div className="relative h-64 w-full">
      <Image
        src={professional.imageUrl}
        alt={`Portrait of ${professional.name}`}
        fill
        className="object-cover"
        data-ai-hint={professional.imageHint}
      />
    </div>
    <CardHeader>
      <CardTitle className="font-headline text-2xl text-foreground">{professional.name}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{professional.specialty}</p>
      <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="h-4 w-4 text-primary" />
        <span>{professional.location}</span>
      </div>
    </CardContent>
  </Card>
);

export default function Home() {
  const locations: Professional['location'][] = ['Milano', 'Lombardia', 'Veneto'];
  const [opacity, setOpacity] = React.useState(1);
  const heroRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        const scrollY = window.scrollY;
        const newOpacity = Math.max(0, 1 - (scrollY / (heroHeight * 0.7)));
        setOpacity(newOpacity);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-accent/30 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Circle className="h-8 w-8 text-primary" fill="currentColor" />
            <span className="font-headline text-2xl tracking-wider text-primary">apex beauty network</span>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#network" className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground">
              The Network
            </a>
            <a href="#contact" className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <div className="relative">
          <section 
            ref={heroRef}
            className="relative flex h-screen min-h-[600px] items-center justify-center text-center"
            style={{ opacity }}
          >
              <div 
                  className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10"
              />
              <div className="container mx-auto px-4 z-20 relative">
                  <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground">
                      apex beauty network
                  </h1>
                  <p className="mt-6 max-w-3xl mx-auto font-body text-lg md:text-xl text-muted-foreground">
                      Il network professionale del beauty: una selezione di massima eccellenza composta da medici, dottori, chirurghi e consulenti.
                  </p>
              </div>
          </section>

          <div className="sticky top-0 -z-10 h-screen w-full">
            <div className="absolute inset-0 bg-black/50" />
            <Image
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxib3RveCUyMHRyZWF0bWVudHxlbnwwfHx8fDE3MjE4NzMyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Woman getting a beauty treatment"
              fill
              className="object-cover"
              data-ai-hint="botox treatment"
            />
          </div>

          <section id="network" className="relative py-16 md:py-24 bg-background z-20">
            <div className="container mx-auto px-4">
              <h2 className="mb-12 text-center font-headline text-4xl md:text-5xl text-foreground">
                I Nostri Professionisti
              </h2>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-2 rounded-lg md:grid-cols-4 max-w-2xl mx-auto bg-card border border-accent/50">
                  <TabsTrigger value="all">Tutti</TabsTrigger>
                  {locations.map((loc) => (
                    <TabsTrigger key={loc} value={loc}>
                      {loc}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value="all" className="mt-12">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {professionals.map((prof) => (
                      <ProfessionalCard key={prof.id} professional={prof} />
                    ))}
                  </div>
                </TabsContent>

                {locations.map((loc) => (
                  <TabsContent key={loc} value={loc} className="mt-12">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                      {professionals
                        .filter((p) => p.location === loc)
                        .map((prof) => (
                          <ProfessionalCard key={prof.id} professional={prof} />
                        ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>
        </div>
      </main>
      
      <footer id="contact" className="border-t border-accent/30 bg-card">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
            <p className="text-sm">&copy; {new Date().getFullYear()} apex beauty network. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
}
