<script setup>
const router = useRouter()
onMounted(()=>{
router.push('/step-goal')
})
mixins [dataProcessorMixin]
</script>