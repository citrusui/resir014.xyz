import { Action } from 'redux'

export interface LayoutState {
  sidebarVisible: boolean
}

export interface ToggleSidebarAction extends Action {
  type: '@@gatsby/TOGGLE_SIDEBAR'
}

export type KnownAction = ToggleSidebarAction