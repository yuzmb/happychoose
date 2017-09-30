<template>
  <div>
    <div class="your_score">
      <header class="score_header">
        <p class="score_title">{{ score }}分!</p>
        <p class="score_tips">{{ scoreTips }} </p>
      </header>
      <div @click="scoreCover" class="center_button"></div>
    </div>
    <div @click="scoreCover" class="score_cover" v-show="showCover">
      <img class="share_img" src="../../assets/images/5-2.png">
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'score',
    data() {
      return {
        showCover: false,
        score: 0, //分数
        scoreTips: '', //分数提示
        rightAnswer: [2, 7, 12, 15, 17],
        scoreTipsArr: ['你说，是不是把知识都还给小学老师了？', '你说，你的知识是不是体育老师教的？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','你也太聪明啦，我们换脑吧！']
      }
    },
    computed: mapState([
      'answerid' //映射 this.answerid 为 store.state.answerid
    ]),
    methods: {
      //计算分数
      computedScore() {
        //map里面用 => 函数，让this指向vue实例的this  如果用匿名函数，那么this指向undefined 
        this.answerid.map((item, index, array) => {
          if(item === this.rightAnswer[index]) {
            this.score += 20
          }
        })
      },
      //显示tips
      computedTips() {
        switch(this.score) {
          case 0: 
            this.scoreTips = this.scoreTipsArr[0]
            break
          case 20: 
            this.scoreTips = this.scoreTipsArr[1]
            break
          case 40: 
            this.scoreTips = this.scoreTipsArr[2]
            break
          case 60: 
            this.scoreTips = this.scoreTipsArr[3]
            break
          case 80: 
            this.scoreTips = this.scoreTipsArr[4]
            break  
          case 100: 
            this.scoreTips = this.scoreTipsArr[5]
            break 
        }
      },
      scoreCover() {
        this.showCover = !this.showCover
      }
    },
    created() {
      document.body.style.background = 'url(/src/assets/images/4-1.jpg) no-repeat'
      this.computedScore()
      this.computedTips()
    }
  }
</script>

<style lang="less">
  .your_score {
    background: url('../../assets/images/4-2.png') no-repeat;
    background-size: 100% 100%;
    position: relative;
    width: 10rem;
    height: 9rem;
    margin: 2rem auto;
    .score_header {
      position: absolute;
      width: 100%;
      top: 4.5rem;
      font-size: 1.4rem;
      font-weight: 900;
      .score_title {
        font-family: Tahoma,Helvetica,Arial;
        text-align: center;
        color: #a51d31;
      }
      .score_tips {
        font-size: 0.65rem;
        text-align: center;
        position: absolute;
        left: 0.8rem;
        width: 9rem;
        font-weight: 100;
        margin-top: .5rem;
      }
    }
    .center_button {
      background: url('../../assets/images/4-3.png') no-repeat;
      background-size: 100% 100%;
      position: absolute;
      width: 6rem;
      height: 2.5rem;
      top: 11rem;
      left: 50%;
      margin-left: -3rem;
    }
  }
  .score_cover {
    position: fixed;
    opacity: 0.8;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000;
    .share_img {
      width: 12rem;
      height: 11rem;
      position: fixed;
      top: 0.5rem;
      left: 50%;
      margin-left: -6rem;
    }
  }
</style>
