import { combineReducers } from 'redux';
import addTaskReducer from './addReducer';
import isAddTask from './isAddTask'

const reducer = combineReducers({
    listTask: addTaskReducer,
    isAddTask,
});

export default reducer;