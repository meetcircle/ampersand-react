import Model from 'ampersand-model'
import githubMixin from '../helpers/github-mixin'

export default Model.extend({
  url () {
    return 'https://api.github.com/repos/' + this.full_name
  },

  props: {
    id: 'number',
    name: 'string',
    full_name: 'string'
  },

  collections: {
    labels: LabelCollection
  },

  derived: {
    app_url: {
      deps: ['full_name'],
      fn () {
        return 'repo/' + this.full_name
      }
    }
  },

  fetch() {
    Model.prototype.fetch.call(this, arguments)
    this.labels.fetch()
  }
})
