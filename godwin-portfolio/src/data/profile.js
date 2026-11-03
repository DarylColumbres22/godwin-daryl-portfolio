// -----------------------------------------------------------------------------
// Personal details, hero copy and contact links.
// Edit this file to change anything in the hero, about and contact sections.
// -----------------------------------------------------------------------------

export const profile = {
  name: 'Godwin Daryl B. Columbres',
  shortName: 'Godwin Daryl',
  initials: 'GD',
  focusLine: ['IT Automation Developer', 'Technical Support', 'Software Solutions'],
  location: 'San Jacinto, Pangasinan, Philippines',
  availability: 'Open to entry-level IT opportunities',

  heroIntro:
    'BS Information Technology graduate specializing in Computer Security with experience in automation workflows, software development, IT troubleshooting, and technical research. I build practical systems that automate processes, improve efficiency, and solve technical problems.',

  summary:
    'Fresh BS Information Technology graduate majoring in Computer Security, with internship and project experience in automation workflow development, IT troubleshooting and technical support, software development, and networking and security fundamentals. Looking for a role where I can apply those skills while continuing to learn.',

  about: [
    'I am a BS Information Technology graduate, major in Computer Security, from PHINMA University of Pangasinan (June 2026). My strongest area is automation: building workflows with n8n, UiPath and OpenRPA that pull data from one place, process it, and file it somewhere useful without someone doing it by hand.',
    'During my internship at Actimai Philippines Inc. I worked on research and technical data processing, automation testing and validation, and documentation, mostly around RPA tools. It taught me to read a process carefully before automating it, and to write down what I did so someone else can follow it.',
    'Alongside automation, I have a software development background (Android, web and database work) and a foundation in networking and security from coursework and the SecuSnap project. I am also comfortable with the practical side of IT: troubleshooting hardware and software, and setting up and configuring systems. I am early in my career and still building on all of this.',
  ],

  // Shown in the hero panel. Keep these tied to real skills and projects.
  focusAreas: [
    { title: 'Automation workflow development', detail: 'Workflow and browser automation with n8n, UiPath and OpenRPA.' },
    { title: 'IT troubleshooting & technical support', detail: 'Hardware and software troubleshooting, Windows setup, everyday technical problem solving.' },
    { title: 'Software development', detail: 'Android apps in Kotlin, web applications with Laravel and MySQL.' },
    { title: 'Networking & security fundamentals', detail: 'VLANs, routing and access control designed and configured in Cisco Packet Tracer.' },
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
  github: 'https://github.com/DarylColumbres22',
  githubLabel: 'github.com/DarylColumbres22',
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
