let initialState = {
  cartArr: [],
  count: 0
}

export default function cartReducer(state = initialState, action){
  const { type, payload } = action;

  switch (type) {
    case "ADD_ITEM":{
      let count = state.count + 1;
      let cartArr = [...state.cartArr, payload]
      return { count, cartArr };
    }
    case "REMOVE_ITEM":{
      let count = state.count - 1;
      let cartArr = [...state.cartArr, payload]
      return { count, cartArr };
    }
    default:
      return state;
  }  
}

export function addItem(item){
  return{
    type: "ADD_ITEM",
    payload: item
  }
}

export function removeItem(item){
  return{
    type: "REMOVE_ITEM",
    payload: item
  }
}