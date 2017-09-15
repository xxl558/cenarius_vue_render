import toast from './toast.js';
import progressHUD from './progresshud.js';

const modules = {
  toast,
  progressHUD,
};

const components = {
  init() {
    Object.keys(modules).forEach((k) => {
      weex.registerModule(k, modules[k]);
    });
  },
};

components.init();
export default {
  components,
};
