import NextLink from 'next/link'
import { Container, Box, Heading, Image, Link, useColorModeValue, Icon, Button, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoTiktok } from 'react-icons/io5'
import Ousama from '../public/images/Ousama.jpg';

const Page = () => {
    return  (
        <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center"> 
                Hi, thank you for visiting my portfolio!
            </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Alonso Alegria
                    </Heading>
                    <p>Software Developer</p>
                </Box>
                <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{ md: 6 }} textAlign="center">
                    <Image borderColor="whiteAlpha.800" 
                    borderWidth={2} borderStyle="solid" 
                    maxWidth="100px" display="inline-block" 
                    borderRadius="full" src="/images/profilepic2.jpg" 
                    alt="Profile Image"/>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as = "h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    My most recent project has been this {''}
                    <NextLink href="/works/netflix-clone">
                        <Link>Netflix clone</Link>
                    </NextLink>
                    .
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            My Portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">Bio</Heading>
                <BioSection >
                    <BioYear>1997</BioYear>
                    Grew up in Southern California blah bla blah...
                </BioSection>
                <BioSection >
                    <BioYear>2021</BioYear>
                    Graduated from CSU San Marcos with a bachelors Degree in Computer Science.
                </BioSection>
                <BioSection >
                    <BioYear>2022
                    </BioYear>
                    Currently working on projects to enhance my skills as a Software Developer.
                </BioSection>
            </Section>

            <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <Paragraph>
          C++, JavaScript, Python
        </Paragraph>
      </Section>

      

      <Section delay ={0.3}>
          <Heading as= "h3" variant="section-title">
                Socials
          </Heading>
          <List>
              <ListItem>
                <Link href="https://github.com/alonsoalegria" target="_blank">
                    <Button variant="ghost" colorScheme="blue" leftIcon={<Icon as={IoLogoGithub}/>}>
                        @alonsoalegria
                    </Button>
                </Link>
                <Link href="https://www.instagram.com/alonsoalegria/" target="_blank">
                    <Button variant="ghost" colorScheme="blue" leftIcon={<Icon as={IoLogoInstagram}/>}>
                        @alonsoalegria
                    </Button>
                </Link>
              </ListItem>
              <ListItem>
                {/*<Link href="/" target="_blank">
                    <Button variant="ghost" colorScheme="blue" leftIcon={<Icon as={IoLogoTwitter}/>}>
                        @alonsoalegria
                    </Button>
                </Link>
    */}
              </ListItem>
          </List>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://code-blog-nine.vercel.app/"
            title="Code Blog"
            thumbnail={Ousama}
          >
            Check out my blog to know more about me.
          </GridItem>
          <GridItem
            href="/"
            title="Next Project"
            thumbnail={Ousama}
          >
            This is what I'm working on
          </GridItem>
          </SimpleGrid>
          
      </Section>
        </Container>
        </Layout>
    )
}

export default Page