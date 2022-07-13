import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Netflix Clone">
    <Container>
      <Title>
        Netflix Clone <Badge>2022</Badge>
      </Title>
      <P>
        This is a clone of netflix that allows you to create your own account, choose the service package you want and pay for it using stripe. 
        While you cannot watch full movies this clone lets you watch movie trailers for new movies, the trailers have been pulled using an api from TMDB. 
        Firebase was utilized for user authentication, user database and stripe linkage to user.
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

      <WorkImage src="/images/nhomep.png" alt="NHomepage" />
      <p>
        This clone carries the same user interface as the original Netflix website. The Navbar contains the same logo and link options as well as the user's account icon. The banner retrieves a movie obtained from the The Movie Database (TMDB) and displays the movie title, image and summary. There are also different rows of movies sorted by genres for the user to choose. 
      </p>
      <br/>
      <WorkImage src="/images/ntrailer.png" alt="NTrailer" />
      <p>
        When clicking on a movie a pop up window appears and plays the movie trailer. The movie description is displayed below along with the genres it falls into. TMDB's trailers are from youtube so the same video player is used. There is also an option to save a movie to watch later by clicking the plus sign icon. 
      </p>
      <br/>
      <WorkImage src="/images/myList.png" alt="MyList" />
      <p>
        The My List movie row will not be displayed if it is empty. Once a movie is added it will be rendered in the My List row.
      </p>
      <br/>
      <WorkImage src="/images/nlogin.png" alt="Nlogin" />
      <p>
        The site also allows for accounts to be created with an email and password. This user authentication process is done with Firebase. Users will be stopped from creating a new account if another account already shares the same email. User accounts can deleted by the Firebase administrator. If a user forgets their password it can be reset through the Firebase too.
      </p>
      <br/>
      <WorkImage src="/images/plans.png" alt="Plans" />
      <p>
        When a new account is created it will have the option to choose their desired plan before subscribing. 
      </p>
      <br/>
      <WorkImage src="/images/payment.png" alt="Payment" />
      <p>
        After choosing the plan the user will be able to use their credit card for payment. This is done using Stripe a payment processing platform.
      </p>
      <br/>
      <WorkImage src="/images/account2.png" alt="Account2" />
      <p>
        Users can see their account info and plan option by clicking the user account icon. They can also cancel their membership or change their plan.
      </p>
      <br/>
    </Container>
  </Layout>
)

export default Work