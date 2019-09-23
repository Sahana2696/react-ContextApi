import { globalState } from './GlobalState';
import {GET_DATA,SET_DATA} from './Constants';
const reducer = (state = globalState, action) => {
  switch (action.type) {
    case GET_DATA:
    console.log("getdata",action)
      return {
        ...state,
           num:state.num+1
      }
    case SET_DATA :
      return state
  }
}
export { reducer };