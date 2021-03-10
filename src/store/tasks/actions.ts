import { GET_TASKS, GET_TASKS_FAIL, GET_TASKS_SUCCESS } from './actionTypes'

export const getTasks = () => ({
  type: GET_TASKS,
})

export const getTasksSuccess = (tasks: any) => ({
  type: GET_TASKS_SUCCESS,
  payload: tasks,
})

export const getTasksFail = (error: any) => ({
  type: GET_TASKS_FAIL,
  payload: error,
})
