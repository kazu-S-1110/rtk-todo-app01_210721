import {
  Checkbox,
  Box,
  Button,
  Text,
  Flex,
  Spacer,
  Stack,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { VFC } from 'react';
import { MdEventNote } from 'react-icons/md';

interface PropTypes {
  task: {
    id: number;
    title: string;
    completed: Boolean;
  };
}

const TaskItem: VFC<PropTypes> = ({ task }) => {
  return (
    <Flex
      alignItems="center"
      direction="row"
      // border="1px"
      h="5vh"
      m="1"
      borderRadius="6"
      bg="#8EC5FC"
    >
      <Box p="3">
        <MdEventNote />
      </Box>
      <Text>{task.title}</Text>
      <Spacer />
      <Stack
        display="flex"
        justifyContent="center"
        spacing="2"
        direction="row"
        mr="3"
      >
        <Checkbox h="40px" w="48px" pl="16px" pr="16px" />
        <Button
          onClick={() => console.log(`edited ${task.id}`)}
          variant="ghost"
        >
          <EditIcon />
        </Button>
        <Button
          onClick={() => console.log(`deleted ${task.id}`)}
          variant="ghost"
        >
          <DeleteIcon />
        </Button>
      </Stack>
    </Flex>
  );
};

export default TaskItem;
