/**
 * West Harbor CNA Academy — CMS-friendly content module.
 * Update copy here (or migrate this file to a headless CMS later)
 * without touching page/component markup.
 */

export const academyBrand = {
  name: 'West Harbor CNA Academy',
  shortName: 'CNA Academy',
  facility: 'Gridley Post Acute',
  parent: 'West Harbor Healthcare',
} as const;

export const academyContact = {
  directorTitle: 'Co-Program Director',
  directorCredentials: 'LVN',
  directorRoles: ['Co-Program Director', 'CNA Instructor'],
  directorName: 'Mollie Openshaw',
  directorFirstName: 'Mollie',
  /** TODO: Replace with Mollie Openshaw's direct phone when available */
  phone: '(530) 456-0400',
  phoneHref: 'tel:530-456-0400',
  email: 'mopenshaw@westharborhc.com',
  emailHref: 'mailto:mopenshaw@westharborhc.com',
  officeHours: 'Monday – Friday, 8:00 AM – 4:00 PM',
  officeLocation: '891 Hazel Street, Gridley, CA 95948',
  /** TODO: Replace with Mollie Openshaw's headshot when available */
  photoSrc: '/images/cna-group1.jpg',
  photoAlt: 'Photo placeholder for Mollie Openshaw, Co-Program Director and CNA Instructor at West Harbor CNA Academy',
  welcomeMessage:
    'Welcome! I am so glad you are exploring a career in nursing. Whether you are just starting out or looking for a meaningful career change, I am here to answer your questions and help you take the next step. Reach out anytime — I look forward to connecting with you.',
  directionsUrl: 'https://maps.google.com/?q=891+Hazel+Street,+Gridley,+CA+95948',
  mapEmbedUrl:
    'https://www.google.com/maps?q=891+Hazel+Street,+Gridley,+CA+95948&hl=en&z=16&output=embed',
} as const;

/**
 * West Harbor CNA Academy social profiles.
 * TODO: Replace placeholder `#` hrefs with the live Academy profile URLs.
 */
export const academySocial = {
  heading: 'Follow West Harbor CNA Academy',
  intro: 'See student stories, program updates, and community moments on our social channels.',
  links: [
    {
      id: 'instagram',
      label: 'Instagram',
      href: '#', // TODO: Academy Instagram URL
    },
    {
      id: 'facebook',
      label: 'Facebook',
      href: '#', // TODO: Academy Facebook URL
    },
    {
      id: 'tiktok',
      label: 'TikTok',
      href: '#', // TODO: Academy TikTok URL
    },
    {
      id: 'x',
      label: 'X (Twitter)',
      href: '#', // TODO: Academy X / Twitter URL
    },
  ],
} as const;

export const academyNav = [
  { label: 'Overview', href: '/cna-academy' },
  { label: 'Learn More', href: '/cna-academy/about' },
  { label: 'Apply Now', href: '/cna-academy/apply' },
  { label: 'Contact', href: '/cna-academy/contact' },
] as const;

/** Key program dates — update here to refresh site-wide callouts */
export const academyProgram = {
  firstClassDate: 'January 4, 2027',
  firstClassNote: 'First class begins January 4, 2027.',
} as const;

export const academySeo = {
  landing: {
    title: 'West Harbor CNA Academy | Tuition-Free CNA Training in Gridley, CA',
    description:
      'Your journey to a meaningful career starts here. West Harbor CNA Academy offers tuition-free CNA training for qualified students with classroom instruction in Historic Downtown Gridley and clinicals at Gridley Post Acute and Bridgeview Post Acute.',
    path: '/cna-academy',
  },
  about: {
    title: 'About West Harbor CNA Academy | Program Details & Mission',
    description:
      'Learn how West Harbor CNA Academy prepares compassionate Certified Nursing Assistants through classroom instruction in Historic Downtown Gridley and clinical training at Gridley Post Acute and Bridgeview Post Acute.',
    path: '/cna-academy/about',
  },
  apply: {
    title: 'Apply to West Harbor CNA Academy | CNA Training Application',
    description:
      'Apply online to West Harbor CNA Academy. Complete our multi-step application for tuition-free CNA training for qualified students across Northern California.',
    path: '/cna-academy/apply',
  },
  contact: {
    title: 'Contact West Harbor CNA Academy | Speak with Mollie Openshaw',
    description:
      'Contact Co-Program Director Mollie Openshaw, LVN, at West Harbor CNA Academy. Call, email, or send a message to learn more about our tuition-free CNA training program.',
    path: '/cna-academy/contact',
  },
} as const;

export const landingContent = {
  hero: {
    headline: 'Begin Your Healthcare Career With Confidence',
    subheading: 'Tuition-Free CNA Training for Qualified Students',
    note: academyProgram.firstClassNote,
    primaryCta: { label: 'Learn More', href: '/cna-academy/about' },
    secondaryCta: { label: 'Apply Today', href: '/cna-academy/apply' },
    backgroundImage: '/images/cna-group2.jpg',
  },
  /** Short preview only — full copy lives on /cna-academy/about */
  aboutPreview: {
    title: 'About West Harbor CNA Academy',
    eyebrow: 'Your Journey to a Meaningful Career Starts Here',
    paragraphs: [
      'At West Harbor CNA Academy, we believe that becoming a Certified Nursing Assistant is more than learning skills — it\'s answering a calling to care for others with compassion, dignity, and excellence.',
      'Our academy was created to prepare the next generation of highly skilled, confident, and compassionate Certified Nursing Assistants who are ready to make a difference in the lives of residents, patients, and families every day.',
      'Whether you are beginning your first career, changing professions, or returning to the workforce, we are committed to providing you with the education, support, and hands-on experience you need to succeed.',
    ],
    learnMoreHref: '/cna-academy/about',
    learnMoreLabel: 'Learn More →',
  },
  featureCards: [
    {
      id: 'clinical',
      icon: 'LocalHospital' as const,
      title: 'Clinical Training',
      description:
        'Supervised clinicals at Gridley Post Acute and Bridgeview Post Acute.',
    },
    {
      id: 'classroom',
      icon: 'MenuBook' as const,
      title: 'Classroom Instruction',
      description: 'Learn in beautiful Historic Downtown Gridley.',
    },
    {
      id: 'compassion',
      icon: 'Favorite' as const,
      title: 'Compassionate Care',
      description: 'Grow in professionalism, teamwork, and respect for every resident.',
    },
    {
      id: 'tuition',
      icon: 'Savings' as const,
      title: 'Tuition-Free Program',
      description: 'Qualified students can train tuition-free and start sooner.',
    },
  ],
  whyChooseUs: {
    title: 'Why Choose Us',
    items: [
      { id: 'tuition', label: 'Tuition-Free for qualified applicants', icon: 'Savings' as const },
      { id: 'approved', label: 'State-approved program', icon: 'Verified' as const },
      { id: 'classroom', label: 'Classroom instruction', icon: 'School' as const },
      { id: 'clinicals', label: 'Hands-on clinicals', icon: 'LocalHospital' as const },
      { id: 'instructors', label: 'Experienced instructors', icon: 'Groups' as const },
      { id: 'career', label: 'Career preparation', icon: 'Work' as const },
      { id: 'support', label: 'Supportive environment', icon: 'Handshake' as const },
      { id: 'patients', label: 'Real patient experience', icon: 'VolunteerActivism' as const },
    ],
  },
  communities: {
    title: 'Serving Northern California',
    intro:
      'We proudly welcome applicants from communities throughout the region. No matter where you call home, if you have a heart for helping others, we encourage you to apply.',
    locations: [
      'Chico',
      'Paradise',
      'Gridley',
      'Oroville',
      'Marysville',
      'Yuba City',
      'Live Oak',
      'Biggs',
      'Colusa',
      'Sutter',
      'Wheatland',
      'Durham',
      'Surrounding Northern California',
    ],
  },
  ctaBanner: {
    headline: 'Ready to Begin Your Healthcare Career?',
    backgroundImage: '/images/hero-banner2.jpg',
    primaryCta: { label: 'Learn More', href: '/cna-academy/about' },
    secondaryCta: { label: 'Apply Today', href: '/cna-academy/apply' },
  },
} as const;

export const aboutContent = {
  hero: {
    headline: 'Your Journey to a Meaningful Career Starts Here',
    subheading: 'About West Harbor CNA Academy',
    note: academyProgram.firstClassNote,
    backgroundImage: '/images/cna-group1.jpg',
  },
  /**
   * Welcome letter from Mollie Openshaw — polished for grammar & clarity.
   * Shown on /cna-academy/about
   */
  mollieMessage: {
    pageTitle: 'Welcome to the West Harbor Healthcare CNA Academy',
    eyebrow: 'A Message from Mollie Openshaw, LVN',
    greeting: 'Welcome!',
    paragraphsBeforeQuote: [
      'My name is Mollie Openshaw, and I have had the incredible privilege of serving in healthcare for more than 45 years. Looking back, one of the most rewarding and unforgettable moments of my career was receiving my work permit and beginning my journey as a Certified Nursing Assistant in Chico, California. That experience changed the course of my life and opened doors I never imagined possible.',
      'Today, I have the opportunity to help others take that same first step, and I couldn\'t be more excited.',
      'I truly believe that becoming a CNA is much more than learning skills — it\'s the beginning of a career filled with endless possibilities. Whether your dream is to remain an exceptional CNA, become a Licensed Vocational Nurse, Registered Nurse, or therapist, or pursue another path in healthcare, every great journey begins with that very first step.',
      'My passion is teaching, mentoring, and encouraging future caregivers. I strive to create a learning environment where students feel supported, challenged, inspired, and excited to come to class each day. I believe learning should be engaging, interactive, and — yes — fun! My goal is for every student to leave our program not only confident in their clinical skills, but also proud of the compassionate caregiver they are becoming.',
      'I am especially honored to be a member of the West Harbor Healthcare team, an organization whose values closely reflect my own. Their mission states:',
    ],
    missionQuote:
      'We believe that people are the key to our success. We understand that treating our employees with love and respect will result in exceptional patient care.',
    paragraphsAfterQuote: [
      'I couldn\'t agree more.',
      'Certified Nursing Assistants are truly the backbone of resident care. They are the caregivers who spend the most time with residents, providing comfort, compassion, dignity, and human connection every single day. Their work makes an extraordinary difference in the lives of residents and their families.',
      'Our inaugural West Harbor Healthcare CNA Academy for the greater North Valley will proudly provide classroom instruction with clinical training opportunities at Bridgeview Post Acute in Yuba City and Gridley Post Acute. Students will learn from experienced healthcare professionals while gaining hands-on experience in a supportive skilled nursing environment.',
      'One of the most exciting aspects of our program is that this is more than a traditional CNA class — it\'s your career opportunity.',
      'Applicants will participate in an interview process with our leadership team. Those selected for the program will receive full tuition sponsorship from West Harbor Healthcare. In return, graduates will join our team and begin their healthcare careers serving residents at one of our West Harbor facilities. It\'s our way of investing in people who have a genuine heart for caring for others.',
      'If you\'ve ever thought about a career in healthcare, if you\'ve wondered whether you could make a difference in someone\'s life, or if you\'re simply looking for an opportunity to build a meaningful future, I encourage you to apply.',
      'I can\'t wait to meet you, learn your story, and help you begin an incredible journey that may change your life just as becoming a CNA changed mine all those years ago.',
      'Welcome to the West Harbor Healthcare CNA Academy.',
      'Let\'s begin your journey together.',
    ],
    tagline: 'Train Here. Work Here. Grow Here.',
    signatureName: 'Mollie Openshaw, LVN',
    signatureTitles: [
      'Co-Program Director',
      'CNA Instructor',
      'West Harbor Healthcare CNA Academy',
    ],
    imageSrc: '/images/mollie_openshaw.JPEG',
    imageAlt: 'Mollie Openshaw, Co-Program Director and CNA Instructor',
  },
  about: {
    title: 'About West Harbor CNA Academy',
    paragraphs: [
      'At West Harbor CNA Academy, we believe that becoming a Certified Nursing Assistant is more than learning skills — it\'s answering a calling to care for others with compassion, dignity, and excellence.',
      'Our academy was created to prepare the next generation of highly skilled, confident, and compassionate Certified Nursing Assistants who are ready to make a difference in the lives of residents, patients, and families every day.',
      'Whether you are beginning your first career, changing professions, or returning to the workforce, we are committed to providing you with the education, support, and hands-on experience you need to succeed.',
    ],
  },
  uniqueExperience: {
    title: 'A Unique Learning Experience',
    intro:
      'Our program combines engaging classroom instruction with real-world clinical experience to prepare students for success both in the classroom and at the bedside.',
    cards: [
      {
        id: 'classroom',
        title: 'Classroom Instruction',
        location: 'Historic Downtown Gridley',
        description:
          'Classes are held in beautiful Historic Downtown Gridley, providing students with a comfortable and welcoming learning environment where they will develop the knowledge and confidence needed to excel as healthcare professionals.',
        sites: [] as readonly string[],
      },
      {
        id: 'clinical',
        title: 'Clinical Training',
        location: 'Two respected skilled nursing facilities',
        description:
          'Students will complete their supervised clinical training at two respected skilled nursing facilities. These clinical experiences allow students to apply classroom knowledge while working alongside experienced healthcare professionals in real patient care settings.',
        sites: [
          'Gridley Post Acute – Gridley, California',
          'Bridgeview Post Acute – Marysville, California',
        ] as readonly string[],
      },
    ],
  },
  tuitionFree: {
    title: 'Tuition-Free Training',
    emphasis:
      'West Harbor CNA Academy is proud to offer this program tuition-free for qualified students.',
    body: 'We believe financial barriers should not stand in the way of someone pursuing a rewarding career in healthcare. Our goal is to invest in people who are passionate about serving others while helping meet the growing demand for compassionate caregivers throughout our communities.',
    callout:
      'Ask us about eligibility when you apply or contact Co-Program Director Mollie Openshaw. We are here to help you take the next step.',
  },
  servingCommunities: {
    title: 'Serving Northern California',
    intro:
      'We proudly welcome applicants from communities throughout the region. No matter where you call home, if you have a heart for helping others, we encourage you to apply.',
    locations: [
      'Chico',
      'Paradise',
      'Gridley',
      'Oroville',
      'Marysville',
      'Yuba City',
      'Live Oak',
      'Biggs',
      'Colusa',
      'Sutter',
      'Wheatland',
      'Durham',
      'Surrounding Northern California',
    ],
  },
  moreThanCertification: {
    title: 'More Than a Certification',
    paragraphs: [
      'At West Harbor CNA Academy, we don\'t simply teach students how to perform nursing assistant skills — we teach professionalism, accountability, teamwork, compassion, communication, and respect.',
      'Guided by West Harbor Health Care\'s mission of treating employees with love and respect, we strive to develop caregivers who understand that every resident deserves exceptional care, kindness, and dignity.',
      'When you graduate from West Harbor CNA Academy, you\'ll leave with more than a state-approved education — you\'ll leave prepared to begin a meaningful career that truly changes lives.',
      'We look forward to welcoming you into the West Harbor family and helping you take the first step toward a rewarding future in healthcare.',
    ],
    imageSrc: '/images/cna-group2.jpg',
    imageAlt: 'CNA students and caregivers providing compassionate care',
  },
  learningObjectives: {
    title: 'Learning Objectives',
    intro:
      'At West Harbor CNA Academy, our goal is to prepare students to become knowledgeable, skilled, and compassionate Certified Nursing Assistants who provide safe, high-quality care with confidence and professionalism. Upon successful completion of the program, students will be able to:',
    items: [
      'Demonstrate safe, competent, and compassionate nursing assistant skills in a variety of healthcare settings.',
      'Provide person-centered care while respecting each resident\'s dignity, independence, privacy, cultural background, and individual needs.',
      'Communicate effectively and professionally with residents, families, nurses, physicians, and other members of the healthcare team.',
      'Apply infection prevention and control practices to maintain a safe environment for residents, visitors, and healthcare workers.',
      'Accurately measure, observe, document, and report changes in a resident\'s condition using appropriate procedures.',
      'Assist residents with activities of daily living, including bathing, grooming, dressing, toileting, nutrition, hydration, mobility, and restorative care.',
      'Demonstrate proper body mechanics and safely transfer, position, and ambulate residents using approved techniques and equipment.',
      'Recognize and respond appropriately to resident rights, ethical responsibilities, confidentiality, and professional standards of practice.',
      'Exhibit critical thinking, accountability, teamwork, and professionalism in all aspects of resident care.',
      'Develop the confidence and competence needed to successfully complete the California State Examination and begin a rewarding career as a Certified Nursing Assistant.',
    ],
    closing:
      'At West Harbor CNA Academy, we believe exceptional caregivers are developed through knowledge, hands-on experience, integrity, and a genuine passion for serving others. Our commitment is to help every student graduate prepared to make a positive difference in the lives of those they care for.',
  },
  ourProgram: {
    title: 'Our Programs',
    paragraphs: [
      'At West Harbor CNA Academy, we provide more than a CNA training course — we provide a pathway to a rewarding career in healthcare. Our state-approved program combines expert classroom instruction, hands-on skills training, and supervised clinical experience to prepare students for success as Certified Nursing Assistants.',
      'Throughout the program, students receive personalized guidance from experienced instructors who are committed to helping each individual build confidence, develop professional skills, and prepare for the California State Licensing Examination.',
      'As a tuition-free program for qualified applicants, West Harbor CNA Academy removes financial barriers while offering an exceptional educational experience. From your first day in the classroom to your final clinical shift, you\'ll be supported every step of the way as you gain the knowledge, compassion, and practical experience needed to begin a meaningful career caring for others.',
      'Whether you\'re just entering the workforce, changing careers, or looking for a profession with purpose and opportunity, West Harbor CNA Academy is here to help you achieve your goals.',
    ],
  },
  /**
   * Mission Statement — Option 2 (Building the Heart of Healthcare)
   * Options 1 & 3 are retained below for easy swap later.
   */
  mission: {
    title: 'Our Mission',
    tagline: 'Building the Heart of Healthcare',
    paragraphs: [
      'At West Harbor CNA Academy, we believe that exceptional healthcare begins with exceptional caregivers. Our mission is to educate, inspire, and mentor future Certified Nursing Assistants by combining excellence in clinical education with compassion, integrity, and service.',
      'We strive to create a supportive learning environment where every student is encouraged to grow in knowledge, confidence, professionalism, and character. Our graduates leave prepared not only to provide outstanding resident care but also to make a lasting difference in the lives of patients, families, and healthcare teams.',
    ],
  },
  /** Alternate mission options — not currently rendered */
  missionOptions: {
    option1: {
      title: 'Our Mission',
      tagline: '',
      paragraphs: [
        'At West Harbor CNA Academy, our mission is to prepare compassionate, knowledgeable, and confident Certified Nursing Assistants who provide exceptional, person-centered care with integrity, professionalism, and respect.',
        'Through quality education, hands-on clinical experience, and mentorship, we empower students to serve others with excellence while meeting the highest standards of the nursing profession.',
        'We are committed to developing caregivers who not only possess the clinical skills necessary for success but also embrace kindness, compassion, accountability, and a lifelong commitment to improving the lives of those they serve.',
      ],
    },
    option3: {
      title: 'Our Mission',
      tagline: 'Aligned with West Harbor Health Care',
      paragraphs: [
        'The mission of West Harbor CNA Academy is to develop highly skilled and compassionate Certified Nursing Assistants who exemplify excellence in patient care through professionalism, accountability, and respect.',
        'We are committed to fostering a culture of learning where students are equipped with the knowledge, clinical experience, and confidence to succeed while embracing the privilege and responsibility of caring for others.',
        'By investing in the growth of each student, we strengthen the future of healthcare one caregiver at a time.',
      ],
    },
  },
  timeline: {
    title: 'Your Path to Becoming a CNA',
    intro: `Our inaugural class begins ${academyProgram.firstClassDate}. Apply now to take the first step.`,
    steps: [
      'Apply',
      'Interview',
      'Acceptance',
      'Classroom Training',
      'Clinical Training',
      'California State Exam',
      'Begin Your Career',
    ],
  },
  finalCta: {
    headline: 'Start Your Journey Today',
    primaryCta: { label: 'Apply Now', href: '/cna-academy/apply' },
    secondaryCta: { label: 'Contact Mollie', href: '/cna-academy/contact' },
    backgroundImage: '/images/hero-banner2.jpg',
  },
} as const;

export const applyContent = {
  hero: {
    headline: 'Apply to West Harbor CNA Academy',
    subheading:
      'Complete the multi-step application below. Your progress is saved automatically so you can return later.',
    note: academyProgram.firstClassNote,
  },
  success: {
    title: 'Application Submitted Successfully',
    message: 'Thank you.',
    detail: 'Someone from West Harbor CNA Academy will contact you soon.',
  },
  steps: [
    'Personal Information',
    'Education',
    'Employment',
    'Questions',
    'Documents',
    'Review',
  ] as const,
} as const;

export const contactPageContent = {
  hero: {
    headline: 'Contact the Academy',
    subheading:
      'Connect with Co-Program Director Mollie Openshaw — we are here to help you get started.',
  },
  formSuccess: {
    title: 'Message Sent Successfully',
    message:
      'Thank you for reaching out. Mollie Openshaw or a member of our team will respond soon.',
  },
} as const;
