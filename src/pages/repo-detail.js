import React from 'react'

export default React.createClass({
  displayName: 'RepoDetailPage',

  render () {
    const {repo} = this.props

    return (
      <div className='container'>
        <h3>{repo.full_name} Labels</h3>
        <p></p>
        <ul></ul>
      </div>
    )
  }
})
