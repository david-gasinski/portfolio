import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { Box, Container, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

let sub_topics = [
    {
        title: 'About me',
        description: 'Hello i am blah blah blah from blah blah blah'
    },
    {
        title: 'Projects',
        description: 'Hello i am blah blah blah from blah blah blah'
    },
    {
        title: 'Skills',
        description: 'Hello i am blah blah blah from blah blah blah'
    }
];

export default function Home() {
    return (
        <ChakraProvider>
            <Head>
                <title> David Gasinski</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Box as="main">
                {
                    // Heading an content
                }
                <Container maxW="container.md" p={10}>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <Heading>David Gasinski</Heading>
                        <Box
                            background={
                                'linear-gradient(to right, rgb(187, 247, 208), rgb(134, 239, 172), rgb(59, 130, 246))'
                            }
                            maxW={'comtainer.md'}
                            h={4}
                            borderRadius={10}
                        />
                    </motion.div>
                </Container>
                <Container p={10} maxW={'container.lg'}>
                    {sub_topics.map((value, index) => (
                        <Container key={index} maxW={'container.lg'}>
                            <Box textColor={'grey'}>{value.title}</Box>
                            <Box textColor={'#A9A9A9'}>{value.description}</Box>
                        </Container>
                    ))}
                </Container>
            </Box>
        </ChakraProvider>
    );
}
