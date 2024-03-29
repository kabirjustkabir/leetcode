// Write a function to chop an array into chunks of a given length and return each chunk as an array.
// Input:
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 3

// Output:
// [[1,2,3], [4,5,6], [7,8,9], [10]]
const customSliceMethod = (arr,startIndex,endIndex)=>{
    let sliceElements = []
    for(let i=startIndex;i<endIndex;i++){
        if(i < arr.length){
            sliceElements.push(arr[i])
        }else{
            return sliceElements
        }
        
    }
    return sliceElements;
}
const chop = (arr,size)=>{
    let i=0;
    let output = []
    while(i<arr.length){
        console.log("tempArr",arr);
        output.push(customSliceMethod(arr,i,i+size))
        i += size;
    }
    return output
}
let arr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result = chop(arr,9)
console.log(result);
