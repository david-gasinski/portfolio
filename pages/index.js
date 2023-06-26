import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { Box, Container } from '@chakra-ui/react';
import { Header } from '../components/header';
import { Socials } from '../components/social';
import { Section } from '../layout/section';
import { sections } from '../content/content';

export default function Home() {
    return (
        <ChakraProvider>
            <Head>
                <title> David Gasinski</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Box as="main">
                <Header />
                <Socials />
                <Container p={10} maxW={'container.lg'}>
                    {sections.map((value, index) => (
                        <Section contentTitle={value.title} delay={index * 0.5}>
                            {value.content}
                        </Section>
                    ))}
                </Container>
            </Box>
        </ChakraProvider>
    );
}
