/**
 * 资源相关请求模块
 */

import request from '@/utils/request'

interface GetResourcePages {
  name: string;
  url: string;
}
export const getResourcePages = (data: GetResourcePages) => {
  return request({
    method: 'POST',
    url: '/boss/resource/getResourcePages',
    data
  })
}
