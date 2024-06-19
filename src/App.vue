<template>
   <div class="app">
      <h3><span>To-Do-List</span></h3>
      <h2>~Today I need to ~</h2>
      <p class="search">
         <input type="text" placeholder="todo..." @keydown.13="add()" ref="inp">
         <button @click="add()">submit</button>
      </p>
      <ul class="list">
         <li v-for="(item, i) in curData ? curData : arr" :key="item.id" :class="{ activeLi: item.flag }">
            <div class="list-left">
               <input type="checkbox" v-model="item.flag"><span :class="{ activeSpan: item.flag }">{{ item.con }}</span>
            </div>
            <div class="list-right">
               <b @click="curData ? curData.splice(i, 1) : arr.splice(i, 1)">&times;</b>
            </div>
         </li>
      </ul>
      <div class="btm">
         <div><span>{{ continueList.length }}</span>未完成</div>
         <div class="btn">
            <button @click="curData = arr" :class="{ show: curData === arr }">全部</button>
            <button v-show="showFlag" @click="curData = continueList"
               :class="{ show: curData === continueList }">未完成</button>
            <button v-show="showFlag" @click="curData = finishList"
               :class="{ show: curData === finishList }">已完成</button>
            <button v-show="continueList.length + finishList.length > 0" @click="clearListFn(finishList)"
               :class="clearFlag">清空已完成</button>
         </div>
      </div>
   </div>
</template>

<script>

export default {
   name: "App",
   components: {
   },
   data() {
      return {
         arr: [],
         showFlag: false,
         curData: null,
         clearFlag: false
      }
   },
   methods: {
      add() {
         let str = this.$refs.inp.value.trim()
         if (str) this.arr.push({ id: Date.now(), con: str, flag: false })
         this.$refs.inp.value = ''
         this.$refs.inp.focus()
      },
      clearListFn(finishList) {
         this.arr.forEach((v, i) => {
            finishList.forEach(item => {
               if (v.id === item.id) {
                  this.arr.splice(i, 1)
               }
            })
         })
         this.curData = this.continueList;
         this.clearFlag = true
      }
   },
   watch: {
      arr: {
         handler() {
            if (this.arr.every(v => v.flag === true)) {
               this.showFlag = false
            } else {
               this.showFlag = true
            }
         },
         deep: true,
         immediate: true
      }
   },
   computed: {
      finishList() {
         return this.arr.filter(v => v.flag === true)
      },
      continueList() {
         return this.arr.filter(v => v.flag === false)
      },
      clearList() {
         return this.arr.filter(v => !v.flag)
      },
   }
};
</script>

<style>
* {
   padding: 0;
   margin: 0;
   text-decoration: none;
   list-style: none;
   box-sizing: border-box;
}

html {
   width: 100%;
   height: 100%;
}

body {
   width: 100%;
   height: 100%;
   background: -webkit-linear-gradient(left bottom, #F2B2BF, #E3B598);
   position: relative;
}

.app {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 500px;
   min-height: 500px;
   background: #fff;
   border-radius: 10px;
   padding: 50px;
}

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

ul {
   min-height: 200px;
}

ul li {
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
