import { About } from '../layout/section-about';
import { Skills } from '../layout/section-skills';
import { FaPython, FaJava, FaNodeJs, FaReact } from 'react-icons/fa';
import { DiRuby } from 'react-icons/di';
import { SiRubysinatra } from 'react-icons/si';
import { Projects } from '../layout/section-projects';

export const sections = [
    {
        title: 'About Me',
        content: <About />
    },
    {
        title: 'Skills',
        content: <Skills />
    },
    {
        title: 'Projects',
        content: <Projects />
    }
];

export const socials = {
    linkedin: 'https://linkedin.com/in/david-gasinski/',
    youtube: 'word.com',
    github: 'https://github.com/david-gasinski'
};

export const skills = [
    {
        logo: <FaPython />,
        tech: 'Flask | Flask-Restful | Pandas | Async IO | PyTest'
    },
    {
        logo: <FaJava />,
        tech: 'SpringBoot | LWJGl 3 | JUnit'
    },
    {
        logo: <FaNodeJs />,
        tech: 'Express | Ether.js | Axios'
    },
    {
        logo: <FaReact />,
        tech: 'Next.Js | React-Router | React-Redux'
    },
    {
        logo: <DiRuby />,
        tech: 'Sinatra | Sequel'
    }
];

export const projects = [
    {
        name: 'Crypto Portfolio Analysis with Discord',
        description:
            'A discord bot which allows the user to link their wallet ID to their discord account. The user can then use a command to generate a unique link (which expires after 12 hours) to view a summary of their portolfio.',
        repo: 'https://github.com/david-gasinski/python-crypto-bot',
        tech_stack: [<FaReact />, <FaPython />, <FaJava />],
        showcase: 'https://youtube.com',
        blog_post: 'Dynamic Porfolio Analysis Crypto Bot'
    },
    {
        name: 'Footballer Management Software',
        description:
            'A program which analyses .csv files of football players. The program parses data from the .csv file into an interface, where the user can filter through players and view their statistics alongside a radarchart showcasing the average of selected players properties.',
        repo: 'https://github.com/tuos-dcs-COM1003/com1003-footie-assignment-david-gasinski',
        tech_stack: [<FaJava />],
        showcase: 'https://youtube.com',
        blog_post: 'Footballer management software'
    },
    {
        name: 'Ruby Course Website',
        description:
            'A course recommendation website made as part of a software engineering team. Allows the user to log in / sign up, view courses relevant to their degree. Users can mark courses as complete. After a course is completed, it can be given a rating.',
        repo: 'https://github.com/david-gasinski/',
        tech_stack: [<DiRuby />, <SiRubysinatra />],
        showcase: 'https://youtube.com',
        blog_post: 'Ruby Course Recommendation website'
    },
    {
        name: 'OpenGL Doom Engine',
        description:
            'A Doom-style rendering engine made in LWJGL 3, a library which offers java bindings for OpenGL and other low-level graphical libraries',
        repo: 'https://github.com/david-gasinski/',
        tech_stack: [<FaJava />],
        showcase: 'https://youtube.com',
        blog_post: 'Doom Engine'
    }
];


const unfinished_content = [
    {
        name: '2D Java Platformer',
        description:
            'A simple Java game made with Java.AWT. Uses free assets found from websites such as itch.io.',
        repo: 'https://github.com/david-gasinski/',
        tech_stack: [<FaJava />],
        showcase: 'https://youtube.com',
        blog_post: '2D Java Platformer'
    }
]