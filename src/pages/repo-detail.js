import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: 'RepoDetailPage',

  render () {
    const {repo, labels} = this.props

    return (
      <div className='container'>
        <h3>{repo.full_name} Labels</h3>
        <p></p>
        <ul>
          {labels.map((label) => {
            return <li key={label.name}>{label.name}</li>
          })}
        </ul>
      </div>
    )
  }
})
