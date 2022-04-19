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
          <Meta>Website</Meta> 
          <Link href="https://www.inkdrop.app/">
            https://www.inkdrop.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </List>

    </Container>
  </Layout>
)

export default Work
