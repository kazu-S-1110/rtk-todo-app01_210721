import {
  Checkbox,
  Box,
  Button,
  Text,
  Flex,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { VFC, useState } from 'react';
import { MdEventNote } from 'react-icons/md';
import TaskForm from './TaskForm';

interface PropTypes {
  task: {
    id: number;
    title: string;
    completed: Boolean;
  };
}

const TaskItem: VFC<PropTypes> = ({ task }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Flex
      alignItems="center"
      direction="row"
      // border="1px"
      h="5vh"
      m="1"
      borderRadius="6"
      bg="#C3E0FD"
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
        <Checkbox
          h="40px"
          w="48px"
          pl="16px"
          pr="16px"
          onClick={() => console.log(`checked ${task.id}`)}
        />
        <Button onClick={handleOpen} variant="ghost">
          <EditIcon />
        </Button>
        <Button
          onClick={() => console.log(`deleted ${task.id}`)}
          variant="ghost"
        >
          <DeleteIcon />
        </Button>
      </Stack>
      <Modal
        closeOnOverlayClick={false}
        isOpen={open}
        onClose={handleClose}
        size="4xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            {/* editのpropsを渡して条件分岐 */}
            <TaskForm edit />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default TaskItem;
