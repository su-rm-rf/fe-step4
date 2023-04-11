import { createNamespacedHelpers, useStore } from "vuex"
import { mapState } from "vuex"
import useMapper from './useMapper'

export function useState(moduleName: any, mapper: any=undefined) {
  let mapperFn = mapState
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapState
  } else {
    mapper = moduleName
  }

  return useMapper(mapper, mapperFn)
}