/**
 * helper function that indicates color of row.
 * @constructor
 * @param {number} item - The decimal representation of digit.
 */
export default function SetColor(item){
    return item < 50 ? {backgroundColor: 'green'} : item < 100 ? {backgroundColor: 'yellow'} : {backgroundColor: 'red'}
}