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
  ModalBody,
  Stack,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { VFC } from 'react';
import { MdEventNote } from 'react-icons/md';
import TaskForm from './TaskForm';
import {
  handleModalOpen,
  selectModalOpen,
  mountTask,
  completeTask,
} from './taskSlice';
import { useDispatch, useSelector } from 'react-redux';
import PopOver from '../../components/header/PopOver';

interface PropTypes {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
}

const TaskItem: VFC<PropTypes> = ({ task }) => {
  const isModelOpen = useSelector(selectModalOpen);
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(mountTask(task));
    dispatch(handleModalOpen(true));
  };
  const handleClose = () => {
    dispatch(handleModalOpen(false));
  };
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
          isChecked={task.completed}
          onChange={() => dispatch(completeTask(task))}
        />
        <Button onClick={handleOpen} variant="ghost">
          <EditIcon />
        </Button>

        <PopOver task={task} />
      </Stack>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isModelOpen}
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
