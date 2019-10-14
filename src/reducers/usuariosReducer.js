import { TRAER_TODOS, ERROR, CARGANDO } from '../types/usersTypes';

const INITIAL_STATE = {
	usuarios: [],
	cargando: false,
	error: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TRAER_TODOS:
			return { ...state, usuarios: action.payload };

		case CARGANDO:
			return {
				...state,
				cargando: true
			};
		case ERROR:
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
};