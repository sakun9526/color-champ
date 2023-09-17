import { createContext, useCallback, useReducer, useEffect } from "react";
import { ColorsDigits } from "../Components/utils/ColorsDigits";
import { IColorContextState } from "../Models";

const initialState: IColorContextState = {
  containerColor: "",
  selectedColor: "",
  buttonColors: [],
  setSelectedColor: () => {},
  setContainerColor: () => {},
  setButtonColors: () => {},
  setScore:(value: number) => {},
  score: 0,
};
const ColorContext = createContext(initialState);

const ColorContextActions = {
  SET_CONTAINER_COLOR: "setContainerColor",
  SET_SELECTED_COLOR: "setSelectedColor",
  SET_BUTTON_COLORS: "setButtonColors",
  SET_SCORE: 'setScore'
};

const reducer = (state: IColorContextState, action: any) => {
  switch (action.type) {
    case ColorContextActions.SET_CONTAINER_COLOR: {
      return {
        ...state,
        containerColor: action.containerColor,
      };
    }
    case ColorContextActions.SET_SELECTED_COLOR: {
      return {
        ...state,
        selectedColor: action.selectedColor,
      };
    }
    case ColorContextActions.SET_BUTTON_COLORS: {
      return {
        ...state,
        buttonColors: [...action.buttonColors, state.containerColor],
      };
    }
    case ColorContextActions.SET_SCORE: {
      return {
        ...state,
        score: action.score
      }
    }
    default:
      return state;
  }
};

const ColorContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const colorGenerator = useCallback(() => {
    const randomColor = new Array(6)
      .fill("")
      .map(() => {
        return ColorsDigits[Math.floor(Math.random() * ColorsDigits.length)];
      })
      .join("");

    return `#${randomColor}`;
  }, []);

  const setContainerColor = useCallback(() => {
    const randomColor = colorGenerator();
    dispatch({
      type: ColorContextActions.SET_CONTAINER_COLOR,
      containerColor: randomColor,
    });
  }, [dispatch, colorGenerator]);

  const setSelectedColor = useCallback(
    (color: string) => {
      dispatch({
        type: ColorContextActions.SET_SELECTED_COLOR,
        selectedColor: color,
      });
    },
    [dispatch]
  );

  const setButtonColors = useCallback(() => {
    let colorsArray: any = [];
    for (let i = 0; i < 3; i++) {
      const color = colorGenerator();
      colorsArray = [...colorsArray, color];
    }
    dispatch({
      type: ColorContextActions.SET_BUTTON_COLORS,
      buttonColors: [...colorsArray],
    });
  }, [dispatch, colorGenerator]);

  useEffect(() => {
    setContainerColor();
    setButtonColors();
  }, []);

  const setScore = useCallback ((value: number) => {
    console.log('callinhgg')
    dispatch({
      type: ColorContextActions.SET_SCORE,
      score: value
    })
  },[dispatch])

  const value = {
    ...state,
    setButtonColors,
    setSelectedColor,
    setContainerColor,
    setScore
  };

  return (
    <ColorContext.Provider value={value}>
      {props.children}
    </ColorContext.Provider>
  );
};

const ColorContextConsumer = ColorContext.Consumer;

export {
  ColorContext,
  ColorContextProvider,
  ColorContextActions,
  ColorContextConsumer,
};
