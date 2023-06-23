export const SEARCHED='FILTER/SEARCHED'

export const searched=(value)=>{
    return {
        type:SEARCHED,
        payload:value
    }
}
const intialState={
    searched:''
}
export const filterReducer=(state=intialState,action)=>{
    switch(action.type){
        case SEARCHED:
            return {searched:action.payload}
        default:
            return state
    }

}