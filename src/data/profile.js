// -----------------------------------------------------------------------------
// Personal details, hero copy and contact links.
// Edit this file to change anything in the hero, about and contact sections.
// -----------------------------------------------------------------------------

export const profile = {
  name: 'Godwin Daryl B. Columbres',
  shortName: 'Godwin Daryl',
  initials: 'GD',
  focusLine: ['IT Support', 'Automation', 'Software Development'],
  location: 'San Jacinto, Pangasinan, Philippines',
  availability: 'Open to entry-level IT opportunities',

  heroIntro:
    'Fresh BSIT graduate majoring in Computer Security with hands-on experience in IT support, automation, networking, and software development.',

  summary:
    'Fresh BS Information Technology graduate majoring in Computer Security, with internship and project experience in IT troubleshooting, automation, software development, networking, and technical research. Familiar with computer systems, automation tools, mobile application development, databases, networking concepts, and basic cybersecurity, and looking for a role where I can apply those skills while continuing to learn.',

  about: [
    'I graduated with a BS in Information Technology, major in Computer Security, from PHINMA University of Pangasinan in June 2026. Most of what I know comes from building and fixing things: an n8n workflow that reads receipts and files them, a segmented network configured in Packet Tracer, an Android app that talks to a microcontroller, and web applications built for coursework.',
    'During my internship at Actimai Philippines Inc. I worked on research and technical data processing, automation testing and validation with UiPath and OpenRPA, and the documentation that went with it. It taught me to read a process carefully before automating it, and to write down what I did so someone else can follow it.',
    'Alongside development I am comfortable with the practical side of IT: troubleshooting hardware and software issues, setting up Windows systems, and working through networking problems step by step. I am early in my career and open about direction, whether that is support, automation, development or networking.',
  ],

  // Shown in the hero panel. Keep these tied to real skills and projects.
  focusAreas: [
    {
      title: 'IT support & systems',
      detail: 'Hardware and software troubleshooting, Windows setup, everyday technical problem solving.',
    },
    {
      title: 'Networking',
      detail: 'VLANs, routing and access control designed and configured in Cisco Packet Tracer.',
    },
    {
      title: 'Automation & RPA',
      detail: 'Workflow and browser automation with n8n, UiPath and OpenRPA.',
    },
    {
      title: 'Software & mobile',
      detail: 'Android apps in Kotlin, web applications with Laravel and MySQL.',
    },
  ],

  // Replace the PDF in /public with this exact filename, or change the path here.
  resumePath: '/Godwin_Daryl_Columbres_Resume.pdf',
  resumeFileName: 'Godwin_Daryl_Columbres_Resume.pdf',
};

export const contact = {
  email: 'godwindarylcolumbres@gmail.com',
  phone: '+63 976 562 0546',
  phoneHref: 'tel:+639765620546',
  linkedin: 'https://linkedin.com/in/godwin-daryl-columbres-226143307/',
  linkedinLabel: 'linkedin.com/in/godwin-daryl-columbres',
  github: 'https://github.com/DarylColumbres',
  githubLabel: 'github.com/DarylColumbres',
};

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'capabilities', label: 'What I can do' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'training', label: 'Training' },
  { id: 'contact', label: 'Contact' },
];
