import {
    mobile,
    backend,
    // creator,
    web,
    javascript,
    // typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    // docker,
    // meta,
    // starbucks,
    // tesla,
    // shopify,
    codsoft,
    wsa,
    // carrent,
    // jobit,
    // tripguide,
    threejs,
    expensesapp,
    mealsapp,
    reduxcart
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
		// {
		//   title: "React.js Developer",
		//   company_name: "Starbucks",
		//   icon: starbucks,
		//   iconBg: "#383E56",
		//   date: "March 2020 - April 2021",
		//   points: [
		//     "Developing and maintaining web applications using React.js and other related technologies.",
		//     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
		//     "Implementing responsive design and ensuring cross-browser compatibility.",
		//     "Participating in code reviews and providing constructive feedback to other developers.",
		//   ],
		// },
		// {
		//   title: "React Native Developer",
		//   company_name: "Tesla",
		//   icon: tesla,
		//   iconBg: "#E6DEDD",
		//   date: "Jan 2021 - Feb 2022",
		//   points: [
		//     "Developing and maintaining web applications using React.js and other related technologies.",
		//     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
		//     "Implementing responsive design and ensuring cross-browser compatibility.",
		//     "Participating in code reviews and providing constructive feedback to other developers.",
		//   ],
		// },
		{
			title: "Web Developer Intern",
			company_name: "CodSoft",
			icon: codsoft,
			iconBg: "#383E56",
			date: "Aug 2023 - Sep 2023",
			points: [
				"Developed a responsive Landing Page.",
				"Developed a personal Portfolio website.",
				"Developed a functional calculator",
				"Gained essential and valuable skills from the experience",
			],
		},
		{
			title: "Full Stack Developer Intern",
			company_name: "Webstack Academy",
			icon: wsa,
			iconBg: "#383E56",
			date: "Feb 2024 - Apr 2024",
			points: [
        "Built a full stack home rental and property management web application.",
        "Used jsonwebtokens for user authentication",
				"Used cloudinary for media management, stripe for payment gateway and mailtrap for emailing.",
				"Gained essential and valuable development skills from the experience",
			],
		},
	];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Expenses App",
      description:
        "Web-based platform that allows users to maintain expenses and keep a record of them.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: expensesapp,
      source_code_link: "https://github.com/",
    },
    {
      name: "Meals App",
      description:
        "Web application that enables users to choose from a delicious array of meals, add them to their cart and order themas required.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: mealsapp,
      source_code_link: "https://github.com/",
    },
    {
      name: "Redux Cart",
      description:
        "A comprehensive cart UI using React Redux.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: reduxcart,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };