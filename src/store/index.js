import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
  level: '第一周', //活动周数
  itemNum: 1, //第几题
  allTime: 0, //总共用时
  timer: '', //定时器
  itemDetail: [{
    'topic_name': '题目一',
    'active_topic_id': 1,
    'topic_answer': [{
      'topic_answer_id': 1,
      'answer_name': '答案aaaa'
    }, {
      'topic_answer_id': 2,
      'answer_name': '正确答案'
    }, {
      'topic_answer_id': 3,
      'answer_name': '答案cccc'
    }, {
      'topic_answer_id': 4,
      'answer_name': '答案dddd'
    }]
  }, {
    'active_topic_id': 2,
    'topic_name': '题目二',
    'topic_answer': [{
      'topic_answer_id': 5,
      'answer_name': '随便选吧'
    }, {
      'topic_answer_id': 6,
      'answer_name': '明显错的'
    }, {
      'topic_answer_id': 7,
      'answer_name': '正确答案'
    }, {
      'topic_answer_id': 8,
      'answer_name': '你敢选吗'
    }]
  }, {
    'active_topic_id': 3,
    'topic_name': '题目三',
    'topic_answer': [{
      'topic_answer_id': 9,
      'answer_name': '你猜这是对的吗'
    }, {
      'topic_answer_id': 10,
      'answer_name': '错的吧'
    }, {
      'topic_answer_id': 11,
      'answer_name': '我不知道'
    }, {
      'topic_answer_id': 12,
      'answer_name': '正确答案'
    }]
  }, {
    'active_topic_id': 4,
    'topic_name': '题目四',
    'topic_answer': [{
      'topic_answer_id': 13,
      'answer_name': '大前端'
    }, {
      'topic_answer_id': 14,
      'answer_name': '大后端'
    }, {
      'topic_answer_id': 15,
      'answer_name': '正确答案'
    }, {
      'topic_answer_id': 16,
      'answer_name': '大数据'
    }]
  }, {
    'active_topic_id': 5,
    'topic_name': '题目五',
    'topic_answer': [{
      'topic_answer_id': 17,
      'answer_name': '正确答案'
    }, {
      'topic_answer_id': 18,
      'answer_name': '批评不自由'
    }, {
      'topic_answer_id': 19,
      'answer_name': '赞美无意义'
    }, {
      'topic_answer_id': 20,
      'answer_name': '哈哈哈哈哈哈'
    }]
  }],
  answerid: [] //答案ID
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})