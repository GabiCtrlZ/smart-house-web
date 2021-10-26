import { atom, selector } from 'recoil'
import { agentType } from '../@types'

export const agentsState = atom({
  key: 'agentsState',
  default: [] as agentType[],
})

export const tokenState = atom({
  key: 'tokenState',
  default: '',
})

export const infoValue = selector({
  key: 'infoValue',
  get: ({ get }) => ({
    total: get(agentsState).length,
    active: get(agentsState).filter((agent) => agent.active).length,
    airConditioners: get(agentsState).filter((agent) => agent.type === 'ac').length,
    lights: get(agentsState).filter((agent) => agent.type === 'light').length,
  }),
})