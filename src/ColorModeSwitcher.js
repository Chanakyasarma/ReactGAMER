import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';


 const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton

      variant="ghost"
      color="purple.500"
      pos={'fixed'}
      top={'4'}
      right={'3'}
      zIndex={"overlay"}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
       
    />
  );
};
export default ColorModeSwitcher
