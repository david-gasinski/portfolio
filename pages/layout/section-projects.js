import { Container } from "@chakra-ui/react"
import { projects } from "../content/content"

export const Projects = () => {
    return (
        <Container maxW={'container.md'}>
            {projects.map((value, index) => (
             <>
                {value.name}
             </>
            ))}
        </Container>
    )
}