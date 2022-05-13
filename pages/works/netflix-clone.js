import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Blog">
    <Container>
      <Title>
        Netflix Clone <Badge>2022</Badge>
      </Title>
      <P>
        This is a clone of netflix that allows you to create your own account, choose the service package you want and pay for it using stripe. While you cannot watch full movies this clone lets you watch movie trialers for new movies, the trailers have been pulled using an api from TMDB. Firebase was utilized for user authentication, user database and stripe linkage to user.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta> 
          <Link href="https://github.com/alonsoalegria/netflix-clone">
          https://github.com/alonsoalegria/netflix-clone <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
          
        <ListItem> 
        <Meta>Stack</Meta>
          <span>Next.js, Typescript, Tailwind</span>
        </ListItem>
      

      <ListItem>
          <Meta>Visit</Meta> 
          <Link href="https://netflix-clone-hazel-ten.vercel.app/">
           https://netflix-clone-hazel-ten.vercel.app <ExternalLinkIcon mx="2px" />
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