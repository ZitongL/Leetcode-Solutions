var findLonely = function(nums) {
    let countMap = new Map();
    let result = [];
    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }
    for (let num of nums) {
        if (!countMap.has(num - 1) && !countMap.has(num + 1) && countMap.get(num) === 1) {
            
            result.push(num);
        }
        
    }
    return result;
};
