import { MENU_TYPE } from "./menuType";
import { MENU_TYPE_1 } from "./menuType";

const initialState = {
  menushow: false,
  cls: "",
  fmain: "fmain",
  txtshow: null,
};
const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case MENU_TYPE:
      return {
        ...state,
        fmain: "fmain",
        cls: "",
        menushow: true,
        txtshow: true,
      };
    case MENU_TYPE_1:
      return {
        ...state,
        menushow: false,
        cls: "main2",
        fmain: "",
        txtshow: false,
      };
    default:
      return state;
  }
};
export default menuReducer;
