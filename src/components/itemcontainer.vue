<template>
  <section>
    <header class="top_tips">
      <span class="top-tip" v-if="fatherComponent == 'home'">{{ level }}</span>
      <span class="top-tip" v-if="fatherComponent == 'item'">题目{{ itemNum }}</span>
    </header>
  </section>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'itemcontainer',
    data() {
      return {
        itemId: null, //题目ID
        chooseNum: null, //选中答案索引
        chooseId: null //选中答案ID
      }
    },
    props: ['fatherComponent'],
    computed: mapState([
      'itemNum',// 映射 this.itemNum 为 store.state.itemNum
      'level',
      'itemDetail',
      'timer'
    ]),
    created() {
      //console.log(this.fatherComponent)
    }
  }
</script>
<style>
  
</style>

