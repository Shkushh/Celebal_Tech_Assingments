var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
function mostFrequent(arr) {
  let freq = {};
  let maxItem = arr[0];
  let maxCount = 0;

  for (let item of arr) {
    freq[item] = (freq[item] || 0) + 1;
    if (freq[item] > maxCount) {
      maxCount = freq[item];
      maxItem = item;
    }
  }

  console.log(`${maxItem} ( ${maxCount} times )`);
}

mostFrequent(arr1);
