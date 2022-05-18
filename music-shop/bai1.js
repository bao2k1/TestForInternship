/*eslint-disable*/
//data test
arr1 = [3, 4, 5, 3, 2, 3, 10, 11];
arr2 = [14, 12, 38, 17, 10, 36, 12, 29, 45, 34, 48, 22];
arr3 = [10, 11, 2, 30, 22, 6, 8, 9, 11, 12, 22];

arr4 = [3, 7, 3, 7, 3];
arr5 = [null, 'hello', true, null];
arr6 = [false, 'up', 'down', 'left', 'right', true, false];

//function
function findMax5(params) {
  params.sort(function(a, b) {
    return b - a;
  });
  console.log(params.slice(0, 5));
}

findMax5(arr1);
findMax5(arr2);
findMax5(arr3);


const findFrequent = arr => {
  let maxFreqEle,
    maxFreq = 0;

  let set = new Set(arr);

  set.forEach(value => {
    let eleArr = arr.filter(ele => ele === value);
    //eleArr la array chua cac phan tu giong nhau trong vong lap hien tai
    if (eleArr.length > maxFreq) {
      maxFreq = eleArr.length;
      maxFreqEle = value;
    }
  });

  console.log(maxFreqEle);
};
findFrequent(arr4);
findFrequent(arr5);
findFrequent(arr6);



