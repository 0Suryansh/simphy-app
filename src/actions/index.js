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