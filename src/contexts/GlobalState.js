import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
import api from '../utils/api';

const initialState = {
    vehicles: [],
    vehicleById: [],
    error: null,
    loading: true
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    
    //ACTIONS
    async function getVehicles() {
        try {
            const res = await api.get('https://4my1q6hsyo.api.quickmocker.com/product');
            
            dispatch({
                type: 'GET_VEHICLES',
                payload: res.data.results
            })
        } catch (err) {
            dispatch({
                type: 'VEHICLE_ERROR',
                payload: "No se pudo obtener la lista de vehículos debido a problemas con el servidor, por favor reintente en unos minutos"
            })
        }
    }

    async function getVehicleById(id) {
        try {
            dispatch({
                type: 'GET_VEHICLE_BY_ID',
                payload: id
            })
        }
        catch(err){
            dispatch({
                type: 'VEHICLE_ERROR',
                payload: 'No se pudo obtener información del vehículo seleccionado debido a problemas con el servidor, por favor reintente en unos minutos'
            })
            
        }
    }

    return(<GlobalContext.Provider value={{
        vehicles: state.vehicles,
        error: state.error,
        loading: state.loading,
        getVehicles,
        getVehicleById
    }}>
        {children}
    </GlobalContext.Provider>)
}