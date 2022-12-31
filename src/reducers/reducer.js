import { framework, geom } from "../components/Canvas/bundle";
import {MyAppListener} from '../utils/index'

const initialState={
    activeIcon:-1,
    appWindow:{},
    cursorInfo:{},
    statusInfo:"",
    shapeArray:[]
}

const appReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "LOAD_CANVAS":{
            const appL = new framework.App("canvas");
            const sm = appL.shapesManager;
            let s1 = new geom.Circle2D();
            sm.addShape(s1); 
            const listener = new MyAppListener();
            appL.setAppEventsListener(listener);
            return {
                ...state,
                appWindow:appL
            }
        }
        case "ACTIVE_ICON":{
            return {
                ...state,
                activeIcon: action.payload
            }
        }
        case "CURSOR":{
            console.log(action.payload,"cursor-x")
            return{
                ...state,
                cursorInfo:action.payload
            }
        }
        case "STATUS":{
            console.log(action.payload)
            return{
                ...state,
                statusInfo:action.payload
            }
        }
        case "SHAPE":{
            const tempArr=initialState.shapeArray
            tempArr.push(action.payload)
            console.log("ll",tempArr)
            return{
                ...state,
                shapeArray:tempArr
            }
        }

        default: 
            return state
    }
}

export default appReducer