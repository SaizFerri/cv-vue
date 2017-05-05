export default {
  addReposToState (state, data) {
    state.projects = [
      ...data
    ]
  },
  changeLanguage (state, data) {
    if (data.data === 'English') {
      state.selectedLanguage = {
        ...state.selectedLanguage,
        english: true,
        spanish: false
      }
    } else if (data.data === 'Spanish') {
      state.selectedLanguage = {
        ...state.selectedLanguage,
        english: false,
        spanish: true
      }
    }
  }
}
