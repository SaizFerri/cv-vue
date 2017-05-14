export default {
  addReposToState (state, data) {
    state.projects = [
      ...data
    ]
  },
  changeLanguage (state, data) {
    if (data.data === 'English') {
      state.selectedLanguage = 'english'
    } else if (data.data === 'Spanish') {
      state.selectedLanguage = 'spanish'
    }
  }
}
