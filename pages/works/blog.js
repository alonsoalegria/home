import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Blog">
    <Container>
      <Title>
        Blog site <Badge>2022</Badge>
      </Title>
      <P>
        A blog website built with react and next js with the choice to add or delete 
        posts using sanity.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta> 
          <Link href="https://github.com/alonsoalegria/code-blog">
          https://github.com/alonsoalegria/code-blog <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
          
        <ListItem> 
        <Meta>Stack</Meta>
          <span>NodeJS, React Native</span>
        </ListItem>

        <ListItem>
          <Meta>Visit</Meta> 
          <Link href="https://code-blog-nine.vercel.app/">
          https://code-blog-nine.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/Ousama.jpg" alt="Ousama" />
      <div>
        explain what this image is about, talk about the project. 
      </div>
      <WorkImage src="/images/Ousama.jpg" alt="Ousama" />

    </Container>
  </Layout>
)

export default Work
