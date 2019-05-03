import { SELECT_LIGHT } from '../actions/types';

export default function(state = { }, action){
  switch(action.type) {
    case SELECT_LIGHT: 
      return action.payload;
    default: 
      return 3;
  }
}