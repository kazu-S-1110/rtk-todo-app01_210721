import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface taskState {
  idCount: number;
  tasks: {
    id: number;
    title: string;
    completed: boolean;
  }[];
  //どのタスクが選択されているかのstate
  selectedTask: {
    id: number;
    title: string;
    completed: boolean;
  };
  //モーダルのstate
  isModelOpen: boolean;
}

const initialState: taskState = {
  idCount: 1,
  tasks: [
    {
      id: 1,
      title: 'TaskA',
      completed: false,
    },
  ],
  selectedTask: {
    id: 0,
    title: '',
    completed: false,
  },
  isModelOpen: false,
};

// export const incrementAsync = createAsyncThunk();

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    //CreateTask
    createTask: (state, action) => {
      state.idCount++;
      const newTask = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      };
      state.tasks = [newTask, ...state.tasks];
    },
    //state of modal
    handleModalOpen: (state, action) => {
      state.isModelOpen = action.payload;
    },
    //state of select task
    mountTask: (state, action) => {
      state.selectedTask = action.payload;
    },
    //edit task
    editTask: (state, action) => {
      //state.tasksから指定したtaskを抜き出す
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.title = action.payload.title;
      }
    },
    completeTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    //delete task
    deleteTask: (state, action) => {
      //actionで渡すidに一致するもの以外でtasksを作り直している
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  // extraReducers: (builder) => {
  //   builder;
  // },
});

export const {
  createTask,
  handleModalOpen,
  mountTask,
  editTask,
  completeTask,
  deleteTask,
} = taskSlice.actions;

//stateの値をstoreに登録する記述。めっちゃ大事。
export const selectTask = (state: RootState): taskState['tasks'] =>
  state.task.tasks;
export const selectModalOpen = (state: RootState): taskState['isModelOpen'] =>
  state.task.isModelOpen;
export const mountedTask = (state: RootState): taskState['selectedTask'] =>
  state.task.selectedTask;

export default taskSlice.reducer;
