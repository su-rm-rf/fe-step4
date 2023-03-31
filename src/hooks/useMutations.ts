import { createNamespacedHelpers, useStore } from "vuex"
import { mapMutations } from "vuex"
import useMapper from './useMapper'

export function useMutations(moduleName: any, mapper=undefined) {
  let mapperFn = mapMutations
  const mapName = 'mapMutations'
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapMutations
  } else {
    mapper = moduleName
  }

  return useMapper(mapper, mapperFn, mapName)
}

// export function useMutations(mapper, mapFn?) {
//   let mapperFn = mapMutations
//   let mapperObj = mapper

//   const store = useStore()
//   const storeMutationsFns = mapperFn(mapperObj)
//   const storeMutations = {}
//   Object.keys(storeMutationsFns).forEach(fnKey => {
//     storeMutations[fnKey] = storeMutationsFns[fnKey].bind({ $store: store })
//   })
//   return storeMutations
// }