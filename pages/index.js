import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { Box, Container } from '@chakra-ui/react'

export default function Home() {
    return (
        <ChakraProvider> 
            <Head>
                <title> David Gasinski</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Box as='main'> 
                <Container maxW='container.md' p={10}>
                    Hello
                </Container>
            </Box>
        </ChakraProvider>
    )
}