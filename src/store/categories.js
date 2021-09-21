// setup of initial state

export const initialState = {
  categories: [
    { name: 'Makeup', description: 'Cool Makeup description'},
    { name: 'Skin Care', description: 'Great Skin Care description'},
    { name: 'Hair', description: 'Great Hair description'},
    { name: 'Fragrance', description: 'Great Fragrance description'},
    { name: 'Bath & Body', description: 'Great Bath & Body description'}

  ],
  activeCategory: ''
}

import { SET_CATEGORY } from "./actions";

export default (state = initialState, action={}) => {
  let {type, payload} = action;

  switch(type){
    case 'SET_CATEGORY': {
      let activeCategory = payload
      return{
        ...state,
        activeCategory
      }
    }
    default:
      return state;
  }    
}

// export function inactive(){
//   return {
//     type: 'INACTIVE'
//   }
// }

// export function active(category, description){
//   return {
//     type: 'ACTIVE',
//     payload: {
//       category,
//       description
//     }
//   }
// }