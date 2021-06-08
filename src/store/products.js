const initialState = {
  listOfItems: [
    { name: 'MacBook', category: 'Electronics', price: 1300},
    { name: 'iPhone', category: 'Electronics', price: 899},
    { name: 'iPad', category: 'Electronics', price: 1099},
    { name: 'Salmon', category: 'Food', price: 15},
    { name: 'Eggs', category: 'Food', price: 5}
  ],
  activeItem: ''
}

export default function itemsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch(type){
    case 'ACTIVE':
      const items = getItems(payload.category);
      return {...state, items: items};
    default:
      return state;
  }
}

export function getItems(category){
  const items = initialState.listOfItems;
  const filteredByCategory = items.filter(item => item.category === category);
  return filteredByCategory;
}