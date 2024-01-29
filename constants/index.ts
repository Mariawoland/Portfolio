import { SiNextdotjs, SiTypescript, SiMongodb, SiTailwindcss } from "react-icons/si";

export const TASKS = [
    {
        image: "/tasks/img1.png",
        title: "Responsive Web Design",
    },
    {
        image: "/tasks/img2.png",
        title: "API Integration",
    },
    {
        image: "/tasks/img3.png",
        title: `Version Control/Git`,
    },
    {
        image: "/tasks/img4.png",
        title: "Front-End Frameworks",
    },
];

export const EXPERIENCE = [
    {
        title: "MERN Developer",
        company_name: "Youth Society Parzival",
        date: "June 2023 - Present",
        place: "Matsevani, Georgia",
        image: "/job/img1.jpg",
        points: [
            "Developing and maintaining web applications using Next.js, MongoDB and other related technologies.",
            "Designing visually appealing and user-friendly interfaces that enhance the overall user experience.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Reviw project idea and goal with Parival members, implementing Group's idea.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "m2 - Developer Company",
        date: " December 2023 - Present",
        place: "Krasnoyarsk, Russia",
        image: "/job/img2.png",
        points: [
            "Crafting and upkeeping web applications with a focus on Next.js and associated technologies.",
            "Creating visually engaging and intuitive interfaces to elevate the overall user experience.",
            "Executing responsive design strategies and guaranteeing compatibility across various web browsers.",
            "Collaborating with employers to rethink project concepts and objectives.",
        ],
    }
];

export const EDUCATION = [
    {
        date: "Feb 2023 - Dec 2023",
        name: "Davit Kenchadze's Front-End course",
        description: "1 year course. I started it in February 2023,  finished in December prematurely, because I was transferred to a group that started 3 months earlier due to doing tasks in advance and being more advanced compared to other students. During this course I learned Responsive Web-Development, Bootstrap, Advanced Javascript and React.js."
    },
    {
        date: "Dec 2022 - Jan 2023",
        name: "Introduction to Computer Science in JavaScript (Golden)",
        description: "Bitcamp, where I got to know and remembered the basics of programming and Javascript."
    },
    {
        date: "Jan 2023 - Mar 2023",
        name: "Responsive Web Design (FreeCodeCamp)",
        description: "The course through which I learned Responsive Web-Development, deepened my knowledge in HTML and CSS."
    },
    {
        date: "Dec 2023 - Present",
        name: "The Complete JavaScript Course 2024: From Zero to Expert!",
        description: "The course I learn advanced Javascript with. "
    }
]

export const PROJECTS = [
    {
        name: "Youth Society Parzival",
        work: "Mern Stack Development",
        description:
            'The website has an admin panel where admin must log in from hidden link (special request), from where the they can post products and posts. The information is stored on MongoDB. The Shop section includes search, a category filter. Website uses LocalStorage to save items in cart. I used Clerk, SwiperJs and UploadImage as helpers.',
        icons: [
            "/projects/img1.png",
            "/projects/img2.png",
            "/projects/img3.png",
            "/projects/img4.png",
            "/projects/img5.png",
            "/projects/img6.png"
        ],

        image: "/projects/1.png",

        link: "https://parzival.ge/",
        gitlink: "https://github.com/Mariawoland/Parzival"
    },
    {
        name: "Solidify",
        work: "Frontend Development",
        description:
            'Simple Blog website, that allows users to registrate, log in, add, delete and edit posts. Website uses shared API. I used AI for deoration.',
        icons: [
            "/projects/img1.png",
            "/projects/img5.png",
            "/projects/img6.png"
        ],

        image: "/projects/6.png",

        link: "https://solidify-psi.vercel.app/",
        gitlink: "https://github.com/Mariawoland/Solidify"
    },
    {
        name: "Tasks",
        work: "Frontend Development",
        description:
            'Website fetches information using Axios, from JSONPlaceholder. Website uses cookies to change themes and save information if user is logged in.',
        icons: [
            "/projects/img1.png",
            "/projects/img2.png",
            "/projects/img3.png",
            "/projects/img5.png",
            "/projects/img6.png"
        ],

        image: "/projects/5.png",

        link: "https://tasks-ten-iota.vercel.app/",
        gitlink: "https://github.com/Mariawoland/Tasks"
    },
    {
        name: "Astro Trip",
        work: "Frontend Development",
        description:
            'Website fetches information using Typescript. I used EmailJs and SwiperJs as helpers.',
        icons: [
            "/projects/img1.png",
            "/projects/img2.png",
            "/projects/img3.png",
            "/projects/img5.png",
            "/projects/img6.png"
        ],

        image: "/projects/2.png",

        link: "https://astro-trip.vercel.app/",
        gitlink: "https://github.com/Mariawoland/Astro-Trip"
    },
    {
        name: "Agent",
        work: "Mern Stack Development",
        description:
            'Website exstracts information from MongoDB. I used EmailJs as helper.',
        icons: [
            "/projects/img1.png",
            "/projects/img2.png",
            "/projects/img3.png",
            "/projects/img4.png",
            "/projects/img5.png",
            "/projects/img6.png"
        ],

        image: "/projects/3.png",

        link: "https://agent-vpgf.vercel.app/",
        gitlink: "https://github.com/Mariawoland/Agent"
    },
    {
        name: "Wind",
        work: "Frontend Development",
        description:
            'Website fetches information using Typescript. I used EmailJs and SwiperJs as helpers.',
        icons: [
            "/projects/img1.png",
            "/projects/img2.png",
            "/projects/img3.png",
            "/projects/img5.png",
            "/projects/img6.png"
        ],

        image: "/projects/4.png",

        link: "https://wind-pcnxs3txs-mariawoland.vercel.app/",
        gitlink: "https://github.com/Mariawoland/Wind"
    }
];