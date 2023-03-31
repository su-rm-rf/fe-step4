import { computed } from 'vue'
import { useStore } from 'vuex'

export default function(mapper, mapFn, mapName=undefined) {
  const store = useStore()
  const storeFns = mapFn(mapper)
  
  const storeFnsNew = {}
  Object.keys(storeFns).forEach(fnKey => {
    const fn = storeFns[fnKey].bind({ $store: store })
    if (mapName && (mapName === 'mapMutations' || mapName === 'mapActions')) {
      storeFnsNew[fnKey] = computed(() => fn).value
    } else {
      storeFnsNew[fnKey] = computed(fn)
    }
    // storeFnsNew[fnKey] = computed(fn)
    // storeFnsNew[fnKey] = fn
  })
  return storeFnsNew
}