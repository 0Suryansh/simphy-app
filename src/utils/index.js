import {cursorInfo, statusInfo, shapeL} from '../actions/index'
// import {useDispatch} from 'react-redux'
import store from '../store/index' 

export class MyAppListener {
    onShapeAdd(shape) {
       console.log(shape)
        store.dispatch(shapeL(shape))
   }

    onShapeDelete(shape) {
    //    console.log(shape)
   }

   onShapeSelect(shape){
    //    console.log(shape)
   }

   onShapeDeSelect(shape){
    //    console.log(shape)
   }

   onCursorUpdate(shape){
     // const status=document.getElementById("status")
     // console.log(status)
          document.getElementById("status").innerHTML=shape.x+","+shape.y
     //    store.dispatch(cursorInfo(shape))
   }

   onUpdate(shape){
   }

   onStatusUpdate(shape){
    store.dispatch(statusInfo(shape))
   }
}