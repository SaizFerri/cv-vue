import axios from 'axios'

export default {
  fetchRepos (context) {
    return axios.get('https://api.github.com/search/repositories?q=user:SaizFerri+topic:show&sort=updated')
      .then((response) => context.commit('addReposToState', response.data.items))
      .then((err) => console.log(err))
  }
}
