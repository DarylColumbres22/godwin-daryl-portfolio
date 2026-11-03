// -----------------------------------------------------------------------------
// Projects.
//   featured        true -> large card, false -> compact card under "More projects"
//   category        filter bucket, must match a value in `categories`
//   type            specific label shown on the card (resume wording)
//   workflow        optional ordered steps, drawn as a chain
//   screenshot      lead image path (e.g. '/projects/telegram-workflow.png') or null
//   screenshotSlots labelled gallery slots; set `image` to a path to show it
//   links           null hides the button. Only add URLs that really exist.
// Put image files in /public/projects/.
// -----------------------------------------------------------------------------

export const categories = ['All', 'Automation', 'Mobile & IoT', 'Networking & Security'];

export const projects = [
  {
    id: 'telegram-receipt-automation',
    name: 'Telegram Receipt Automation',
    category: 'Automation',
    type: 'Automation Workflow',
    year: 'Personal project',
    featured: true,
    icon: 'automation',
    tagline: 'Receipts sent to a Telegram chat are read by AI, logged to a spreadsheet and filed in Drive automatically.',
    description:
      'Built an automated workflow that extracts receipt information from images, processes transaction details, and organizes records automatically using integrated automation tools. A receipt image submitted through Telegram is retrieved, read with AI image analysis to pull out merchant, amount and date, then written to Google Sheets and stored in Google Drive under a date-based folder.',
    context: 'Built to practise connecting several services into one dependable workflow.',
    workflow: ['Telegram Trigger', 'Get Telegram File', 'Gemini image analysis', 'Parse Receipt JS', 'Google Sheets', 'Google Drive'],
    technologies: ['n8n', 'AI Image Analysis', 'Telegram API', 'Google Sheets', 'Google Drive'],
    features: [
      'Telegram trigger that starts the workflow when an image is sent',
      'Get file step that retrieves the uploaded receipt from Telegram',
      'AI image analysis to read the receipt contents',
      'JavaScript parsing to turn the AI output into structured fields',
      'Google Sheets row written for each processed receipt',
      'Google Drive storage with date-based folder organisation',
    ],
    screenshot: '/projects/telegram-workflow.png',
    thumbFit: 'contain',
    screenshotSlots: [
      { id: 'workflow', label: 'n8n workflow', image: '/projects/telegram-workflow.png' },
      { id: 'telegram', label: 'Telegram receipt submission', image: null },
      { id: 'sheets', label: 'Google Sheets result', image: '/projects/telegram-sheets.png' },
      { id: 'drive', label: 'Google Drive output folder', image: '/projects/telegram-drive.png' },
    ],
    links: { github: 'https://github.com/DarylColumbres22/Telegram-Receipt-Automation', demo: null, docs: null },
  },
  {
    id: 'gmail-attachment-automation',
    name: 'Gmail Multi-Label Attachment Automation',
    category: 'Automation',
    type: 'Automation / n8n assessment',
    year: 'n8n assessment',
    featured: true,
    icon: 'inbox',
    tagline: 'Labeled Gmail messages are tracked in Google Sheets and their attachments filed into a structured Drive hierarchy.',
    description:
      'An n8n automation assessment that processes labeled Gmail messages, tracks email information in Google Sheets, and organizes email attachments in Google Drive using a structured folder system.',
    context: 'Originally built as an n8n assessment, so it is a personal exercise rather than client work.',
    workflow: ['Gmail', 'Label-based processing', 'Extract email information', 'Track in Google Sheets', 'Organize attachments in Google Drive'],
    technologies: ['n8n', 'Gmail', 'Google Sheets', 'Google Drive'],
    features: [
      'Gmail messages processed based on specific and multiple labels',
      'Email information such as sender, subject, date received and label tracked',
      'Attachments handled automatically, with original filenames preserved',
      'Google Sheets used to track and index processed emails and attachments',
      'Google Drive organisation following a label, date and sender hierarchy',
      'Date-scoped folder handling before a sender folder is located or created',
    ],
    screenshot: '/projects/gmail-workflow.png',
    thumbFit: 'contain',
    screenshotSlots: [
      { id: 'workflow', label: 'n8n workflow', image: '/projects/gmail-workflow.png' },
      { id: 'labels', label: 'Gmail labels', image: null },
      { id: 'sheets', label: 'Google Sheets output', image: '/projects/gmail-sheets.png' },
      { id: 'drive', label: 'Google Drive folder structure', image: '/projects/gmail-drive.png' },
    ],
    links: { github: 'https://github.com/DarylColumbres22/Gmail-Multi-Label-Automation', demo: null, docs: null },
  },
  {
    id: 'philgeps-bid-notice-automation',
    name: 'PHILGEPS Bid Notice Abstraction and Extraction Automation',
    category: 'Automation',
    type: 'Business Process Automation',
    year: 'Project',
    featured: true,
    icon: 'robot',
    tagline: 'An automation that extracts and validates bid notice information from PhilGEPS.',
    description:
      'Developed an automation workflow for extracting and validating bid notice information from PHILGEPS, reducing manual data processing tasks. The workflow navigates the Philippine Government Electronic Procurement System, pulls the relevant notice details, filters them with C# LINQ, and processes the results in Excel.',
    context: 'Built as practice in browser automation and structured data extraction.',
    workflow: ['PhilGEPS portal', 'Browser automation', 'Data extraction', 'C# LINQ filtering', 'Excel processing'],
    technologies: ['Browser Automation', 'Data Extraction', 'C# LINQ', 'Excel Processing'],
    features: [
      'Browser automation across the PhilGEPS portal',
      'Extraction of bid notice details into structured data',
      'C# LINQ filtering applied to the extracted data',
      'Excel processing and validation of the results',
      'Repeatable process that reduces manual lookup and data entry',
    ],
    screenshot: '/projects/philgeps-workflow.png',
    thumbFit: 'contain',
    screenshotSlots: [
      { id: 'workflow', label: 'UiPath workflow', image: '/projects/philgeps-workflow.png' },
      { id: 'output', label: 'Extracted data output', image: null },
    ],
    links: { github: 'https://github.com/DarylColumbres22/PHILGEPS-Bid-Notice-Automation', demo: null, docs: null },
  },
  {
    id: 'smart-waste-management',
    name: 'Smart Waste Management System',
    category: 'Mobile & IoT',
    type: 'Mobile Application + IoT',
    year: 'Academic project',
    featured: true,
    icon: 'device',
    tagline: 'A mobile-based waste monitoring system with remote monitoring and secured data transmission.',
    description:
      'Developed a mobile-based waste monitoring system with remote monitoring capabilities and secured data transmission. The Android application communicates with Arduino microcontroller hardware through Firebase, so fill levels and status can be checked remotely.',
    context: 'Academic project covering hardware, mobile software and data communication together.',
    workflow: ['Arduino sensors', 'Data transmission', 'Firebase', 'Android app'],
    technologies: ['Kotlin', 'Firebase', 'IoT', 'Mobile Development'],
    features: [
      'Android application built in Kotlin for remote monitoring',
      'Arduino microcontroller and sensor integration',
      'Firebase used as the shared data layer',
      'Secured data transmission between hardware and mobile app',
      'Live fill levels for recyclable, biodegradable, residual and hazardous bins',
      'Analytics with daily, weekly and weekday views, plus CSV export',
      'Notification screen for approving or denying login requests',
    ],
    screenshot: '/projects/smartwaste-cover.jpg',
    thumbFit: 'cover',
    slotLayout: 'portrait',
    screenshotSlots: [
      { id: 'home', label: 'Live fill levels', image: '/projects/smartwaste-home.jpg' },
      { id: 'analytics', label: 'Analytics overview', image: '/projects/smartwaste-analytics.jpg' },
      { id: 'weekday', label: 'Weekday profile', image: '/projects/smartwaste-weekday.jpg' },
      { id: 'insights', label: 'Insights and actions', image: '/projects/smartwaste-insights.jpg' },
      { id: 'status', label: 'Status summary and CSV export', image: '/projects/smartwaste-status.jpg' },
      { id: 'export', label: 'Exported report preview', image: '/projects/smartwaste-export.jpg' },
      { id: 'notifications', label: 'Login approval notifications', image: '/projects/smartwaste-notifications.jpg' },
      { id: 'hardware', label: 'Arduino and bin hardware setup', image: '/projects/smartwaste-hardware.jpg' },
    ],
    links: { github: 'https://github.com/DarylColumbres22/smartwastemanagementadandroid', demo: null, docs: null },
  },
  {
    id: 'secusnap',
    name: 'SecuSnap Network Security Plan',
    category: 'Networking & Security',
    type: 'Network Security',
    year: 'Academic project',
    featured: true,
    icon: 'network',
    tagline: 'A network security plan implementing segmentation, routing and access control.',
    description:
      'Designed a network security plan implementing segmentation, routing, and access control concepts, built and configured in Cisco Packet Tracer.',
    context: 'The project closest to my Computer Security major and my interest in networking and security.',
    workflow: ['Topology design', 'VLAN segmentation', 'Routing', 'Access control'],
    technologies: ['Cisco Packet Tracer', 'VLAN', 'Routing', 'Access Control'],
    features: [
      'Network topology design and device configuration',
      'VLAN segmentation between groups of hosts',
      'Routing configured between network segments',
      'Access control applied to restrict traffic',
      'DHCP and DNS servers included in the topology',
    ],
    screenshot: '/projects/secusnap-topology.png',
    thumbFit: 'contain',
    screenshotSlots: [
      { id: 'topology', label: 'Packet Tracer topology', image: '/projects/secusnap-topology.png' },
      { id: 'config', label: 'Device configuration', image: null },
    ],
    links: { github: 'https://github.com/DarylColumbres22/SecuSnap-Network-Security-Plan', demo: null, docs: null },
  },
];
