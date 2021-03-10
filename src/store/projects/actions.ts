import {
  GET_PROJECTS,
  GET_PROJECTS_FAIL,
  GET_PROJECTS_SUCCESS,
  GET_PROJECT_DETAIL,
  GET_PROJECT_DETAIL_FAIL,
  GET_PROJECT_DETAIL_SUCCESS,
} from './actionTypes'

export const getProjects = () => ({
  type: GET_PROJECTS,
})

export const getProjectsSuccess = (projects: any) => ({
  type: GET_PROJECTS_SUCCESS,
  payload: projects,
})

export const getProjectsFail = (error: any) => ({
  type: GET_PROJECTS_FAIL,
  payload: error,
})

export const getProjectDetail = (projectId: any) => ({
  type: GET_PROJECT_DETAIL,
  projectId,
})

export const getProjectDetailSuccess = (projectDetails: any) => ({
  type: GET_PROJECT_DETAIL_SUCCESS,
  payload: projectDetails,
})

export const getProjectDetailFail = (error: any) => ({
  type: GET_PROJECT_DETAIL_FAIL,
  payload: error,
})
