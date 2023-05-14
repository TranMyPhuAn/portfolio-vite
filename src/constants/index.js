import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  nest,
  next,
  vite,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  movie_fe,
  movie_be,
  socketio,
  tiktok,
  netflix,
  airbnb,
  house,
  cybersoft,
  earth
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'skill',
    title: 'Skill'
  },
  {
    id: 'projects',
    title: 'Projects'
  },
  {
    id: 'compliments',
    title: 'Compliments'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
];

const services = [
  {
    title: 'Frontend Developer',
    icon: web
  },
  {
    title: 'Backend Developer',
    icon: creator
  },
  {
    title: 'FullStack Developer',
    icon: backend
  },
  {
    title: 'Content Creator',
    icon: mobile
  }
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Redux Toolkit',
    icon: redux
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'Three JS',
    icon: threejs
  },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'Nest JS',
    icon: nest
  },
  {
    name: 'docker',
    icon: docker
  }
];

const experiences = [
  {
    title: 'Frontend Developer',
    company_name: 'HTML5, CSS3, SCSS, BOOTSTRAP, GIT, JAVASCRIPT, ES6, API, REACT.JS',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Mar 2022 - Dec 2022',
    points: [
      "The process of learning frontend usually starts with HTML and CSS, getting familiar with creating and designing basic web pages. Next, learn how to use code management tools like Git to track and manage changes on the project's source code.",
      'Then, learn about programming techniques and structures of JavaScript, including creating and using APIs, and understand JavaScript frameworks like React.js to build complex web applications.',
      'During the learning process, regularly research and study new technologies and techniques to stay updated with knowledge and develop skills in the frontend development field.'
    ]
  },
  {
    title: 'Backend Developer',
    company_name: 'NODE.JS, EXPRESSJS, SWAGGER, SEQUELIZE, PRISMA, GRAPHQL, NEST.JS, DOCKER, MYSQL, MONGODB',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'Jan 2023 - Apr 2023',
    points: [
      'Learning backend programming usually starts with learning programming languages like JavaScript and TypeScript',
      'Then learn how to use backend technologies like Node.js, Express.js, Nest.js, and database management systems like MySQL and MongoDB to develop web applications.',
      'Finally, learn about Linux and Docker commands to deploy projects, meet user requirements and be efficient.'
    ]
  },
  // {
  //   title: 'Web Developer',
  //   company_name: 'Shopify',
  //   icon: shopify,
  //   iconBg: '#383E56',
  //   date: 'Jan 2022 - Jan 2023',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.'
  //   ]
  // },
  {
    title: 'Full stack Developer',
    company_name: 'NEXT.JS, THREE.JS, REACT NATIVE...',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Apr 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Learn how to create and create 3D projects. Executing the whole project with next.js',
      'Read documents and learn foreign programming teaching videos',
      'Future-oriented, good at English and programming on mobile.'
    ]
  }
];

const testimonials = [
  {
    testimonial: 'Thank you to my family for always supporting me to pursue my passion for programming.',
    name: 'MyPhuAn',
    designation: 'Mỹ',
    company: 'Phú',
    image: house
  },
  {
    testimonial:
      "Thank you teacher Song Quang Le for founding Cybersoft. Thank siblings on the fanpage for introducing me to cybersoft's learning path. Thank you to lecturer Truong Tan Khai Nguyen Dinh Sang and the Mentors for their enthusiastic support and knowledge transfer.",
    name: 'Cybersoft',
    designation: 'Developer',
    company: 'Training Center',
    image: cybersoft
  },
  {
    testimonial: 'Thank you for watching and rating support. I can improve myself more.',
    name: 'Community',
    designation: 'CTO',
    company: '456 Enterprises',
    image: earth
  }
];

const projects = [
  {
    name: 'Clone Movie TIX',
    description:
      'A website that allows users to watch movies online through the internet. Users can search and watch movies, TV shows and configurable activities through the search and watch video feature available on the website.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'react-router-dom',
        color: 'green-text-gradient'
      },
      {
        name: 'redux-thunk',
        color: 'pink-text-gradient'
      }
    ],
    image: movie_fe,
    source_code_link: 'https://github.com/TranMyPhuAn/movieFE'
  },
  {
    name: 'API Movie',
    description: 'Building a movie streaming web API with Nestjs. Using Swagger to return a user interface.',
    tags: [
      {
        name: 'nestjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'prisma',
        color: 'green-text-gradient'
      },
      {
        name: 'swagger',
        color: 'pink-text-gradient'
      }
    ],
    image: movie_be,
    source_code_link: 'https://github.com/TranMyPhuAn/movieBE'
  },
  {
    name: 'CyberChat',
    description: 'Allow users to chat online, many people enter the chat room.',
    tags: [
      {
        name: 'socketio',
        color: 'blue-text-gradient'
      },
      {
        name: 'express',
        color: 'green-text-gradient'
      },
      {
        name: 'CRUD',
        color: 'pink-text-gradient'
      }
    ],
    image: socketio,
    source_code_link: 'https://github.com/TranMyPhuAn/socketio'
  },
  {
    name: 'Clone Tiktok',
    description:
      'Web application that allows entertainment users to watch short videos and is built on the real tiktok web.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'react-scripts',
        color: 'green-text-gradient'
      },
      {
        name: 'scss',
        color: 'pink-text-gradient'
      }
    ],
    image: tiktok,
    source_code_link: 'https://github.com/TranMyPhuAn/tiktok-react'
  },
  {
    name: 'Clone Netflix',
    description: 'A website that allows users to watch movies online. Using the latest technology.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient'
      }
    ],
    image: netflix,
    source_code_link: 'https://github.com/TranMyPhuAn/netflix-next'
  },
  {
    name: 'Clone Airbnb',
    description:
      'A comprehensive travel booking platform that allows users to book hotels across the country, while providing curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'prisma',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient'
      }
    ],
    image: airbnb,
    source_code_link: 'https://github.com/TranMyPhuAn/airbnb-next'
  }
];

export { services, technologies, experiences, testimonials, projects };
