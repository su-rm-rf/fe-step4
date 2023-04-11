import { createNamespacedHelpers, useStore } from "vuex"
import { mapGetters } from "vuex"
import useMapper from './useMapper'

export function useGetters(moduleName: any, mapper: any=undefined) {
  let mapperFn = mapGetters
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapGetters
  } else {
    mapper = moduleName
  }

  return useMapper(mapper, mapperFn)
}