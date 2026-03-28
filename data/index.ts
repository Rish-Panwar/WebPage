// ----------------------------------------------
// NAV ITEMS
// ----------------------------------------------
export const navItems = [
  { name: "About", link: "about" },
  { name: "Projects", link: "projects" },
  { name: "Experience", link: "experience" },
  { name: "Contact", link: "contact" },
];

// ----------------------------------------------
// GRID SECTION
// ----------------------------------------------
export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration and fostering open communication",
    description: "",
    className: "md:col-span-6 lg:col-span-4 row-span-2 lg:min-h-[60vh]",
    img: "/banner-2.jpg",
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]',
    spareImg: '',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: '',
    titleClassName: 'justify-start',
    spareImg: '',
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: '',
    titleClassName: 'justify-center',
    spareImg: '',
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    img: '/grid.svg',
    imgClassName: '',
    titleClassName: 'justify-start',
    spareImg: '/b4.svg',
  },
  {
    id: 5,
    title: "Creating Magical Motion with JavaScript",
    description: "A glimpse into the animated scenes.",
    className: "md:col-span-4 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    spareImg: '',
  },
];

// ----------------------------------------------
// PROJECTS
// ----------------------------------------------
export const projects = [
  {
    id: 1,
    title: "3D Interactive Portfolio",
    des: "An immersive portfolio built with Three.js and React Three Fiber, featuring a dynamic 3D hero scene, smooth animations, and modern UI interactions to showcase projects and skills.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg",],
    link: "https://portfolio-rishabh-17.vercel.app",
  },
  {
    id: 2,
    title: "Cocktail Showcase (GSAP Landing Page)",
    des: "A visually engaging landing page with GSAP-powered animations, smooth scroll transitions, and interactive UI components designed for storytelling and modern web experiences.",
    img: "/p2.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/gsap.svg"],
    link: "https://github.com/Rish-Panwar/landing-page-gsap-",
  },
  {
    id: 3,
    title: "Car Rental Platform (Full Stack)",
    des: "A full-stack car rental application with REST APIs, MongoDB integration, and scalable backend architecture, allowing users to browse, view, and manage rental listings efficiently.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    link: "https://rental-site-theta.vercel.app/",
  },
  {
    id: 4,
    title: "Golden Drop — Honey E-commerce",
    des: "A modern e-commerce platform for organic honey products featuring dynamic filtering, cart system, authentication with Clerk, and responsive UI optimized for performance and usability.",
    img: "/p4.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    link: "https://golden-drop.vercel.app",
  },
];
// ----------------------------------------------
// WORK EXPERIENCE
// ----------------------------------------------
export const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    duration: "2024 - Present",
    points: [
      "Built responsive web apps using Next.js & React",
      "Implemented authentication with Clerk",
      "Optimized performance and SEO",
    ],
    tech: "React, Next.js, Tailwind, Convex",
  },
  {
    role: "Frontend Developer",
    company: "Personal Projects",
    duration: "2023 - 2024",
    points: [
      "Created animated UI with Framer Motion",
      "Developed reusable components",
      "Worked on real-world UI designs",
    ],
    tech: "React, Tailwind, Framer Motion",
  },
];

// ----------------------------------------------
// APPROACH STEPS 
// ----------------------------------------------
export const steps = [
    {
        title: "Think",
        desc: "I start by understanding the problem deeply and analyzing user needs.",
    },
    {
        title: "Design",
        desc: "I craft clean, intuitive UI with performance-first mindset.",
    },
    {
        title: "Build",
        desc: "I develop scalable, responsive apps using modern technologies.",
    },
    {
        title: "Optimize",
        desc: "I refine, test, and improve for speed, SEO, and UX.",
    },
];

// ----------------------------------------------
// SOCIAL MEDIA
// ----------------------------------------------
export const socialMedia = [
  { id: 1, img: "/git.svg" },
  { id: 2, img: "/twit.svg" },
  { id: 3, img: "/link.svg" },
];
