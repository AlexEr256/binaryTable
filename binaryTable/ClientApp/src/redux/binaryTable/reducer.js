
let arr=[];
for(let j=0; j<5; j++){
    arr[j] = [];
    for(let i=0; i<9; i++){
        arr[j][i]=0
    }
}


export default function binaryTableReducer(initialState={
    data:arr,
    totalRows: 5,
    editRow: -1,
    error:''
}, action){
    switch(action.type){
        case 'Set:EditRow':
            return{
                ...initialState,
                editRow:action.editRow
            }
        case 'Set:Rows':
                return{
                    ...initialState,
                    totalRows:action.totalRows
                }
        case 'Set:Data':
                return{
                    ...initialState,
                    data:action.data
                }
        case 'Set:Error':
                    return{
                        ...initialState,
                        error:action.error
                    }
        default:
            return initialState
    }
}