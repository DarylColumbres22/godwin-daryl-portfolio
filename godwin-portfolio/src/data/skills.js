// -----------------------------------------------------------------------------
// Skill groups, ordered to match the resume: automation first (primary strength),
// then programming, IT support and security fundamentals.
// `primary: true` gives a group the heavier card. `note` is an optional caption.
// -----------------------------------------------------------------------------

export const skillGroups = [
  { id: 'automation', title: 'Automation', icon: 'automation', primary: true,
    items: ['n8n', 'UiPath', 'OpenRPA', 'Browser Automation', 'Data Extraction'] },
  { id: 'programming', title: 'Programming', icon: 'code', primary: true,
    items: ['Python', 'Kotlin', 'C#', 'JavaScript', 'SQL'] },
  { id: 'it-support', title: 'IT Support', icon: 'support', primary: true,
    items: ['Computer Troubleshooting', 'Software Installation', 'System Configuration', 'Basic Networking'] },
  { id: 'security', title: 'Security', icon: 'network', primary: true,
    items: ['VLAN', 'Routing', 'Access Control', 'Basic Network Security'] },
  { id: 'frameworks', title: 'Frameworks & platforms', icon: 'layers',
    items: ['Laravel', 'Firebase', 'Android Studio', 'Arduino IDE'] },
  { id: 'tools', title: 'Tools', icon: 'tools',
    items: ['Git / GitHub', 'Visual Studio Code', 'Cisco Packet Tracer', 'Postman'] },
  { id: 'cloud', title: 'Cloud exposure', icon: 'cloud',
    items: ['AWS EC2', 'AWS S3', 'AWS Lambda'],
    note: 'Familiarity from training, not professional experience.' },
];
