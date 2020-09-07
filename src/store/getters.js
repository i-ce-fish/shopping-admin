const getters = {
  token: (state) => state.user.token,
  //  add msgsocket msg size
  msgs: (state) => state.msgSocket.msgs

}
export default getters
