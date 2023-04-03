export const globalReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_THEME': {
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    }

    case 'ADD_DATA': {
      return {
        ...state,
        data: action.payload,
      };
    }

    case 'ADD_FAVORITE': {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }

    case 'REMOVE_FAVORITE': {
      return {
        ...state,
        favorites: state.favorites.filter(fav => fav.id !== action.payload),
      };
    }

    default: {
      throw new Error(`La accion de tipo ${action.type} no existe.`);
    }
  }
};
