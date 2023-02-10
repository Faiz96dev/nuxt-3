<template>
    <label class="flex flex-col w-[300px]">
        <span>{{ props.label }}</span>
        <input :placeholder="props.placeholder" v-model="inputVal" @input="(()=>{$emit('handleChange', inputVal)})" :min="props.min" :max="props.max" :type="props.type"/>
    </label>
        
</template>
<script setup>

const inputVal = ref()
function handleChange (){
    console.log('handleChange', inputVal.value);
    emit('handleChange', inputVal.value )
  
}
const props = defineProps({
    type:{
        type: String,
        default: 'text'
    },
    placeholder:{
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    },
    min:{
        type: [Number, String],
        default: null
    },
    max:{
        type: [Number, String],
        default: null
    }
})
</script>
<style>
input{
    background-color: #1e1e1e;
    border: 1px solid #757575;
    color: white;
    font-size: 18px;
    line-height: 1.5;
    padding: 0px 11px;
    height: 56px;
    outline: none;
    border-radius: 0px;
}
label{
    color: white;
    display: flex;
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 3px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>