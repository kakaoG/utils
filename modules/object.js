export default {
  /**
   * 把一个key值一样对象的数据赋值到另一个对象
   * ({a:1, b:1, d:1}, {a:2, d:4}) => {a:2, b:1, d:4}
   * @param obj
   * @param originObj
   * @returns {*}
   */
  copyPartData(obj, originObj) {
    Object.keys(obj).forEach((key) => {
      if(originObj[key]) {
        obj[key] = originObj[key];
      }
    });

    return obj;
  }
}