export default {
  //点击进入下一题
  addItemNum(state, num) {
    state.itemNum += num
  },
  //记录答案
  rememberAnswer(state, id) {
    state.answerid.push(id)
  },
  //记录做题时间
  rememberTime(state) {
    state.timer = setInterval(() => {
      state.allTime++
    }, 1000)
  },
  //初始化信息
  initializeData(state) {
    state.itemNum = 1
    state.allTime = 0
    state.answerid = []
  }
}