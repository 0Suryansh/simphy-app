import store from '../store/index'
import {importFile} from '../actions/index'

export function exportAsJson() {
    const state = store.getState().app.appWindow.shapesManager.shapes;

    state.array.forEach(element => {
        delete element.shapesManager 
    });
    console.log((state.array))
    const a = document.createElement("a");
    a.href = URL.createObjectURL(
        new Blob([JSON.stringify(state.array, null, 4)], {
            type: "application/json"
        })
    );
    a.setAttribute("download", `simulation.json`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

export const fileChangeHandler = (e) => {
    console.log("hey")
    const file = e.target.files[0];
    if (file) {
        let fileReader = new FileReader();
        fileReader.addEventListener('load', ev => {
            try {
                let data = JSON.parse(ev.target.result);
                // data.id = generateId();
                // dispatch(createNewFile(data));
                // navigate('./editor');
                console.log("fn",data)
                store.dispatch(importFile(data))
            }
            catch (err) {
                console.log('cant convert file content to json, err:- invalid file format',err);
            }
        });
        fileReader.readAsText(file);
    }
    else {
        alert('accepts only json files');
    }
}
