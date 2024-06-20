<template>
   <div class="btm">
      <div><span>{{ endList.length }}</span>未完成</div>
      <div class="btn">
         <button @click="$emit('ClearcurData'); $emit('input', true)" :class="{ show: allFlag }">全部</button>
         <button v-show="showFlag" @click="$emit('curList',false); $emit('input', false)"
            :class="{ show: curData && curData.every(item => !item.flag) }" ref="no">未完成</button>
         <button v-show="showFlag" @click="$emit('curList',true); $emit('input', false)"
            :class="{ show: curData && curData.every(item => item.flag) }">已完成</button>
         <button v-if="endList.length < arr.length" @click="$emit('clearListFn')" :class="clearFlag">清空已完成</button>
      </div>
   </div>
</template>

<script>
export default {
   props:['arr','curData','endList','value','showFlag','clearFlag','allFlag']
}
</script>

<style scoped>
.btm {
   display: flex;
   justify-content: space-between;
}

.btm>div {
   display: flex;
   align-items: center;
}

.btm b {
   line-height: 37px;
}

.btn {
   display: flex;
}

.btn button {
   padding: 10px;
   border: 0;
   margin: 0 5px;
}

.btn button:hover {
   background: #C04E25;
   color: #fff;
}

.show {
   background: #C04E25 !important;
   color: #fff !important;
}
</style>