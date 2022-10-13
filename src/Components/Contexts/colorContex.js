import React, { useReducer, useEffect, useCallback } from "react";
import Colors from '../utils/Colors.json';

const ColorContext = React.createContext();

const initialState = {
    actualHexValue:"",
    otherHexValues:[],
    selectedHexValue:"",
    randomizedColor:{}
};

const ColorContextActions = {
    SET_OTHER_HEX_VALUES:"setOtherHexValues",
    SET_SELECTED_HEX_VALUE:"setSelectedHexValue",
    SET_RANDOMIZED_COLOR:"setRandomizedColor"
};

const reducer = (state, action) => {
    console.debug("Action:", action);
    switch (action.type) {
        case ColorContextActions.SET_OTHER_HEX_VALUES: {
            return {
                ...state,
                otherHexValues: action.otherHexValues,
            };
        }
        case ColorContextActions.SET_SELECTED_HEX_VALUE: {
            return {
                ...state,
                selectedHexValue: action.selectedHexValue,
            };
        }
        case ColorContextActions.SET_RANDOMIZED_COLOR: {
            return {
                ...state,
                randomizedColor: action.randomizedColor,
                actualHexValue: action.randomizedColor.color,
            };
        }
           
        default:
            return state;
    }
};

const ColorContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const setRandomizedColorFromColors = useCallback(
        () => {
            const randomColor = Colors[Math.floor(Math.random() * Colors.length)];
            dispatch({ type: ColorContextActions.SET_RANDOMIZED_COLOR, randomizedColor: randomColor });
        },
        [dispatch]
    );

    const setOtherHexValuesToColors = useCallback(
        () => {
            const randomColor = Colors[Math.floor(Math.random() * Colors.length)];
            let selectedColors = [];
            if(!selectedColors.includes(state.actualHexValue) && !selectedColors.includes(randomColor.color)){
                selectedColors=[...selectedColors, randomColor.color];
            }
            dispatch({ type: ColorContextActions.SET_OTHER_HEX_VALUES, otherHexValues: selectedColors });
        },
        [dispatch, state.actualHexValue]
    );

    const setSelectedValue = useCallback(
        (value) => {
            dispatch({type: ColorContextActions.SET_SELECTED_HEX_VALUE, selectedHexValue: value})
        },
        [dispatch]
    )
   
    useEffect(() => {
       
        setRandomizedColorFromColors();
        setOtherHexValuesToColors();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const value = {
        ...state,
        setRandomizedColorFromColors,
        setOtherHexValuesToColors,
        setSelectedValue
    };

    console.debug("Color Context: ", state);
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
    ColorContextConsumer,
    ColorContextActions
};
