var prod = [
  {
    inStock: false,
    lastUpdated: "2019-02-04T12:20:58.336Z",
    _id: "5c582e88f3fde25d18a1b131",
    brand: "iPhone",
    model: "x10",
    price: 60000
  },
  {
    inStock: true,
    lastUpdated: "2019-02-04T12:20:58.336Z",
    _id: "5c582ea3f3fde25d18a1b132",
    brand: "Samsung",
    model: "S8",
    price: 50000
  },
  {
    inStock: true,
    lastUpdated: "2019-02-04T12:20:58.336Z",
    _id: "5c582eb3f3fde25d18a1b133",
    brand: "Samsung",
    model: "S80",
    price: 5000
  }
];

var initialState = {
  products: []
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETPRODUCTS":
      return { ...state, products: action.payload };
    default:
      return { ...state };
  }
};

export const actions = {
  getProducts: () => dispatch => {
    dispatch({ type: "GETPRODUCTS", payload: prod });
  }
};
