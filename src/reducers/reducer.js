import { framework, geom } from "../components/Canvas/bundle";
import {MyAppListener} from '../utils/index'

const initialState={
    activeIcon:-1,
    appWindow:{},
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
        case "SELECTED_SHAPE": {
            console.log(state,"once")
            state.appWindow.shapesManager.selectedShape=action.payload
            console.log(state,"twice")
            return{
                ...state
            }
        }        
        case "DELETE_SHAPE": {
            console.log(state,"once")
            if(state.appWindow.shapesManager.selectedShape!==null){
                state.appWindow.shapesManager.selectedShape=null
            }
            console.log(action.payload.id,"id")
            const filteredShapes = state.appWindow.shapesManager.shapes.array.filter(obj => obj.id !== action.payload.id);
            state.appWindow.shapesManager.shapes.array=filteredShapes
            console.log(state,"twice")
            return{
                ...state
            }
        }

        case "DESELECTED_SHAPE":{
                state.appWindow.shapesManager.selectedShape =null
            return{
                ...state
            }
        }
        case "ACTIVE_ICON":{
            return {
                ...state,
                activeIcon: action.payload
            }
        }
        case "CURSOR":{
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
            const tempArr=state.shapeArray
            console.log(state.appWindow,"apple")
                tempArr.push(action.payload)
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