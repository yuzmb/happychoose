<template>
  <section>
    <header class="top_tips">
      <span class="top_tip" v-if="fatherComponent === 'home'">{{ level }}</span>
      <span class="top_tip top_num" v-if="fatherComponent === 'item'">题目{{ itemNum }}</span>
    </header>
    <div v-if="fatherComponent === 'home'">
      <div class="center_img" ></div>
      <router-link to="/happychoose/item" class="center_start"></router-link>
    </div>
    <div v-if="fatherComponent === 'item'">
      <div class="center_question">
        <div class="center_question_img">
          <div class="center_question_detial">
            <header class="center_question_title">{{ itemDetail[itemNum - 1].topic_name }}</header>
            <ul>
              <li class="item_list" :key="item.topic_answer_id" v-for="(item, index) in itemDetail[itemNum - 1].topic_answer" @click="choosed(index, item.topic_answer_id)">
                <span class="item_style" :class="{'hasChoose': chooseNum === index}">{{ chooseType(index) }}</span>
                <span class="item_option">{{ item.answer_name }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="center_question_next">
          <span @click="questionNext" class="question_next" v-if="itemNum < itemDetail.length"></span>
          <span @click="questionSubmit" class="question_submit" v-else></span>
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
      'itemNum',// 第几题 映射 this.itemNum 为 store.state.itemNum
      'level', //第几周
      'itemDetail', //题目详情
      'timer' //计时器
    ]),
    methods: {
      //对象展开运算符 安装babel-plugin-transform-object-rest-spread插件
       ...mapActions([
         'addNum', // 将 this.addNum()` 映射为 `this.$store.dispatch('addNum')
         'actionInitializeData'
       ]),
       //选中的答案信息
      choosed(index, id) {
        this.chooseNum = index //选中答案索引
        this.chooseId = id //选中答案ID topic_answer_id
      },
      //索引0-3对应答案A-B
      chooseType: (index) => {
        switch(index) {
          case 0: return 'A'
          case 1: return 'B'
          case 2: return 'C'
          case 3: return 'D'
        }
      },
      //点击下一题
      questionNext() {
        //选了答案，那么索引被存起来 不再为null
        if(typeof this.chooseNum === 'number') {
          this.chooseNum = null
          this.addNum(this.chooseId) //记录答案 并进入下一题
        }else {
          alert('您还没有选择答案哦!')
        }
      },
      //提交答案
      questionSubmit() {
        if(typeof this.chooseNum === 'number') {
          this.addNum(this.chooseId)
          this.$router.push('/happychoose/score')
        }else {
          alert('您还没有选择答案哦!')
        }
      }
    },
    created() {
      //初始化
      this.actionInitializeData()
      document.body.style.background = 'url(/src/assets/images/1-1.jpg) no-repeat'
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
  .center_question .center_question_img {
    background: url('../assets/images/2-1.png') no-repeat;
    background-size: 100% 100%;
    position: absolute;
    width: 13rem;
    height: 11rem;
    top: 5rem;
    left: 1.5rem;
    .center_question_detial {
      position: absolute;
      width: 8rem;
      height: 7rem;
      left: 3rem;
      top: 1.6rem;
      .center_question_title {
        color: #ffffff;
        font-size: 0.65rem;
        -webkit-font-smoothing: antialiased; //让颜色变浅
      }
      .item_list {
        font-size: 0.65rem;
        width: 10rem;
        list-style: none;
        padding-top: 0.2rem;
        color:#ffffff;
        span {
          display: inline-block;
          vertical-align: middle;
        }
        .item_style {
          color: #ffffff;
          font-size: 0.45rem;
          border: 1px solid #ffffff;
          border-radius: 50%;
          width: 0.7rem;
          height: 0.7rem;
          text-align: center;
          margin-right: 0.3rem;
          line-height: 0.7rem;
        }
        .item_option {
          color: #ffffff;
          width: 7rem;
          height: 1rem;
          -webkit-font-smoothing: antialiased;
          font-size: 0.6rem;
          line-height: 1rem;
        }
        .hasChoose {
          background-color: #ffd400;
          color: #000;
          border-color: #ffd400;
          font-weight: bold;
        }
      }
    } 
  }
  .center_question .center_question_next {
    .question_next {
      background: url('../assets/images/2-2.png') no-repeat;
      background-size: 100% 100%;
    }
    .question_submit {
      background: url('../assets/images/3-1.png') no-repeat;
      background-size: 100% 100%;
    }
    span {
      position: absolute;
      width: 4.5rem;
      height: 2rem;
      top: 17rem;
      left: 50%;
      margin-left: -2rem;
    }
  }
</style>

