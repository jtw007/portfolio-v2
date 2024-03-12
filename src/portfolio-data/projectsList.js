// imports for project images
import spiritFinder from './projectImage/SpiritFinder.png'
import Project3 from './projectImage/project3.png'

export const projectsList = [
    {
        title: 'SpiritFinder',
        slug: 'spiritfinder',
        img: spiritFinder,
        name: 'SpiritFinder',
        subheader:`A frontend app rendering data utilizing an API`,
        desc: `SpiritFinder is a frontend app built with Vite, React, and styled with Tailwind. It uses a free API service from API Ninjas that pulls cocktail recipes and displays what the user searches. `,
        stacks: [
            "HTML",
            "CSS",
            "MongoDB",
            "Express",
            "React",
            "NodeJs",
            "Bootstrap",
            'React-Bootstrap',
            'MDBootstrap'
        ],
        siteURL: 'https://spiritfinder.netlify.app/',
        githubURL: 'https://github.com/jtw007/cocktail-api-v2-frontend'
    },

    {
        title: 'McFaceBook',
        slug: 'mcfacebook',
        img: Project3,
        name: 'McFacebook',
        subheader:`A 2010's FaceBook themed blog app`,
        desc: `McFaceBook is a MERN stack app built by a team of four developers. Users can create a new account, sign in, create, edit, and delete posts.`,
        stacks: [
            "ViteJS",
            "ReactJS",
            "Tailwind CSS",
        ],
        siteURL: 'https://mcfacebook.netlify.app/',
        githubURL: 'https://github.com/jtw007/domino-client'
    },
]