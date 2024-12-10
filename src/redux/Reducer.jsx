import {get_data,send_data} from './Action'

const initialState={
    allData:[],
    selectedData: null
}
 const reducer =(state=initialState,action)=>{
    switch (action.type) {
        case 'get_data':
            return {
                ...state, selectedData:action.payload
            }
            case 'send_data':
                return{
                    state, allData:[...state.allData,action.payload]
                }
    
        default:
            return state
    }
}

export default reducer;