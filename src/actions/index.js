import { 
  FETCH_LIGHTS,
  SELECT_LIGHT 
} from './types';

const lights = [ 
  { id: 1 , color: 'red' },
  { id: 2 , color: 'yellow' },
  { id: 3 , color: 'green' }
];

export function fetchLights() {
  return {
    type: FETCH_LIGHTS,
    payload: lights
  }
}

export function selectLight(id) {
  return {
    type: SELECT_LIGHT,
    payload: id
  }
}