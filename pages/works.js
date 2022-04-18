import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbBlog from '../public/images/Ousama.jpg'
import thumbfclone from '../public/images/Ousama.jpg'

const Works = () => {
 return (
   <Layout>
 <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="blog" title="Blog" thumbnail={thumbBlog}>
            A blog website built with React, Next JS and Sanity 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="facebookClone" title="Facebook Clone" thumbnail={thumbfclone}
          >
            Facebook Clone website built with Next js
          </WorkGridItem>
        </Section>

        </SimpleGrid>
      </Container>
      </Layout>
    )
}
    
export default Works
