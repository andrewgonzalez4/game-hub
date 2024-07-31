import { Button, Menu, MenuButton, MenuItem, MenuList, Select } from '@chakra-ui/react'
import React from 'react'
import usePlatforms from '../hooks/usePlatforms'
import { BsChevronBarDown } from 'react-icons/bs';

const SelectPlatform = () => {
    const {data, error} = usePlatforms();
    if(error) return null;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Platforms
            <MenuList>
                {data.map((platform) => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </MenuButton>
    </Menu>
  )
}

export default SelectPlatform