<template>
    <button>
        <span>{{ props.title }}</span>
    </button>

</template>
<script setup>
const props = defineProps({
    title:{
        type: String,
    }
})
</script>
<style >
button{
    display: inline-flex;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    border: none;
    color: white;
    padding: 16px;
    -webkit-box-align: center;
    align-items: center;
    background: red
}
</style>>
