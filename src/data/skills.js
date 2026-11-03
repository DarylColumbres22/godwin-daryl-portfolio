// -----------------------------------------------------------------------------
// Skill groups, ordered so the IT-side work reads first.
// `primary: true` gives a group the wider card in the grid.
// `note` is optional and appears as a small caption — useful for being honest
// about depth of experience.
// -----------------------------------------------------------------------------

export const skillGroups = [
  {
    id: 'it-support',
    title: 'IT support',
    icon: 'support',
    primary: true,
    items: [
      'Windows',
      'Hardware troubleshooting',
      'Software troubleshooting',
      'Basic system configuration',
      'Technical problem solving',
    ],
  },
  {
    id: 'automation',
    title: 'Automation',
    icon: 'automation',
    primary: true,
    items: ['n8n', 'UiPath', 'OpenRPA', 'Workflow automation', 'Browser automation', 'Data processing'],
  },
  {
    id: 'networking',
    title: 'Networking',
    icon: 'network',
    primary: true,
    items: [
      'Cisco Packet Tracer',
      'Networking fundamentals',
      'LAN configuration',
      'VLAN and routing concepts',
      'Access control',
      'Basic network troubleshooting',
    ],
  },
  {
    id: 'development',
    title: 'Development',
    icon: 'code',
    primary: true,
    items: [
      'Kotlin',
      'Python',
      'C#',
      'HTML/CSS/JavaScript',
      'PHP / Laravel',
      'SQL / MySQL / SQLite',
      'Firebase',
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: 'tools',
    items: ['Git / GitHub', 'Android Studio', 'Visual Studio Code', 'Arduino IDE', 'Postman'],
  },
  {
    id: 'cloud',
    title: 'Cloud exposure',
    icon: 'cloud',
    items: ['AWS EC2', 'AWS S3', 'AWS Lambda'],
    note: 'Familiarity from training, not professional experience.',
  },
];
