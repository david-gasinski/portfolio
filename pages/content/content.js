import { About } from '../layout/section-about';
import { Skills } from '../layout/section-skills';
import { FaPython, FaJava, FaNodeJs, FaReact, FaHtml5, FaCss3 } from 'react-icons/fa';

export const sections = [
    {
        title: 'About Me',
        content: <About />
    },
    {
        title: 'Skills',
        content: <Skills />
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
    }
];
