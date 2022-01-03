import { createStore } from "vuex";
import job from "./modules/job";

export default createStore({
  modules: {
    job,
  },
});
