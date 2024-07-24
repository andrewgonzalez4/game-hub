import { HStack, Image, Text } from '@chakra-ui/react'
import Logo from '../assets/Logo/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} paddingRight={'10px'}>
        <Image src={Logo} boxSize='60px'></Image>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar