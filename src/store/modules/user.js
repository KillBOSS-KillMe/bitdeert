import { getToken, setToken } from "@/utils/auth";

const getDefaultState = () => {
  return {
    token: getToken()
  };
};

const state = getDefaultState();

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  }
};

const actions = {
  // get user info
  getInfo({ commit, state }, token) {
    console.log(token, state.token);
    commit("SET_TOKEN", token);
    setToken(token);
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
