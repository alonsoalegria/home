import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

&:hover img{
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    transition: 1s ease;
}
`

const Logo = () => {
    const homeImg = `/images/home-50${useColorModeValue('', '-dark')}.png`
    
    return(
        <Link href='/'>
            <a>
                <LogoBox>
                    <Image src={homeImg} width={20} height={20} alt="logo"/>
                    <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily='M PLUS Rounded 1c'
                    fontWeight="bold"
                    ml={3}>
                        Alonso Alegria
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo