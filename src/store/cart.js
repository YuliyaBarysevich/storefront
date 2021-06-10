let initialState = {
  cartArr: [],
  count: 0
}
let cart;

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
      let cartArr = [...state.cartArr]

      cart = state.cartArr.map(item => {
        if(item.name === payload.name){
          let itemToRemove = cartArr.indexOf(item);
          cartArr.splice(itemToRemove, 1)
        }
      })


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