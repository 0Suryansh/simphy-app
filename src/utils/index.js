import {cursorInfo, statusInfo, shapeL, selectedShape,deSelectedShape} from '../actions/index'
import store from '../store/index' 

export class MyAppListener {
    onShapeAdd(shape) {
        store.dispatch(shapeL(shape))
   }

    onShapeDelete(shape) {
       console.log(shape)
   }

   onShapeSelect(shape){
    store.dispatch(selectedShape(shape))
   }

   onShapeDeSelect(shape){
    store.dispatch(deSelectedShape())
   }

   onCursorUpdate(shape){
          document.getElementById("status").innerHTML="Cursor: ("+shape.x.toFixed(2)+","+shape.y.toFixed(2)+")"
   }

   onUpdate(shape){
   }

   onStatusUpdate(shape){
   }
}