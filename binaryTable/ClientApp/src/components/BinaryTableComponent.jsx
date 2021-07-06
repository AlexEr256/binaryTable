
import React from 'react'
import { withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { Container } from 'reactstrap';



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

/**
 * JSX for Binary Table.
 * @constructor
 * @param {string[]} header - The titles of the table column.
 * @param {string[] || number[]}  data - represents our data array.
 * @param {function} row - function that represent row in our table.
 * @param {function}  AddRow - function that adds row in our table.
 * @param {function}  handleChange - function that helps change values in chosen row.
 */

export default function BinaryTableComponent({header, data, AddRow, row,  handleChange}){

  console.log(row)

  return (
      <Container>
        <Button variant="contained" color="primary" onClick={AddRow}>Добавить строку</Button>
        <Table>
          <TableHead>
            <TableRow>
                {header.map((name, index) =>{
                    return(
                        <StyledTableCell key={`thc-${index}`}>
                          {name}
                        </StyledTableCell>
                    )
                })}
            </TableRow>
          </TableHead>

          <TableBody>
            {data && data.map((element, index) =>{
                return(
                  row(element, index, data, handleChange)
                )
            })}
          </TableBody>
        </Table>
      </Container>
  );
}

