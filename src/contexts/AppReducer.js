const AppReducer = (state, action) => {
    switch(action.type){
        case 'RESET_STATE':
            return {
                ...state,
                vehicles: [],
                vehicleById: {},
                error: null,
                loading: true,
                postMsg: null
            }
        case 'GET_VEHICLES':
            return {
                ...state,
                loading: false,
                vehicles: action.payload
            }
        case 'GET_VEHICLE_BY_ID':
            return {
                ...state,
                loading: false,
                vehicleById: action.payload
            }
        case 'VEHICLE_ERROR':
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case 'SEND_CONTACT':
            return{
                ...state,
                loading: false,
                postMsg: action.payload
            }
        default:
            return state;
    }
}

export default AppReducer;