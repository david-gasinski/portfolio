import { Container, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const Section = ({ delay, children, contentTitle, key }) => {
    return (
        <Container key={key} maxW={'container.md'}>
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                s
                transition={{ type: 'spring', stiffness: 100, delay: 1 + delay }}
            >
                <Box display={'block'} textColor={'#454444'}>
                    {contentTitle}
                </Box>
                <Box pl={100}>{children}</Box>
            </motion.div>
        </Container>
    );
};
