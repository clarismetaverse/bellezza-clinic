import { PlaceHolderImages } from './placeholder-images';

export type Professional = {
  id: string;
  name: string;
  specialty: string;
  location: 'Milano' | 'Lombardia' | 'Veneto';
  imageUrl: string;
  imageHint: string;
};

const profImages = PlaceHolderImages.filter(p => p.id.startsWith('prof'));

export const professionals: Professional[] = [
  {
    id: '1',
    name: 'Dr. Elena Rossi',
    specialty: 'Chirurgia Plastica',
    location: 'Milano',
    imageUrl: profImages.find(p => p.id === 'prof1')?.imageUrl || 'https://picsum.photos/seed/prof1/400/400',
    imageHint: profImages.find(p => p.id === 'prof1')?.imageHint || 'professional headshot',
  },
  {
    id: '2',
    name: 'Dr. Marco Bianchi',
    specialty: 'Medicina Estetica',
    location: 'Lombardia',
    imageUrl: profImages.find(p => p.id === 'prof2')?.imageUrl || 'https://picsum.photos/seed/prof2/400/400',
    imageHint: profImages.find(p => p.id === 'prof2')?.imageHint || 'professional headshot',
  },
  {
    id: '3',
    name: 'Dr. Sofia Russo',
    specialty: 'Dermatologia',
    location: 'Veneto',
    imageUrl: profImages.find(p => p.id === 'prof3')?.imageUrl || 'https://picsum.photos/seed/prof3/400/400',
    imageHint: profImages.find(p => p.id === 'prof3')?.imageHint || 'professional headshot',
  },
  {
    id: '4',
    name: 'Dr. Alessandro Ferrari',
    specialty: 'Chirurgia Maxillo-Facciale',
    location: 'Milano',
    imageUrl: profImages.find(p => p.id === 'prof4')?.imageUrl || 'https://picsum.photos/seed/prof4/400/400',
    imageHint: profImages.find(p => p.id === 'prof4')?.imageHint || 'professional headshot',
  },
  {
    id: '5',
    name: 'Dr. Giulia Esposito',
    specialty: 'Consulente d\'Immagine',
    location: 'Lombardia',
    imageUrl: profImages.find(p => p.id === 'prof5')?.imageUrl || 'https://picsum.photos/seed/prof5/400/400',
    imageHint: profImages.find(p => p.id === 'prof5')?.imageHint || 'professional headshot',
  },
  {
    id: '6',
    name: 'Dr. Luca Ricci',
    specialty: 'Medicina Rigenerativa',
    location: 'Veneto',
    imageUrl: profImages.find(p => p.id === 'prof6')?.imageUrl || 'https://picsum.photos/seed/prof6/400/400',
    imageHint: profImages.find(p => p.id === 'prof6')?.imageHint || 'professional headshot',
  },
];
