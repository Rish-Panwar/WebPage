// ----------------------------------------------
// NAV ITEMS
// ----------------------------------------------
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

// ----------------------------------------------
// GRID SECTION
// ----------------------------------------------
export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
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
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// ----------------------------------------------
// PROJECTS
// ----------------------------------------------
export const projects = [
  {
    id: 1,
    title: "3D Solar System Explorer",
    des: "A fully interactive 3D planetary experience built with Three.js, designed to visualize the solar system in an engaging and educational way.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
  },
  {
    id: 2,
    title: "Yoom — Next-Gen Video Conferencing",
    des: "A streamlined video-calling platform focused on speed, clarity, and ease of use. Built with cutting-edge real-time communication tools.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "AI-Powered Canva-Style Editor",
    des: "A complete SaaS platform integrating AI image generation, user accounts, subscription billing, and a powerful design canvas.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "Apple iPhone 3D Web Experience",
    des: "A pixel-perfect recreation of Apple’s iPhone 15 Pro website using GSAP animations and custom Three.js 3D models.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
];

// ----------------------------------------------
// TESTIMONIALS
// ----------------------------------------------
export const testimonials = [
  {
    quote:
      "Working with him was an excellent experience. His attention to detail, reliability, and commitment to delivering high-quality results were evident throughout the project.",
    name: "Michael Johnson",
    title: "Director, AlphaStream Technologies",
  },
  {
    quote:
      "He demonstrates strong technical understanding and consistently delivers beyond expectations. A very talented and dependable developer.",
    name: "Michael Johnson",
    title: "Director, AlphaStream Technologies",
  },
  {
    quote:
      "Exceptional communication and execution — he understands project goals quickly and delivers with precision. Highly recommended.",
    name: "Michael Johnson",
    title: "Director, AlphaStream Technologies",
  },
  {
    quote:
      "A great collaborator who brings clarity, structure, and creativity to every task. The entire process was smooth and enjoyable.",
    name: "Michael Johnson",
    title: "Director, AlphaStream Technologies",
  },
  {
    quote:
      "His passion for development truly stands out. If you want to elevate your digital presence, he’s the right person for the job.",
    name: "Michael Johnson",
    title: "Director, AlphaStream Technologies",
  },
];

// ----------------------------------------------
// COMPANIES / COLLABORATIONS
// ----------------------------------------------
export const companies = [
  {
    id: 1,
    name: "Cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Hostinger",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "Docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

// ----------------------------------------------
// WORK EXPERIENCE
// ----------------------------------------------
export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineering Intern",
    desc: "Contributed to building responsive UI components with React, improving performance and user interaction across the platform.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Developer — JSM Tech",
    desc: "Designed and developed cross-platform mobile applications using React Native, focusing on smooth UX and scalability.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Application Developer",
    desc: "Led full-cycle development for client projects, from initial planning and UI design to deployment and maintenance.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Architected and maintained complex user-facing features using modern frameworks and optimized front-end performance.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
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
