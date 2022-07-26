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
        A blog website built with react and Gatsby.js with the choice to add or delete 
        posts using sanity.io
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

      <WorkImage src="/images/cbloghome.png" alt="CBlogHome" />
      <div>
        This site was created by Alonso to demostrate his tech interests and hobbies. Here you can learn more about Alonso and the projects he has created in detail. There are also plenty of posts that help you better understand and solve Data structure and Algorithm problems take from leetcode.
      </div>
      <br/>

      <WorkImage src="/images/blogspage.png" alt="BlogPage" />
      <div>
        By clicking on the blogs tab in the navbar the user is redirected to the blogs page, where they can check out all the available posts on the site. 
      </div>
      <br/>

      <WorkImage src="/images/category.png" alt="Category" />
      <div>
        By clicking on Categories the user can choose the category of the posts of their choice.
      </div>
      <br/>

      <WorkImage src="/images/binblog.png" alt="BinBlog" />
      <div>
        Each post has links to the author and categories that the post falls under. The posts revolve around computer science topics and concepts that interest Alonso.
      </div>
      <br/>

      <WorkImage src="/images/sanitypost.png" alt="SanityPost" />
      <div>
        The authors, categories and posts are all created and manged using Sanity.io, this allows for creating posts and not worry about having to code each post.
      </div>
      <br/>

    </Container>
  </Layout>
)

export default Work
