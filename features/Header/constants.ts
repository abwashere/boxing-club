import {
  presentationUrl,
  administrationsUrl,
  entraineursUrl,
  gallerieSalleUrl,
  gallerieVbsUrl,
  gallerieDiversUrl,
  gallerieUrl,
  actusUrl,
  inscriptionsUrl,
} from '@/utils/urls';

export type TNavLink = { name: string; url: string };

export const clubLink: TNavLink = {
  name: 'Le club',
  url: presentationUrl,
};

export const clubMenuItems: TNavLink[] = [
  {
    name: 'Présentation du club',
    url: presentationUrl,
  },
  {
    name: 'Administration',
    url: administrationsUrl,
  },
  {
    name: 'Les entraineurs',
    url: entraineursUrl,
  },
];

export const gallerieLink: TNavLink = {
  name: 'Gallerie',
  url: gallerieUrl,
};

export const galleryMenuItems: TNavLink[] = [
  {
    name: 'La salle',
    url: gallerieSalleUrl,
  },
  {
    name: 'VBS',
    url: gallerieVbsUrl,
  },
  {
    name: 'Divers',
    url: gallerieDiversUrl,
  },
];

export const actusLink: TNavLink = {
  name: 'Actualités',
  url: actusUrl,
};

export const inscriptionsLink: TNavLink = {
  name: 'Inscriptions',
  url: inscriptionsUrl,
};
