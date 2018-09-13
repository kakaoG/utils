export default {
  /**
   * 一维数组去重与一维对象数组针对对象属性值的去重
   * @param arr 数组 必传
   * @param propertyName 要去重的属性名 可不传
   * @param propertyArr 属性名数组  过滤出需要的数组对象数据 可不传
   * @returns [] 返回新数组
   */
  uniqueArr(arr, propertyName, propertyArr) {
    if(arr.length===0) return arr;
    if(typeof arr[0] !== 'object') {
      return Array.from(new Set(arr));
    }
    let newMapArr = [],  tempMap = {};
    if(propertyArr&&propertyArr.length>0) {
      newMapArr = arr.map((item) => {
        let tempObj = {};
        propertyArr.forEach((pItem) => {
          tempObj[pItem] = item[pItem]||'';
        });
        return tempObj;
      });
    } else {
      newMapArr = arr;
    }
    return newMapArr.filter((item) => {
      if(tempMap[item[propertyName]]) {
        return false;
      } else {
        tempMap[item[propertyName]] = 1;
        return true;
      }
    });
  }
}