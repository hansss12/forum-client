import lang from "../../assets/language.jpg"
import social from "../../assets/social.jpg"
import programer from "../../assets/programer.jpg"
import entertainment from "../../assets/entertainment.jpg"

const defaultValue = {
  profile: {},
  community: [
    {
      id: 1,
      title: "Language Community",
      img: lang,
      desc: "We have community for language you can ask or neither interact by post a thread about your language or learn it from others",
      type: "Language",
      color: "5441d7"
    },
    {
      id: 2,
      title: "Social Community",
      img: social,
      desc: "We also have social community you can ask or neither interact by post a thread about your life acivities and habits to others",
      type: "Social",
      color: "19c7d3"
    },
    {
      id: 3,
      title: "Coding Community",
      img: programer,
      desc: "We also have community for programer you can ask or neither interact by post a thread about coding, sharing and solve with others",
      type: "Coding",
      color: "f1be48"
    },
    {
      id: 4,
      title: "Entertainment Community",
      img: entertainment,
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