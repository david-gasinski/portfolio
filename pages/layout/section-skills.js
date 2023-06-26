import { Container, Box } from '@chakra-ui/react';
import { IconContext } from 'react-icons';
import { skills } from '../content/content';

export const Skills = () => {
    return (
        <Container maxW={'container.md'}>
            <IconContext.Provider value={{ size: '1.5em' }}>
                {skills.map((value, index) => (
                    <Box
                        display={'flex'}
                        flexDir={'row'}
                        justifyContent={'start'}
                        pb={5}
                        key={index}
                    >
                        {value.logo}
                        <Box textColor={'#828282'} pl={'1em'}>
                            {value.tech}
                        </Box>
                    </Box>
                ))}
            </IconContext.Provider>
        </Container>
    );
};
