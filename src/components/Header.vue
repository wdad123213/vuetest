<template>
   <div >
      <h3><span>To-Do-List</span></h3>
      <h2>~Today I need to ~</h2>
      <p class="search">
         <input type="text" placeholder="todo..." @keydown.13="add()" ref="inp">
         <button @click="add()">submit</button>
      </p>
   </div>
</template>

<script>
export default {
   props:['arr'],
   methods: {
      add() {
         let str = this.$refs.inp.value.trim()
         if (str) this.arr.push({ id: Date.now(), con: str, flag: false })
         this.$refs.inp.value = ''
         this.$refs.inp.focus()
      },
   }
}
</script>

<style scoped>
h3 {
   height: 60px;
   overflow: hidden;
   display: flex;
   align-items: center;
   justify-content: center;
}

h3 span {
   background: #C04E25;
   width: 120px;
   height: 57px;
   text-align: center;
   line-height: 57px;
   border-radius: 10px 10px 25% 10px;
   transform: rotate(3deg);
   color: #fff;
   font-size: 14px;
}

h2 {
   text-align: center;
   height: 50px;
   line-height: 50px;
}

.search {
   display: flex;
   margin: 20px 0;
}

.search input {
   flex: 1;
   border: 0;
   outline: 0;
   border-bottom: 2px dashed #C04E25;
   padding: 10px 0;
   font-size: 16px;
}

.search button {
   padding: 0 10px;
   font-size: 16px;
}
</style>