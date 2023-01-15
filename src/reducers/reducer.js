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
            console.log(appL,"canvas")
            return {
                ...state,
                appWindow:appL
            }
        }
        case "SELECTED_SHAPE": {
            state.appWindow.shapesManager.selectedShape=action.payload
            return{
                ...state
            }
        }        
        case "DELETE_SHAPE": {
            if(state.appWindow.shapesManager.selectedShape!==null){
                state.appWindow.shapesManager.selectedShape=null
            }
            const filteredShapes = state.appWindow.shapesManager.shapes.array.filter(obj => obj.id !== action.payload.id);
            state.appWindow.shapesManager.shapes.array=filteredShapes
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
            return{
                ...state,
                statusInfo:action.payload
            }
        }
        case "SHAPE":{
            const tempArr=state.shapeArray
                tempArr.push(action.payload)
            return{
                ...state,
                shapeArray:tempArr
            }
        }
        case "EDIT_PARAM":{
            console.log(action.payload)
            const idx=action.payload.index
            if(idx==="0"){
                state.appWindow.shapesManager.selectedShape.params[idx]=action.payload.data
                state.appWindow.shapesManager.shapes.array[3].params[idx]=action.payload.data
            }
            console.log(state.appWindow.shapesManager,"hmmm")
            return {
                ...state
            }
        }
        case "IMPORT_FILE":{
            state.appWindow.shapesManager.shapes.array.length=0
            state.appWindow.shapesManager.shapes.array.push(action.payload)
            console.log(state.appWindow.shapesManager.shapes.array,"reducer import")
            return{
                ...state

            }
        }
        case "EDIT_PROP":{
            if(action.payload.index===0){
                state.appWindow.shapesManager.selectedShape.showInfo=action.payload.data

            }else if(action.payload.index===1){
                state.appWindow.shapesManager.selectedShape.showEqn=action.payload.data
                
            }else if(action.payload.index===2){
                state.appWindow.shapesManager.selectedShape.touchable=action.payload.data
                
            }else if(action.payload.index===3){
                state.appWindow.shapesManager.selectedShape.visible=action.payload.data
            }
            return{
                ...state
            }
        }

        default: 
            return state
    }
}

export default appReducer