import { Container, Box, Card, CardBody, Text, Heading, Link } from '@chakra-ui/react';
import { projects } from '../content/content';
import { FaGithubSquare, FaYoutube } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion';

export const Projects = () => {
    return (
        <Container maxW={'container.md'}>
            <Text textColor={'#828282'}>Below are some of my recent projects!</Text>
            {projects.map((project, index) => (
                <motion.div
                    initial={{ x: 500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 100, delay: 3 + index * 0.25 }}
                >
                    <Box pt={10}>
                        <IconContext.Provider key={index} value={{ size: '1.5em' }}>
                            <Card>
                                <CardBody>
                                    <Link
                                        pb={5}
                                        textAlign={'center'}
                                        href={project.repo}
                                        display={'flex'}
                                        flexDir={'row'}
                                        justifyContent={'center'}
                                    >
                                        <FaGithubSquare />
                                        <FaYoutube />
                                    </Link>
                                    <Heading size={'md'}> {project.name}</Heading>
                                    <Text textColor={'#828282'} pt={'1em'}>
                                        {project.description}
                                    </Text>
                                    <Box
                                        pt={'1em'}
                                        display={'flex'}
                                        justifyContent={'start'}
                                        flexDir={'row'}
                                    >
                                        <Text pr={3}> Made with: </Text>
                                        {project.tech_stack.map((tech) => (
                                            <Box pr={5}>
                                                <IconContext.Provider
                                                    key={index}
                                                    value={{ size: '1.25em' }}
                                                >
                                                    {tech}
                                                </IconContext.Provider>
                                            </Box>
                                        ))}
                                    </Box>
                                </CardBody>
                            </Card>
                        </IconContext.Provider>
                    </Box>
                </motion.div>
            ))}
        </Container>
    );
};
