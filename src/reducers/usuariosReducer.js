import { TRAER_TODOS, ERROR, CARGANDO, CANJE } from '../types/usersTypes';

const INITIAL_STATE = {
	usuarios: [],
	cargando: false,
	error: '',
	type: {
		color: null,
		cost: null,
		created_at: null,
		hexa: null,
		id: null,
		points: null,
		price: null,
		rgb: null,
		updated_at: ''
	},
	canjeado: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TRAER_TODOS:
			return { ...state, usuarios: action.payload, cargando: action.cargando, type: action.tipo, };

		case CANJE:
			return { ...state,  cargando: action.cargando, canjeado: action.success };
		case CARGANDO:
			return {
				...state,
				cargando: true
			};
		case ERROR:
			return {
				...state,
				error: action.payload,
				cargando: action.cargando
			};
		default:
			return state;
	}
};
