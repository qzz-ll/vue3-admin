/*
 * @Descripttion: 
 * @Author: luoli
 * @Date: 2024-08-09 16:12:52
 * @LastEditors: luoli
 * @LastEditTime: 2024-08-09 16:14:01
 */
const MAP = new Map();

export const useMultiFrame = () => {
  function setMap(path: any, Comp: any) {
    MAP.set(path, Comp);
  }

  function getMap(path?: any) {
    if (path) {
      return MAP.get(path);
    }
    return [...MAP.entries()];
  }

  function delMap(path: any) {
    MAP.delete(path);
  }

  return {
    setMap,
    getMap,
    delMap,
    MAP
  };
};
