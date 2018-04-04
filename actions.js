const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment (text) {
    return{
        type: ADD_COMMENT,
        text,
        id: uuid.v4
    }
}

function editComment (id,newText) {
    return{
        type:EDIT_COMMENT,
        newText,
        id
    }
}

function removeComment (id) {
    return{
        type:REMOVE_COMMENT,
        id
    }
}

function thumbUp (id) {
    return{
        type:THUMB_UP_COMMENT,
        id
    }
}

function thumbDown (id) {
    return{
        type:THUMB_DOWN_COMMENT,
        id
    }
}