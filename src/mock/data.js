import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jason Kim | Personal Website',
  lang: 'en',
  description: 'Jason Kim\'s personal website',
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'As a recent computer science and business graduate of the University of Pennsylvania, I’m fascinated by how technology can be applied to improve all aspects of our lives.',
  paragraphTwo: 'I’m interested in working on creative ideas that bridge my backgrounds in computer science and business. If you have any questions or just want to chat, please reach out!',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1mu8piYgX4LlsGAslADmAxinunXR6zS03/view?usp=sharing',
  github: 'https://github.com/kim-jason'
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'nyc1.png',
    title: '"A Day in NYC"',
    info: 'Managed backend of full-stack web application that makes a NYC tourist itinerary with optimized travel routes.',
    info2: 'Created AWS databases and wrote SQL queries that optimize routes by time, cost, and transportation (taxi, subway, Lyft).',
    info3: 'Tech: SQL, AWS RDS',
    url: '',
    repo: 'https://github.com/kim-jason/A-Day-in-NYC',
  },
  {
    id: nanoid(),
    img: 'exercise1.png',
    title: 'Exercise Tracker', 
    info: 'Created full-stack web application in which users create accounts to record exercise activities.',
    info2: 'Implemented ability to edit the details or delete a previously recorded exercise activity.',
    info3: 'Tech: MongoDB, Express, React, Node',
    url: '',
    repo: 'https://github.com/kim-jason/Exercise-Tracker',
  },
  {
    id: nanoid(),
    img: 'fitnesspic.png',
    title: 'Real-time Fitness Pose Assessment with Computer Vision',
    info: 'Updated a ML model to assess a person\'s squat pose accuracy in real-time by calculating the angles of knees and locations of feet.',
    info2: 'Wrote a program that can also utilize the ML model on recorded video files to assess pose accuracy.',
    info3: 'Tech: Python, OpenCV',
    url: '',
    repo: 'https://github.com/kim-jason/Fitness-Pose-Assessment',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Send email',
  email: 'jason.s.kim20@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jasonks/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/kim-jason',
    },
    {
      id: nanoid(),
      name: 'envelope-o',
      url: 'mailto:jason.s.kim20@gmail.com'
    }
  ],
};

