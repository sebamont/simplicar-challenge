import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
import api from '../utils/api';

const initialState = {
    vehicles: [],
    vehicleById: {},
    error: null,
    loading: true,
    postMsg: null,
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    
    //ACTIONS
    // reseting state when navigating to a different url
    function locationChange(){
        dispatch({
            type: 'RESET_STATE',
        })
    }

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

    //had to do it this way because endpoint /product/{id} wasnt working as intended
    async function getVehicleById(id) {
        try {
            const res = await api.get('https://4my1q6hsyo.api.quickmocker.com/product');
            const filteredVeh = res.data.results.find(veh => veh.id === id);
            if(filteredVeh){ 
                dispatch({
                    type: 'GET_VEHICLE_BY_ID',
                    payload: filteredVeh
                })
            }
            else{
                dispatch({
                    type: 'VEHICLE_ERROR',
                    payload: 'No existe vehiculo con el ID definido, por favor utilice los botones de la tienda para asegurar el correcto ID'
                })
            }
        }
        catch(err){
            dispatch({
                type: 'VEHICLE_ERROR',
                payload: 'No se pudo obtener información del vehículo seleccionado debido a problemas con el servidor, por favor reintente en unos minutos'
            })
            
        }
    }

    async function postContactInfo(contactInfo){
        try {
            const res = await api.post('https://4my1q6hsyo.api.quickmocker.com/lead', contactInfo);

            dispatch({
                type: 'SEND_CONTACT',
                payload: res.data.msg,
            })
        } catch (err) {
            dispatch({
                type: 'VEHICLE_ERROR',
                payload: 'No se pudo enviar tu consulta debido a problemas con el Servidor, por favor reintente en unos minutos'
            })
        }
    }


    return(<GlobalContext.Provider value={{
        vehicles: state.vehicles,
        error: state.error,
        loading: state.loading,
        vehicleById: state.vehicleById,
        postMsg: state.postMsg,
        locationChange,
        getVehicles,
        getVehicleById,
        postContactInfo,
    }}>
        {children}
    </GlobalContext.Provider>)
}