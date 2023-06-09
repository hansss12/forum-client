const defaultValue = {
  threads: {},
  topThread: [],
  detailThread: {},
  comments: []
}


export function threadReducer(state = defaultValue, action) {
  switch (action.type) {
    case 'thread/fetchSuccess':
      return { ...state, threads: action.payload }
    case 'thread/fetchTopSuccess':
      return { ...state, topThread: action.payload }
    case 'thread/fetchdetailSuccess':
      return { ...state, detailThread: action.payload }
    case 'thread/fetchCommentSuccess':
      return { ...state, comments: action.payload }
    default:
      return state
  }
}