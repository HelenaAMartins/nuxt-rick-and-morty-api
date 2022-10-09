export const state = () => ({
  modalForm: false,
});

export const getters = {
  modalIsOpen(state) {
    return state.modalForm
  }
}

export const mutations = {
  handleModal(state) {
    state.modalForm = !state.modalForm;
  },
};

export const actions = {
  toggleModal({ commit }) {
    commit("handleModal");
  },
};
