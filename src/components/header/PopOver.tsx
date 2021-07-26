import React, { VFC } from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Portal,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { deleteTask } from '../../features/task/taskSlice';
import { useDispatch } from 'react-redux';
interface PropTypes {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
}

const PopOver: VFC<PropTypes> = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button variant="ghost">
            <DeleteIcon />
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>Confirm</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Button
                onClick={() => dispatch(deleteTask(task))}
                colorScheme="red"
              >
                DELETE
              </Button>
            </PopoverBody>
            <PopoverFooter>削除すると元に戻せません。</PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
    </>
  );
};

export default PopOver;
