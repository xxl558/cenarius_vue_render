const modal = weex.requireModule('modal');

export default {
  show(s) {
    modal.toast({
      message: s,
      duration: 0.3,
    });
  },
};

