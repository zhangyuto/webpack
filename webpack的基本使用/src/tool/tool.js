// export const getArrSum = arr => {
//      arr.reduce((sum, val) => {
//         sum += val
//     }, 0)
// }
export const getArrSum = arr => arr.reduce((sum, val) => sum += val, 0)