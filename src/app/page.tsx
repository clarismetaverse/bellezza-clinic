
'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';
import React from 'react';

import { ApexLogo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
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

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-accent/30 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <ApexLogo className="h-8 w-8 text-primary" />
            <span className="font-headline text-2xl tracking-wider text-primary">Bellezza Clinic</span>
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

      <main>
        <section className="relative flex h-[70vh] min-h-[500px] items-center justify-center text-center">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-background" />
          <Image
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjbGluaWN8ZW58MHx8fHwxNzIxODcyMDI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Woman with perfect skin"
            fill
            className="object-cover"
            priority
            data-ai-hint="beauty clinic"
          />
          <div className="container relative z-20 mx-auto px-4">
            <h1 className="font-headline text-5xl tracking-tight text-foreground md:text-7xl lg:text-8xl">
              Bellezza Clinic
            </h1>
            <p className="mx-auto mt-6 max-w-3xl font-body text-lg text-muted-foreground md:text-xl">
              Il network professionale del beauty: una selezione di massima eccellenza composta da medici, dottori, chirurghi e consulenti.
            </p>
          </div>
        </section>

        <section id="network" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-headline text-4xl text-foreground md:text-5xl">
              I Nostri Professionisti
            </h2>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mx-auto grid max-w-2xl grid-cols-2 rounded-lg border border-accent/50 bg-card md:grid-cols-4">
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

        <section id="contact" className="bg-card py-16 md:py-24">
          <div className="container mx-auto grid grid-cols-1 gap-12 px-4 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col justify-center">
              <h2 className="font-headline text-4xl text-foreground md:text-5xl">Contattaci</h2>
              <p className="mt-4 font-body text-lg text-muted-foreground">
                Hai domande o vuoi entrare a far parte del nostro network? Compila il form e ti ricontatteremo al più presto.
              </p>
            </div>
            <form className="space-y-4">
              <Input type="text" placeholder="Nome" className="bg-background" />
              <Input type="email" placeholder="Email" className="bg-background" />
              <Textarea placeholder="Il tuo messaggio" className="bg-background" />
              <Button type="submit" size="lg" className="w-full bg-primary font-body text-primary-foreground hover:bg-primary/90">
                Invia Messaggio
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-accent/30 bg-background">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p className="text-sm">&copy; {new Date().getFullYear()} Bellezza Clinic. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
}
