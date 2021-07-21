import { Center, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <div>
      <Center
        bg="#8EC5FC"
        w="70vw"
        h="70vh"
        bgGradient="linear(to-l, #8EC5FC, #fdfdfd)"
        borderRadius="10"
      >
        <Text
          bgGradient="linear(to-l, #7928CA,#FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Redux Toolkit Todo
        </Text>
      </Center>
    </div>
  );
};

export default Header;
