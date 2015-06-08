import Model from 'ampersand-model'
import gitHubMixin from '../helpers/github-mixin'

export default Model.extend(gitHubMixin, {
  idAttribute: 'name',

  props: {
    name: 'string',
    color: 'string'
  },

  session: {
    editing: {
      type: 'boolean',
      default: false
    }
  }
})
