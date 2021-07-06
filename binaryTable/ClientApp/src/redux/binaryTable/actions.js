import SetValues from '../../helpers/SetValues';
import axios from 'axios'

export function SetEditRow(editRow){
    return{
        type: "Set:EditRow",
        editRow
    }
}

export function SetRows(totalRows){
    return{
        type: "Set:Rows",
        totalRows
    }
}

export function SetData(data){
    return{
        type: "Set:Data",
        data
    }
}

export function SetError(error){
    return{
        type: "Set:Error",
        error
    }
}
export function GetAnswerThunk(binaryData, data, editIndex){
    return function(dispatch){
        axios({
            method: 'post',
            url: 'home',
            data: JSON.stringify(binaryData),
            headers:{
                'Content-Type': 'application/json;charset=UTF-8'
            }
          })
          .then(response =>{
              let element = response.data
              SetValues(data, element, editIndex, 8);
              dispatch(SetData(data));
          })
          .catch(error=>dispatch(SetError(error)));
    }
}
