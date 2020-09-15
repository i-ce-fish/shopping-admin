const getters = {
  token: (state) => state.user.token,
  roles: (state) => state.user.roles,
  //  add msgsocket msg size
  msgs: (state) => state.msgSocket.msgs

}
export default getters
