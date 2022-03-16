import axios from "axios";
import { createContext, useContext, useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ACTIONS,
  JSON_API_PRODUCTS,
  JSON_API_PRODUCTS2,
} from "../helpers/consts";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsInCart,
} from "../helpers/functions";

export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  chapter: [],
  products: [],
  productDetails: {},

  cart: JSON.parse(localStorage.getItem("cart")),
  cartLength: getCountProductsInCart,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };
    case ACTIONS.GET_PRODUCT_CHAPTER:
      return { ...state, chapter: action.payload };
    case ACTIONS.GET_CART:
      return { ...state, cart: action.payload };
    case ACTIONS.CHANGE_CART_LENGTH:
      return { ...state, cartLength: action.payload };
  }
};

const ProductContextProvider = ({ children }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  let [share, setShare] = useState({});

  const [background, setBackground] = useState("");

  function handleEdit(index) {
    setShare(state.products[index]);
  }

  const location = useLocation();
  const navigate = useNavigate();

  //! crud 2 ends

  const getChapter = async () => {
    // let { data } = await axios(JSON_API_PRODUCTS);
    let { data } = await axios(
      `${JSON_API_PRODUCTS2}${window.location.search}`
    );
    console.log(data);

    dispatch({
      type: ACTIONS.GET_PRODUCT_CHAPTER,
      payload: data,
    });
  };

  const addChapter = async (newProduct) => {
    await axios.post(JSON_API_PRODUCTS2, newProduct);
    getChapter();
  };

  const saveEditedChapter = async (newProduct) => {
    await axios.patch(`${JSON_API_PRODUCTS2}/${newProduct.id}`, newProduct);

    getChapter();
  };

  const deleteChapter = async (id) => {
    await axios.delete(`${JSON_API_PRODUCTS2}/${id}`);
    getChapter();
  };

  //! crud 2 ends

  // ! ===================== crud start======================

  const getProducts = async () => {
    // let { data } = await axios(JSON_API_PRODUCTS);
    let { data } = await axios(`${JSON_API_PRODUCTS}${window.location.search}`);
    console.log(data);

    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  };

  const addProduct = async (newProduct) => {
    await axios.post(JSON_API_PRODUCTS, newProduct);
    getProducts();
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${JSON_API_PRODUCTS}/${id}`);
    getProducts();
  };

  const getProductDetails = async (id) => {
    let { data } = await axios(`${JSON_API_PRODUCTS}/${id}`);

    dispatch({
      type: ACTIONS.GET_PRODUCT_DETAILS,
      payload: data,
    });
  };

  const saveEditedProduct = async (newProduct) => {
    await axios.patch(`${JSON_API_PRODUCTS}/${newProduct.id}`, newProduct);

    getProducts();
  };

  const addComment = async (newProduct) => {
    await axios.post(`${JSON_API_PRODUCTS}/${newProduct.id}`, newProduct);

    getProducts();
  };

  // ! ===================== crud end========================

  // Filter
  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(location.search);
    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${location.pathname}?${search.toString()}`;
    navigate(url);
  };

  // ////////////////////////////////////! cart start

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

    let productToFind = cart.products.filter(
      (item) => item.item.id === product.id
    );

    if (productToFind.length === 0) {
      cart.products.push(newProduct);
    } else {
      cart.products = cart.filter((item) => item.ite.id !== product.id);
    }

    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  const changeProductCount = (count, id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  function deleteCartProducts(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.filter((elem) => elem.item.id !== id);

    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));

    getCart();

    dispatch({
      type: ACTIONS.CHANGE_CART_LENGTH,
      payload: cart.products.length,
    });
  }

  function checkProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (cart) {
      let newCart = cart.products.filter((elem) => elem.item.id == id);

      return newCart.length > 0 ? true : false;
    } else {
      cart = {
        product: [],
        totalPrice: 0,
      };
    }
  }
  console.log(state.productDetails);

  ////////////////////////////////////! cart end

  const [def, setDef] = useState(false);

  const values = {
    addChapter,
    getChapter,
    deleteChapter,
    saveEditedChapter,

    selectedFiles,
    setSelectedFiles,

    getProducts,
    addProduct,
    deleteProduct,
    getProductDetails,
    saveEditedProduct,

    products: state.products,
    productDetails: state.productDetails,
    chapter: state.chapter,

    fetchByParams,

    setDef,
    def,
    share,
    handleEdit,

    background,
    setBackground,

    addComment,

    getCart,
    addProductToCart,
    changeProductCount,
    deleteCartProducts,
    checkProductInCart,
    cart: state.cart,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
