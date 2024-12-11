/*
 * @Descripttion: 
 * @Author: luoli
 * @Date: 2024-09-04 21:30:01
 * @LastEditors: luoli
 * @LastEditTime: 2024-10-25 17:38:13
 */
import _ from 'lodash'
/**
 * @Descripttion: 把lodash统一放进公共方法中调用
 */
export const lodash = _

// 判断是否为函数
export function isFunction(val: unknown) {
  return typeof val === 'function'
}
