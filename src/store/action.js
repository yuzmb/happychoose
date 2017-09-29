export default {
  addNum({ commit, state }, id) {
    //点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
    commit('rememberAnswer', id)
    if (state.itemNum < state.itemDetail.length) {
      commit('addItemNum', 1)
    }
  },
  //初始化信息
  actionInitializeData({ commit }) {
    commit('initializeData')
  }
}