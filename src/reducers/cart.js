/**
 * Tiene la lógica principal del estado del carrito:
 * - Estado inicial
 * - Tipos de acción permitidos
 * - Reducer para manejar actualizaciones
 * - Función para mantener sincronizado localStorage
 */

// Estado inicial del carrito
// Se intenta recuperar desde localStorage; si no existe, se inicializa vacío
export const cartInitialState = JSON.parse(window.localStorage.getItem("cart")) || [];

/**
 * Enum de acciones válidas que pueden aplicarse sobre el carrito.
 */
export const CART_ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

/**
 * Guarda el estado actual del carrito en localStorage.
 * Se llama cada vez que se modifica el carrito.
 * @param {Array} state - Estado actual del carrito
 */

export const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

/**
 * Mapa de funciones que actualizan el estado según el tipo de acción.
 * Cada función devuelve un nuevo estado del carrito.
 */
const UPDATE_STATE_BY_ACTION = {
  /**
   * - Si el producto ya está en el carrito, aumenta su cantidad.
   * - Si no está, lo agrega con 1.
   */
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const { id } = action.payload;
    const productInCartIndex = state.findIndex((item) => item.id === id);

    if (productInCartIndex >= 0) {
      const newState = [
        ...state.slice(0, productInCartIndex),
        { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
        ...state.slice(productInCartIndex + 1),
      ];

      updateLocalStorage(newState);
      return newState;
    }

    const newState = [
      ...state,
      {
        ...action.payload,
        quantity: 1,
      },
    ];

    updateLocalStorage(newState);
    return newState;
  },
  /**
   * - Elimina completamente el producto del carrito según su ID.
   */
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { id } = action.payload;
    const newState = state.filter((item) => item.id !== id);
    updateLocalStorage(newState);
    return newState;
  },
  /**
   * - Vacía completamente el carrito.
   */
  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    updateLocalStorage([]);
    return [];
  },
};

/**
 * Recibe el estado actual, una acción, y retorna un nuevo estado
 * según el tipo de acción especificado. Si la acción no es reconocida, devuelve
 * el estado actual sin cambios.
 * @param {Array} state - Estado actual del carrito
 * @param {Object} action - Acción con tipo y payload
 * @returns {Array} Nuevo estado del carrito
 */
export const cartReducer = (state, action) => {
  const { type: actionType } = action;
  const updateState = UPDATE_STATE_BY_ACTION[actionType];
  return updateState ? updateState(state, action) : state;
};
