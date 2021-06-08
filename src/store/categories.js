// setup of initial state

let initialState = {
  categories: [
    { categoryName: 'Electronics', description: 'Cool electronics description'},
    { categoryName: 'Food', description: 'Great food description'}
  ],
  activeCategory: ''
}

export default (state = initialState, action) => {
  let {type, payload} = action;

  switch(type){
    case 'INACTIVE':
      return initialState;
    case 'ACTIVE':
      return{...state, activeCategory: payload.category};
    default:
      return state;
  }    
}

export function inactive(){
  return {
    type: 'INACTIVE'
  }
}

export function active(category, description){
  return {
    type: 'ACTIVE',
    payload: {
      category,
      description
    }
  }
}