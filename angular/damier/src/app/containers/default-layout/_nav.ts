import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Formulaires',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Cube Exploitation',
        url: '/forms/form-control'
      },
      {
        name: 'Cube Achat',
        url: '/forms/select'
      },
      {
        name: 'Cube Ressources humaines',
        url: '/forms/checks-radios'
      },
      {
        name: 'Cube Commercials',
        url: '/forms/range'
      },
      {
        name: 'Cube Technique',
        url: '/forms/input-group'
      },
      {
        name: 'Cube Qualité Envrionnementale',
        url: '/forms/floating-labels'
      },
      {
        name: 'Ajout administrateur',
        url: '/forms/layout'
      }
    ]
  }
];
