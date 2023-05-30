const defaultValue = {
  threads: {},
  topThread: []
}


export function threadReducer(state = defaultValue, action) {
  switch (action.type) {
    case 'thread/fetchSuccess':
      return { ...state, threads: action.payload }
    case 'thread/fetchTopSuccess':
      return { ...state, topThread: action.payload }
    default:
      return state
  }
}