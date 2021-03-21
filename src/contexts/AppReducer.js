const AppReducer = (state, action) => {
    switch(action.type){
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
                vehicleById: state.vehicles.filter(vehicle => vehicle.id === action.payload)
            }
        case 'VEHICLE_ERROR':
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default AppReducer;