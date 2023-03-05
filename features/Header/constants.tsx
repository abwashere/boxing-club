export type NavMenuItem = { url: string; name: string };

export const clubMenuItems: NavMenuItem[] = [
  {
    name: 'Présentation du club',
    url: '/presentation',
  },
  {
    name: 'Administration',
    url: '/administration',
  },
  {
    name: 'Les entraineurs',
    url: '/#entraineurs', // FIXME: ancre ici ?
  },
];

export const galleryMenuItems: NavMenuItem[] = [
  {
    name: 'La salle',
    url: '/gallerie/la-salle',
  },
  {
    name: 'VBS',
    url: '/gallerie/vbs',
  },
  {
    name: 'Divers',
    url: '/gallerie/divers',
  },
];
