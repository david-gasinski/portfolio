import { Heading, Box, Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const Header = ({ children }) => {
    return (
        <Container maxW="container.md" p={10}>
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
            >
                <Heading>David Gasinski</Heading>
                <Box
                    background={
                        'linear-gradient(to right, rgb(187, 247, 208), rgb(134, 239, 172), rgb(59, 130, 246))'
                    }
                    maxW={'container.md'}
                    h={4}
                    borderRadius={10}
                />
                {children}
            </motion.div>
        </Container>
    );
};
