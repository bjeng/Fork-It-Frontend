import { combineReducers } from 'redux';
import test, * as fromTest from './testReducer.js';
import user, * as fromTest from './testReducer.js';
import userReducer from './UserReducer.js';
import scene, * as fromScene from './SceneReducer.js';

const rootReducer = combineReducers({
    test,
    user: userReducer,
    scene
});


export default rootReducer;
