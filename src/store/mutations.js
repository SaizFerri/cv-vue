export default {
  addReposToState (state, data) {
    state.projects = [
      ...data
    ]
  }
}
