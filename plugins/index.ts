import { PAGES_HELPER } from "~~/helpers/pagesHelper";
import { useDataCombiner } from "~~/store/dataCombiner"
export default defineNuxtPlugin(() => {
  const store = useDataCombiner()
  const router = useRouter()
  const route = useRoute()
  // @ts-ignore
  const currentPage = computed(() => { return PAGES_HELPER[route.path.replace("/", "")]})
  const getRouteTo = computed(() => {
    // @ts-ignore
    const currentPageIndex = PAGES_HELPER[route.path.replace("/", "")];
    // @ts-ignore
    if('order' in currentPageIndex){
      return Object.keys(PAGES_HELPER)[currentPageIndex.order]
      ? `/${Object.keys(PAGES_HELPER)[currentPageIndex.order]}`
      : null;
    }
    return null
  });

  return {
    provide: {
      processData(data: any) {
        store.addData({[currentPage.value.key]: data.title ? data.title : data})
        console.log('etRouteTo.value', getRouteTo.value);
        if(!getRouteTo.value) {
         return router.push('/result')
          // store.combineDataInPrompt()
        }
        router.push(getRouteTo.value)
      }
    }
  }
})