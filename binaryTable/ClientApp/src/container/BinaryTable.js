import React from 'react';
import { connect } from 'react-redux';
import { SetData, SetRows, SetEditRow, GetAnswerThunk } from '../redux/binaryTable/actions';
import SetValues from '../helpers/SetValues';
import SetColor from '../helpers/SetColor';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ClearIcon from '@material-ui/icons/Clear';

import BinaryTableComponent from '../components/BinaryTableComponent';


/**
 * HOC for Binary Table.
 * @constructor
 * @param {string[]} header - The titles of the table column.
 * @param {function} SetData - Set data(array of binary digits) in redux store.
 * @param {function}  SetEditRow - Set index of row that user currently editing.
 * @param {function}  SetTotalRows - Set total numbers of rows in our data array.
 * @param {string[] || number[]}  data - represents our data array.
 * @param {number} totalRows - total numbers of rows in our data array.
 * @param {number}  editIndex - index of row that user currently editing.
 * @param {function}  SetAnswer - Thunk for getting answer from server side .
 */

function BinaryTable({header, SetData, SetEditRow, SetTotalRows, data, totalRows, editIndex, SetAnswer}){

    //Delete selected row in our table
    function DeleteRow(data, index){
        SetTotalRows(--totalRows)
        SetData(data.filter((item, i) => i !== index))
      }
    
    //Adds extra row in our table
    function AddRow(){
        SetTotalRows(++totalRows)
        SetData([...data, [0, 0, 0, 0, 0, 0, 0, 0, 0]])
      }

    //Exit from editing row
    function StopEditing(){
        SetEditRow(-1)
      }
      
    // change value in cell of table
    function handleChange(event, data, r, col){

        let element = +event.target.value;
        if(element!== 0 && element!== 1){
          return alert("You should pass correct value (0 or 1)");
        }
        SetValues(data, element, r, col);
        SetData(data); 
    
        let binaryData = '';
        for(let i=0; i < data[editIndex].length-1; i++){
          binaryData+=data[editIndex][i]
        }
        SetAnswer(binaryData, data, editIndex)
      };

    //function that represent row in our table     
    function row(item, index, data, handle){
        return(
        <TableRow  key={`tr-${index}`}>
            {item.map((value, i) => {
                return(
                <TableCell align="center" style={SetColor(item[8])} key={`trc-${i}`}>
                    {(editIndex === index && i !== item.length-1) ?
                    <input
                        onChange={(e) => handle(e, data,  index, i)}
                        defaultValue={value}
                        type="number"
                        maxLength={1}
                        min={0}
                        max={1}/>
                    :
                    value

                    }
                </TableCell>
                )        
            })}

        <TableCell>
            {
                editIndex === -1 ?
                <Button onClick={() => SetEditRow(index)}>
                    <EditIcon />
                </Button>
                :
                editIndex === index ?
                <Button onClick={StopEditing}>
                    <ClearIcon />
                </Button>
                :
                <Button disabled={true}>
                    <EditIcon />
                </Button>
            }

        </TableCell>
            <TableCell>
            <Button onClick={() => DeleteRow(data, index)}>
                <DeleteIcon />
            </Button>
            </TableCell>
        </TableRow>
        )
    }
 

    return(
            <BinaryTableComponent
                header = {header}
                data = {data}
                AddRow = {AddRow}
                row = {row}
                handleChange = {handleChange}          
            />
    )

}

    
function mapStateToProps(state){
    return{
        data: state.binaryTableReducer.data,
        editIndex: state.binaryTableReducer.editRow,
        totalRows: state.binaryTableReducer.totalRows,
    }
  }
  
  function mapDispatchToProps(dispatch){
    return{
        SetData: (data) => dispatch(SetData(data)),
        SetTotalRows: (total) => dispatch(SetRows(total)),
        SetEditRow: (index) => dispatch(SetEditRow(index)),
        SetAnswer: (binaryData, data, editIndex) => dispatch(GetAnswerThunk(binaryData, data, editIndex))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(BinaryTable)