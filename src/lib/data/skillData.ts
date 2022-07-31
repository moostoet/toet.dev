//create an object filled with skill data to export

import {
    mdiLanguageJavascript,
    mdiLanguageTypescript,
    mdiTailwind,
    mdiLanguageCss3,
    mdiVuejs,
    mdiAngular,
    mdiLeafCircle,
    mdiLeaf,
    mdiPower,
    mdiNodejs,
    mdiDocker,
    mdiDigitalOcean,
} from "@mdi/js";

export const skillDataFrontEnd = {
    skills: [
        {
            title: "JavaScript & TypeScript",
            experience: "Proficient (4-5 years experience)",
            description:
                "I have a large amount of experience with both JavaScript and TypeScript and use them in my day-to-day programming work. I have recently come to use TypeScript more often for its strict typing and consistency. My strengths with these languages is in combination with Javscript frameworks such as Vue and Angular.",
            icons: [
                {
                    path: mdiLanguageJavascript,
                    iconColor: "#EAD41C",
                },
                {
                    path: mdiLanguageTypescript,
                    iconColor: "#2F74C0",
                },
            ],
            iconSize: 1.5,
        },
        {
            title: "CSS3 & Tailwind",
            experience: "Proficient (4+ years experience)",
            description:
                "I have always loved to make things that are pleasant to look at. Not only that, but the flow of said design has to work well, too. With CSS3 and Tailwind I create wonderful experiences for end-users and clients alike, and I always strive to learn more ways to make a website stand out with these tools.",
            icons: [
                {
                    path: mdiLanguageCss3,
                    iconColor: "#0D73B7",
                },
                {
                    path: mdiTailwind,
                    iconColor: "#38BDF8",
                },
            ],
            iconSize: 1.5,
        },
        {
            title: "JavaScript Frameworks",
            experience: "Proficient (4+ years experience)",
            description:
                "The environment I have programmed in the most would be JavaScript frameworks. I have mostly used Vue (both Vue2 and Vue3) and Angular as my frameworks of choice to create interactive full-stack web apps. Fun fact: this website was made in Svelte!",
            icons: [
                {
                    path: mdiVuejs,
                    iconColor: "#42B883",
                },
                {
                    path: mdiAngular,
                    iconColor: "#DD0031",
                },
            ],
            iconSize: 1.5,
        },
    ],
};

export const skillDataBackEnd = {
    skills: [
        {
            title: "MongoDB, ExpressJS, NodeJS",
            experience: "Proficient (3~ years experience)",
            description:
                "I have learned to work with both small and large-scale systems using NodeJS and the MEVN/MEAN stack by extension. This knowledge allows me to apply my expertise and experience to not only the frontend, but the backend as well.",
            icons: [
                {
                    path: mdiLeaf,
                    iconColor: "#4EAD3E",
                },
                {
                    path: mdiNodejs,
                    iconColor: "#689F63",
                },
            ],
            iconSize: 1.5,
        },
        {
            title: "Spring, Spring Boot",
            experience: "Advanced (6~ months experience)",
            description:
                "Being recently acquainted with a Java-based backend solution, I wondered to myself if this was the thing for me; but I've really grown to like the way Spring / Spring Boot allows me to easily build backend services with easy integration to databases and front-end applications. I look forward to learning even more about Spring.",
            icons: [
                {
                    path: mdiLeafCircle,
                    iconColor: "#67AA3C",
                },
                {
                    path: mdiPower,
                    iconColor: "#67AA3C",
                },
            ],
            iconSize: 1.5,
        },
        {
            title: "Docker, DigitalOcean",
            experience: "Competent (2~ years experience)",
            description:
                "In my experience with developing larger, full-stack applications, I have learned how to use Docker and DigitalOcean to easily deploy and manage said applications. I have also learned how to use Docker to deploy and manage my own personal projects with ease.",
            icons: [
                {
                    path: mdiDocker,
                    iconColor: "#228FE1",
                },
                {
                    path: mdiDigitalOcean,
                    iconColor: "#0079F2",
                },
            ],
            iconSize: 1.5,
        },
    ],
};
