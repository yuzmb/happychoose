<template>
  <section>
    <header class="top_tips">
      <span class="top_tip" v-if="fatherComponent === 'home'">{{ level }}</span>
      <span class="top_tip top_num" v-if="fatherComponent === 'item'">题目{{ itemNum }}</span>
    </header>
    <div v-if="fatherComponent === 'home'">
      <div class="center_img" ></div>
      <router-link to="item" class="center_start"></router-link>
    </div>
    <div v-if="fatherComponent === 'item'">
      <div class="center_question">
        <div class="center_question_img">
          <div class="center_question_detial">
            <header class="center_question_title"></header>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div>
          <span class="question_next" v-if="question_next"></span>
          <span class="question_submit" v-if="question_submit"></span>
        </div>
      </div>
    </div>
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
<style lang="less">
  .top_tips {
    background: url('../assets/images/WechatIMG2.png') no-repeat;
    background-size: 100% 100%;
    position: absolute;
    width: 3.5rem;
    height: 6rem;
    right: 1.2rem;
    z-index: 1;
    .top_tip {
      position: absolute;
      font-size: 0.65rem;
      color: #FC9B71;
      font-weight: bold;
      top: 4.4rem;
      left: 0.8rem;
    }
    .top_num {
      left: 1rem;
    }
  }
  .center_img {
    background: url('../assets/images/1-2.png') no-repeat;
    background-size: 100% 100%;
    position: absolute;
    width: 13rem;
    height: 11rem;
    top: 5rem;
    left: 1.5rem;
  }
  .center_start {
    background: url('../assets/images/1-4.png') no-repeat;
    background-size: 100% 100%;
    position: absolute;
    width: 4rem;
    height: 2rem;
    top: 17rem;
    left: 50%;
    margin-left: -2rem;
  }
</style>

