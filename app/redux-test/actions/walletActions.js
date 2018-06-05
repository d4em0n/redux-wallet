export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';

export function addNewItem(params) {
    return {
        type: ADD_NEW_ITEM,
        payload: params
    }
}

export function deleteItem(params) {
    return {
        type: DELETE_ITEM,
        payload: params
    }
}

export function editItem(params) {
    return {
        type: EDIT_ITEM,
        payload: params
    }
}
