import { combineReducers } from 'redux';
import LightsReducer from './reducer_lights';
import SelectedLightReducer from './reducer_selected_light';

const rootReducer = combineReducers({ 
  lights: LightsReducer,
  selected_light_id: SelectedLightReducer
});

export default rootReducer;