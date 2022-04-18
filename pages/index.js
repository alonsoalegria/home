import NextLink from 'next/link'
import { Container, Box, Heading, Image, Link, useColorModeValue, Button } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'

const Page = () => {
    return  (
        <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center"> 
                Hello, I&apos;m a full-stack developer from Temecula, CA!
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
                    <NextLink href="/works/blog">
                        <Link>blog website</Link>
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
                    Pursued a bachelors Degree in Computer Science
                    and have started doing projects since then in hopes of becoming a Software engineer.
                </BioSection>
            </Section>

            <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <Paragraph>
          C++, JavaScript, React, Next.JS
        </Paragraph>
      </Section>
        </Container>
        </Layout>
    )
}

export default Page