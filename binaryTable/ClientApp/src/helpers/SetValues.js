/**
 * helper function that set value in cell(with given row and column) with given value .
 * @constructor
 * @param {string[] || number[]}  data - represents our data array.
 * @param {string || number} element - value that needs to be set in our table.
 * @param {number} r - row of table .
 * @param {number} col - column of table .
 */

export default function SetValues(data, element, r, col){
    for(let i=0; i<data.length; i++){
        let rowLength =  data[i].length;

        for(let j=0; j < rowLength; j++){
          if(i===r && col === j){
              data[i][j] = element
           }
        }
      }
}