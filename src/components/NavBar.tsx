import { HStack, Image, Text } from '@chakra-ui/react'
import Logo from '../assets/Logo/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props {
    onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: Props) => {
  return (
    <HStack justifyContent={''} paddingRight={'10px'}>
        <Image src={Logo} boxSize='60px'></Image>
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar