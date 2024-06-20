<template>
   <div class="app">
      <Header :arr="arr"></Header>
      <div class="list">
         <Content v-for="item in curData ? curData : arr " :key="item.id" :isflag="item.flag" :text="item.con"
            @del="delList(item.id)" v-model="item.flag" />
      </div>
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

.list {
   min-height: 200px;
}
</style>
