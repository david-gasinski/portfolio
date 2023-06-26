import { Container } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';

export const About = () => {
    return (
        <Container maxW={'container.md'} textColor={'#828282'}>
            Welcome! My name is David and i'm an undergraduate student{' '}
            <Link textColor={'teal'} href={'https://www.sheffield.ac.uk/'}>
                @ The University of Sheffield
            </Link>
            , an avid problem solver and athlete! Member of{' '}
            <Link color={'teal'} href={'https://www.linkedin.com/company/official-project-pixel/'}>
                {' '}
                Project Pixel
            </Link>
            , a student-lead game-development team. Winner of 2022 <Link color={'teal'} href={'https://shefcompsoc.uk/'}>ShefJam.</Link>
        </Container>
    );
};
