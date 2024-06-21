<template>
   <div :class="['row', { activeLi: isflag }]">
      <div class="list-left">
         <input type="checkbox" @click="$emit('input', !value)"><span :class="{ activeSpan: isflag }">{{ text }}</span>
      </div>
      <div class="list-right">
         <b @click="$emit('del')">&times;</b>
      </div>
   </div>
</template>

<script>
export default {
   props:['isflag','text','value'],
   data(){
      return{

      }
   }
}
</script>
<style scoped>
.row {
   display: flex;
   justify-content: space-between;
   font-size: 18px;
   height: 30px;
   align-items: center;
   margin: 10px 0;
}

.activeLi {
   background: #C04E25 !important;
   color: #fff !important;
}

.list-left {
   display: flex;
   align-items: center;
}

.list-left input {
   appearance: none;
   width: 20px;
   height: 20px;
   border: 1px solid #000;
   margin: 0 10px;
}

.list-left input::after {
   content: "√";
   color: white;
   font-size: 20px;
}

.list-left input:checked {
   border: 0;
}

.activeSpan {
   text-decoration: line-through !important;
}

.list-right {
   margin-right: 10px;
   font-size: 20px;
}

.list-right b {
   cursor: pointer;
}
</style>