import * as actionTypes from '../action/ActionTypes';

const isAddTask = (state = false, action) => {
    if(action.type === actionTypes.TOGGLE_IS_ADD_TASK) return !state;
    return state;
}
export default isAddTask;