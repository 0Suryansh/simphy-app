export const loadCanvas=()=>{
    return { type: "LOAD_CANVAS" };
}

export const activeTool=(tool)=>{
    return {
        type: "ACTIVE_ICON",
        payload: tool
    }
}

export const cursorInfo=(data)=>{
    return {
        type:"CURSOR",
        payload: data
    }
}

export const statusInfo=(data)=>{
    return {
        type:"STATUS",
        payload: data
    }
}

export const shapeL=(shape)=>{
    return {
        type: "SHAPE",
        payload: shape
    }
}

export const selectedShape=(shape)=>{
    return {
        type:"SELECTED_SHAPE",
        payload: shape
    }
}

export const deleteShape=(shape)=>{
    return {
        type:"DELETE_SHAPE",
        payload: shape
    }
}

export const deSelectedShape=()=>{
    return {
        type:"DESELECTED_SHAPE"
    }
}