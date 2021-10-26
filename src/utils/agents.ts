// dummy state
type agentType = {
  id: string,
  type: 'ac' | 'light',
  room: string,
  on: boolean,
  switched: string,
}

const agents: agentType[] = [
  {
    id: '1',
    type: 'ac',
    room: 'Bedroom',
    on: true,
    switched: '2021-10-24T07:14:00.000Z',
  },
  {
    id: '2',
    type: 'light',
    room: 'Living Room',
    on: true,
    switched: '2021-10-24T07:17:00.000Z',
  },
  {
    id: '3',
    type: 'ac',
    room: 'Kitchen',
    on: true,
    switched: '2021-10-24T08:29:00.000Z',
  },
  {
    id: '4',
    type: 'light',
    room: 'Kitchen',
    on: false,
    switched: '2021-10-23T06:34:00.000Z',
  },
  {
    id: '5',
    type: 'light',
    room: 'Bedroom',
    on: false,
    switched: '2021-10-23T06:34:00.000Z',
  },
]

export default agents
