// const initialState = {
//   listOfItems: [
//     { name: 'MacBook', category: 'Electronics', price: 1300},
//     { name: 'iPhone', category: 'Electronics', price: 899},
//     { name: 'iPad', category: 'Electronics', price: 1099},
//     { name: 'Salmon', category: 'Food', price: 15},
//     { name: 'Eggs', category: 'Food', price: 5}
//   ],
//   activeItem: ''
// }

import superagent from 'superagent'

const initialState = {
  listOfItems: [],
  count: 0,
  activeItem: ''
}

let api = 'https://api-js401.herokuapp.com/api/v1/products'



export default function itemsReducer(state = initialState, action){
  const {type, payload} = action;
  switch(type){
    case 'GET':
      return {
        listOfItems: payload.results,
        count: payload.count
      }
      case 'ACTIVE':
        const items = getItems(payload.category);
        return {...state, items: items};
    default:
      return state
  }
}

export const getRemoteData = () => dispatch => {
  return superagent.get(api)
    .then(response => {
      dispatch(getAction(response.body))
    })
}

export function getItems(category){
  const items = initialState.listOfItems;
  const filteredByCategory = items.filter(item => item.category === category);
  return filteredByCategory;
}

export const getAction = data => {
  return{
    type: 'GET',
    payload: data
  }
}



// export default function itemsReducer(state = initialState, action) {
//   const { type, payload } = action;

//   switch(type){
//     case 'ACTIVE':
//       const items = getItems(payload.category);
//       return {...state, items: items};
//     default:
//       return state;
//   }
// }

// export function getItems(category){
//   const items = initialState.listOfItems;
//   const filteredByCategory = items.filter(item => item.category === category);
//   return filteredByCategory;
// }