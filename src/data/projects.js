// -----------------------------------------------------------------------------
// Projects.
//
// Field guide
//   featured        true  -> large card under "Featured projects"
//                   false -> compact card under "More projects"
//   category        must match one of the `categories` values below (filters)
//   icon            key from the `icons` map in ProjectCard.jsx (thumbnail glyph)
//   workflow        optional ordered steps, drawn as a visual chain in the modal
//   screenshot      null  -> the card and modal show a neutral placeholder
//   screenshotSlots labelled places for real screenshots. Give a slot an `image`
//                   path (e.g. '/projects/telegram-workflow.png') and it renders;
//                   leave it null and it stays a clean placeholder.
//   links           leave a value as null and that button is hidden entirely.
//                   Do not add a link until the repo or demo actually exists.
// -----------------------------------------------------------------------------

export const categories = ['All', 'Automation', 'Mobile & IoT', 'Networking & Security', 'Web'];

export const projects = [
  {
    id: 'telegram-receipt-automation',
    name: 'Telegram Receipt Automation',
    category: 'Automation',
    type: 'Automation / AI / Workflow integration',
    year: 'Personal project',
    featured: true,
    icon: 'automation',
    tagline:
      'Receipts sent to a Telegram chat are read by AI, logged to a spreadsheet and filed in Drive.',
    description:
      'A workflow automation built in n8n. A receipt image is submitted through Telegram, the workflow retrieves the uploaded file, runs it through Gemini image analysis to pull out details such as merchant, amount and date, then writes the structured result into Google Sheets and stores the image in Google Drive under a date-based folder.',
    context:
      'Built to practise connecting several services into one dependable workflow rather than as a commercial product.',
    workflow: [
      'Telegram Trigger',
      'Get Telegram File',
      'Gemini image analysis',
      'Parse Receipt JS',
      'Google Sheets',
      'Google Drive',
    ],
    technologies: ['n8n', 'Telegram', 'Gemini image analysis', 'Google Sheets', 'Google Drive'],
    features: [
      'Telegram trigger that starts the workflow when an image is sent',
      'Get file step that retrieves the uploaded receipt from Telegram',
      'Gemini image analysis to read the receipt contents',
      'JavaScript parsing to turn the AI output into structured fields',
      'Google Sheets row written for each processed receipt',
      'Google Drive storage with date-based folder organisation',
    ],
    screenshot: null,
    screenshotSlots: [
      { id: 'workflow', label: 'n8n workflow', image: null },
      { id: 'telegram', label: 'Telegram receipt submission', image: null },
      { id: 'sheets', label: 'Google Sheets result', image: null },
      { id: 'drive', label: 'Google Drive output folder', image: null },
    ],
    links: { github: null, demo: null, docs: null },
  },
  {
    id: 'gmail-attachment-automation',
    name: 'Gmail Multi-Label Attachment Automation',
    category: 'Automation',
    type: 'Automation / n8n assessment',
    year: 'n8n assessment',
    featured: true,
    icon: 'inbox',
    tagline:
      'Labeled Gmail messages are tracked in Google Sheets and their attachments filed into a structured Drive hierarchy.',
    description:
      'An n8n automation assessment that processes labeled Gmail messages, tracks email information in Google Sheets, and organizes email attachments in Google Drive using a structured folder system.',
    context:
      'Originally built as an n8n assessment, so it is a personal exercise rather than client or production work.',
    workflow: [
      'Gmail',
      'Label-based processing',
      'Extract email information',
      'Track in Google Sheets',
      'Organize attachments in Google Drive',
    ],
    technologies: ['n8n', 'Gmail', 'Google Sheets', 'Google Drive'],
    features: [
      'Gmail messages processed based on specific and multiple labels',
      'Email information such as sender, subject, date received and label tracked',
      'Attachments handled automatically, with original filenames preserved',
      'Google Sheets used to track and index processed emails and attachments',
      'Google Drive organisation following a label, date and sender hierarchy',
      'Date-scoped folder handling before a sender folder is located or created',
    ],
    screenshot: null,
    screenshotSlots: [
      { id: 'workflow', label: 'n8n workflow', image: null },
      { id: 'labels', label: 'Gmail labels', image: null },
      { id: 'sheets', label: 'Google Sheets output', image: null },
      { id: 'drive', label: 'Google Drive folder structure', image: null },
    ],
    links: { github: null, demo: null, docs: null },
  },
  {
    id: 'philgeps-bid-notice-automation',
    name: 'PHILGEPS Bid Notice Automation',
    category: 'Automation',
    type: 'RPA / Web automation',
    year: 'Project',
    featured: true,
    icon: 'robot',
    tagline:
      'A UiPath robot that collects and checks bid notice information from the PhilGEPS portal.',
    description:
      'An automation project focused on extracting and processing bid notice information from the Philippine Government Electronic Procurement System. The robot navigates the site, pulls the relevant notice details and validates the extracted data before it is handed on.',
    context: 'Built with UiPath as practice in browser automation and structured data extraction.',
    workflow: ['PhilGEPS portal', 'Browser automation', 'Data extraction', 'Validation'],
    technologies: ['UiPath', 'Browser automation', 'Data extraction', 'Validation'],
    features: [
      'Browser automation across the PhilGEPS portal',
      'Extraction of bid notice details into structured data',
      'Validation checks on the information collected',
      'Repeatable process that replaces manual lookup',
    ],
    screenshot: null,
    screenshotSlots: [
      { id: 'workflow', label: 'UiPath workflow', image: null },
      { id: 'output', label: 'Extracted data output', image: null },
    ],
    links: { github: null, demo: null, docs: null },
  },
  {
    id: 'smart-waste-management',
    name: 'Smart Waste Management System',
    category: 'Mobile & IoT',
    type: 'Mobile + IoT',
    year: 'Academic project',
    featured: true,
    icon: 'device',
    tagline: 'An Android app paired with Arduino hardware, connected through Firebase.',
    description:
      'A smart waste management project that combines an Android mobile application with IoT and microcontroller components. The work covered integration between the hardware, the mobile app and Firebase, along with how data is transmitted between them.',
    context: 'Academic project covering hardware, mobile software and data communication together.',
    workflow: ['Arduino sensors', 'Data transmission', 'Firebase', 'Android app'],
    technologies: ['Android Studio', 'Kotlin', 'Firebase', 'Arduino', 'IoT', 'Encrypted data transmission'],
    features: [
      'Android application built in Kotlin',
      'Arduino microcontroller and sensor integration',
      'Firebase used as the shared data layer',
      'Data communication between hardware and mobile app',
      'Basic security considerations in how data is transmitted',
    ],
    screenshot: null,
    screenshotSlots: [
      { id: 'app', label: 'Android app screen', image: null },
      { id: 'hardware', label: 'Arduino setup', image: null },
    ],
    links: { github: null, demo: null, docs: null },
  },
  {
    id: 'secusnap',
    name: 'SecuSnap',
    category: 'Networking & Security',
    type: 'Networking / Cybersecurity',
    year: 'Academic project',
    featured: true,
    icon: 'network',
    tagline: 'A segmented network designed and configured in Cisco Packet Tracer.',
    description:
      'A networking and security project focused on designing and configuring a network environment in Cisco Packet Tracer, covering segmentation, routing between segments and controlling which traffic is allowed.',
    context:
      'The project closest to my Computer Security major and my interest in IT support and networking.',
    workflow: ['Topology design', 'VLAN segmentation', 'Routing', 'Access control'],
    technologies: ['Cisco Packet Tracer', 'Networking', 'VLAN', 'Routing', 'Access control'],
    features: [
      'Network topology design and device configuration',
      'VLAN segmentation between groups of hosts',
      'Routing configured between network segments',
      'Access control applied to restrict traffic',
      'Basic network security considerations',
    ],
    screenshot: null,
    screenshotSlots: [
      { id: 'topology', label: 'Packet Tracer topology', image: null },
      { id: 'config', label: 'Device configuration', image: null },
    ],
    links: { github: null, demo: null, docs: null },
  },
  {
    id: 'dagupan-delicacies',
    name: 'Dagupan Delicacies',
    category: 'Web',
    type: 'Web application',
    year: 'Academic project',
    featured: false,
    icon: 'web',
    tagline: 'A Laravel and MySQL web application.',
    description:
      'A web application built with Laravel and MySQL, covering backend development, database integration and the overall structure of a working web application.',
    context: null,
    workflow: null,
    technologies: ['Laravel', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Laravel backend with routing and controllers',
      'MySQL database integration',
      'Server-rendered pages with HTML, CSS and JavaScript',
    ],
    screenshot: null,
    screenshotSlots: [{ id: 'app', label: 'Application screen', image: null }],
    links: { github: null, demo: null, docs: null },
  },
  {
    id: 'pet-and-co',
    name: 'Pet and Co',
    category: 'Mobile & IoT',
    type: 'Mobile / Web application',
    year: 'Academic project',
    featured: false,
    icon: 'device',
    tagline: 'An Android app in Kotlin wired to a Laravel backend.',
    description:
      'A mobile application project built with Kotlin for Android and connected to a backend system, covering how a mobile client exchanges data with a server and a database.',
    context: null,
    workflow: null,
    technologies: ['Kotlin', 'Android', 'Laravel', 'Database integration'],
    features: [
      'Android application built in Kotlin',
      'Laravel backend providing the data',
      'Database integration between app and server',
    ],
    screenshot: null,
    screenshotSlots: [{ id: 'app', label: 'App screen', image: null }],
    links: { github: null, demo: null, docs: null },
  },
];
