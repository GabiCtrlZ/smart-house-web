export type UseWindowSizeFunction = () => { width: number, height: number }

export type WindowSize = {
  width: number,
  height: number,
}

export type agentType = {
  _id: string,
  type: 'ac' | 'light',
  room: string,
  active: boolean,
  switched: string,
}