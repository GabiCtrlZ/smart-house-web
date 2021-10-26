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

export const agentsMetrics = selector({
  key: 'agentsMetrics',
  get: ({ get }) => ({
    total: get(agentsState).length,
    active: get(agentsState).filter((agent) => agent.active).length,
    airConditioners: get(agentsState).filter((agent) => agent.type === 'ac'),
    activeAC: get(agentsState).filter((agent) => agent.type === 'ac').filter((agent) => agent.active),
    lights: get(agentsState).filter((agent) => agent.type === 'light'),
    activeLights: get(agentsState).filter((agent) => agent.type === 'light').filter((agent) => agent.active),
  }),
})