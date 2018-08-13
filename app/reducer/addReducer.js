import * as actionTypes from '../action/ActionTypes';
import { AsyncStorage } from "react-native";

const listToDoStored = () =>{
    const value = AsyncStorage.getItem('listToDo');
    if(value!= null) 
        return value;
    else 
        return [];
}
function saveItem(item){
    AsyncStorage.setItem('listTodo', item);
}
const addTaskReducer = (state = listToDoStored, action) => {
    switch(action.type){
        case actionTypes.ADD_TASK:
            newList =  [{
                        id: state.length+1,
                        taskName: action.taskName, 
                        taskDate: action.taskDate, 
                        done: false,
                    }].concat(state);
            saveItem(newList);
            return newList;
        case actionTypes.TOGGLE_ACTIVE:
            return state.map(item =>{
                if(item.id != action.id) return item;
                return {...item, done: !item.done};
            })
        default:
            return state;    
    }     
};

export default addTaskReducer;