import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@chakra-ui/react';
import { IconContext } from 'react-icons';
import { FaGithubSquare, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { socials } from '../content/content';

export const Socials = () => {
    return (
        <motion.div
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
        >
            <Container
                display={'flex'}
                flexDir={'row'}
                justifyContent={'center'}
                maxW={'container.md'}
            >
                <IconContext.Provider value={{ size: '2em' }}>
                    <Link pr={10} pl={10} href={socials.github}>
                        {' '}
                        <FaGithubSquare />{' '}
                    </Link>
                    <Link pr={10} pl={10} href={socials.linkedin}>
                        {' '}
                        <FaLinkedin />{' '}
                    </Link>
                    <Link pr={10} pl={10} href={socials.youtube}>
                        {' '}
                        <FaYoutube />{' '}
                    </Link>
                </IconContext.Provider>
            </Container>
        </motion.div>
    );
};
