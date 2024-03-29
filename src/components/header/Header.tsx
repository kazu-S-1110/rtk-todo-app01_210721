import { Box, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <>
      <Box
        bg="aliceblue"
        w="80%"
        h="7vh"
        borderRadius="8px"
        display="flex"
        alignItems="center"
      >
        <Text
          p="3"
          pl="5"
          bgGradient="linear(to-l, #7928CA,#FF0080)"
          bgClip="text"
          fontSize="3xl"
          fontWeight="extrabold"
        >
          Redux Toolkit Todo
        </Text>
      </Box>
    </>
  );
};

export default Header;
