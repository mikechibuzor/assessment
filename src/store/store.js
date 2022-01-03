// initial state
const state = () => ({
  jobs: [],
});

// getters
const getters = {
  getjobs(state) {
    return state.jobs;
  },
};

// actions
const actions = {
  async getAlljobs({ commit }) {
    const jobs = await shop.getjobs();
    commit("setjobs", jobs);
  },
};

// mutations
const mutations = {
  setjobs(state, jobs) {
    state.jobs = jobs;
  },
};
