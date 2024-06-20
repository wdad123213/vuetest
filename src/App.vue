<template>
   <div class="app">
      <Header :arr="arr"></Header>
      <div class="list">
         <Content v-for="item in curData ? curData : arr " :key="item.id" :isflag="item.flag" :text="item.con"
            @del="delList(item.id)" v-model="item.flag" />
      </div>
      <!-- <div class="btm">
         <div><span>{{ endList.length }}</span>未完成</div>
         <div class="btn">
            <button @click="curData = null; allFlag = true" :class="{ show: allFlag }">全部</button>
            <button v-show="showFlag" @click="curList(false); allFlag = false"
               :class="{ show: curData && curData.every(item => !item.flag) }" ref="no">未完成</button>
            <button v-show="showFlag" @click="curList(true); allFlag = false"
               :class="{ show: curData && curData.every(item => item.flag) }" ref="ok">已完成</button>
            <button v-if="endList.length < arr.length" @click="clearListFn()" :class="clearFlag">清空已完成</button>
         </div>
      </div> -->
      <Footer :arr="arr" :curData="curData" :endList="endList" :showFlag="showFlag" :clearFlag="clearFlag" :allFlag="allFlag" @curList="curList" @clearListFn="clearListFn" v-model="allFlag" @ClearcurData="ClearcurData"></Footer>
   </div>
</template>

<script>
import Header from './components/Header.vue';
import Content from './components/Content.vue';
import Footer from './components/Footer.vue';

export default {
   name: "App",
   components: {
      Header,
      Content,
      Footer
   },
   data() {
      return {
         arr: [],
         showFlag: false,
         curData: null,
         clearFlag: false,
         allFlag: true
      }
   },
   methods: {
      clearListFn() {
         this.curData = null;
         this.arr = this.arr.filter(v => !v.flag)
         this.clearFlag = true;
         this.allFlag = true;
      },
      delList(id) {
         if (this.curData) {
            this.curData = this.curData.filter(v => v.id != id)
            if (this.curData.length === 0) {
               this.curData = null
               this.allFlag = true
            }
         }
         this.arr = this.arr.filter(v => v.id != id)

      },
      curList(flag) {
         this.curData = this.arr.filter(item => item.flag === flag)
      },
      ClearcurData(){
         this.curData=null
      }
   },
   watch: {
      arr: {
         handler() {
            if (this.arr.every(v => v.flag === true) || this.arr.every(v => v.flag === false)) {
               this.showFlag = false
            } else {
               this.showFlag = true
            }
            if (this.curData) {
               this.curList(this.$refs.no.className === 'show' ? false : true)
            }
         },
         deep: true,
         immediate: true
      }
   },
   computed: {
      endList() {
         return this.arr.filter(v => !v.flag)
      }
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

/* h3 {
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
} */

.list {
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
