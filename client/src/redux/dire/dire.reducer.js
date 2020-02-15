import sections from './dire.data';

const INITIAL_STATE = {
    sections: sections,    
}

const direReducer = ( state=INITIAL_STATE, action ) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default direReducer;