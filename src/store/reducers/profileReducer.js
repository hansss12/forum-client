const defaultValue = {
  profile: {},
  community: [
    {
      id: 1,
      title: "Language Community",
      img: "https://img.freepik.com/premium-vector/translator-translation-language-illustration-say-hello-different-countries-multilingual_2175-4450.jpg?w=1800",
      desc: "We have community for language you can ask or neither interact by post a thread about your language or learn it from others",
      type: "Language",
      color: "5441d7"
    },
    {
      id: 2,
      title: "Social Community",
      img: "https://img.freepik.com/free-vector/connected-world-concept-illustration_114360-3979.jpg?w=1380&t=st=1686112726~exp=1686113326~hmac=e773ef51a166ddd805e87c4c6922781420582ee94a20573e766b0856b7e3ef67",
      desc: "We also have social community you can ask or neither interact by post a thread about your life acivities and habits to others",
      type: "Social",
      color: "19c7d3"
    },
    {
      id: 3,
      title: "Coding Community",
      img: "https://img.freepik.com/premium-vector/programmer-developer-engineer-with-laptop-sitting-office-desk-holding-pen-while-coding-developing-concept-illustration_270158-427.jpg?w=1800",
      desc: "We also have community for programer you can ask or neither interact by post a thread about coding, sharing and solve with others",
      type: "Coding",
      color: "f1be48"
    },
    {
      id: 4,
      title: "Entertainment Community",
      img: "https://img.freepik.com/premium-vector/festival-celebrations_1343-507.jpg?w=1800",
      desc: "We also have community for sharing your entertainment you can interact by post a thread about your life style to others",
      type: "Entertainment",
      color: "ca4747"
    }
  ]
}


export function profileReducer(state = defaultValue, action) {
  switch (action.type) {
    case 'profile/fetchSuccess':
      return { ...state, profile: action.payload }
    default:
      return state
  }
}