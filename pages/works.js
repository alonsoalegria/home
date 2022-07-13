import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbBlog from '../public/images/codeblogss.png'
import thumbnetflixcln from '../public/images/nlogin.png'

const Works = () => {
 return (
   <Layout>
 <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
        
        <Section>
          <WorkGridItem id="netflix-clone" title="Netflix Clone" thumbnail={thumbnetflixcln}
          >
            Netflix Clone made using Next.js, TypeScript, Tailwind
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="blog" title="Code-Blog" thumbnail={thumbBlog}>
            A blog website built with React, Gatsby.js and Sanity.io
          </WorkGridItem>
        </Section>
        </SimpleGrid>
      </Container>
      </Layout>
    )
}
    
export default Works
