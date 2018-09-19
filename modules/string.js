export default {

  /**
   *('userName', '-') => user-name
   *('userName', '_') => user_name
   *
   * @param str
   * @param type // underline: 下划线, dash: 中划线
   * @returns {*}
   */
  formatToLineStr(str, type) {
    const reg = /[A-Z]/;
    switch (type) {
      case 'underline':
        str = str.replace(reg, (word) => `_${word.toLowerCase()}`);
        break;
      case 'dash':
        str = str.replace(reg, (word) => `-${word.toLowerCase()}`);
        break;
    }

    return str;
  },
}