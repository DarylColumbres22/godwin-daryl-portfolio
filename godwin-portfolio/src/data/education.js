// -----------------------------------------------------------------------------
// Education and training.
// Training entries are deliberately labelled as training, not certification.
// -----------------------------------------------------------------------------

export const education = [
  {
    id: 'phinma',
    degree: 'BS Information Technology',
    focus: 'Major in Computer Security',
    school: 'PHINMA University of Pangasinan',
    period: 'Graduated June 2026',
    details: [
      'Coursework across computer systems, networking, databases, software and mobile development, and security fundamentals.',
      'Academic projects included network design in Cisco Packet Tracer, an Android and IoT waste management system, and Laravel web applications.',
    ],
  },
];

export const training = [
  {
    id: 'uipath-academy',
    name: 'UiPath Academy Automation Developer Associate Training',
    provider: 'UiPath Academy',
    issued: 'Diploma of Completion, February 25, 2026',
    description: 'Training programme in building automations with UiPath.',
    certificate: '/certificates/uipath-academy-diploma.jpg',
    certificateAlt: 'UiPath Academy Diploma of Completion for the Automation Developer Associate Training, issued February 25, 2026',
  },
  {
    id: 'zuitt',
    name: 'Python + AWS Course',
    provider: 'Zuitt Learning Institute',
    issued: 'Certificate of Completion, October 2025',
    description:
      'EC004 Python-AWS course, 80 hours of instruction (July 9 – October 27, 2025), covering Python fundamentals, Django fundamentals, and AWS EC2, S3 and Lambda.',
    certificate: '/certificates/zuitt-python-aws.png',
    certificateAlt: 'Zuitt Certificate of Completion for the EC004 Python-AWS course, awarded October 27, 2025',
  },
];

// Shown as a short caption under the training section so the wording is not
// mistaken for formal certification.
export const trainingNote =
  'These are completed training programs and learning modules. They are listed as training rather than professional certification.';
