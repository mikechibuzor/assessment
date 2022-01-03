// initial state
const state = () => ({
  jobs: [],
  baseUrl: "https://api.jobboard.tedbree.com/v1",
});

// getters
const getters = {
  getJobs(state) {
    return state.jobs;
  },
};

// actions
const actions = {
  async getAlljobs({ commit, state }) {
    let response = await fetch(`${state.baseUrl}/jobs`);
    let jobs = await response.json();
    commit("setjobs", jobs.data);
  },
};

// mutations
const mutations = {
  setjobs(state, jobs) {
    state.jobs = jobs;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
