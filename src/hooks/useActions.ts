import { createNamespacedHelpers, useStore } from "vuex"
import { mapActions } from "vuex"
import useMapper from './useMapper'

export function useActions(moduleName: any, mapper=undefined) {
  let mapperFn = mapActions
  const mapName = 'mapActions'
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapActions
  } else {
    mapper = moduleName
  }

  return useMapper(mapper, mapperFn, mapName)
}