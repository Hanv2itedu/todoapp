import * as ActionTypes from './ActionTypes'

export function toggleIsAddTask(){
    return {type: ActionTypes.TOGGLE_IS_ADD_TASK}
}
export function showAll(){
    return {type: ActionTypes.SHOW_ALL}
}
export function showNew(){
    return {type: ActionTypes.SHOW_NEW}
}
export function showNewActive(){
    return {type: ActionTypes.SHOW_NEW_ACTIVE}
}
export function showDone(){
    return {type: ActionTypes.SHOW_DONE}
}
export function toggleActive(id){
    return {type: ActionTypes.TOGGLE_ACTIVE, id}
}
export function addTask(taskName, taskDate){
    return {type: ActionTypes.ADD_TASK, taskName, taskDate}
}
