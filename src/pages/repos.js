import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: 'ReposPage',

  render () {
    const me = app.me
    const {repos} = this.props

    return (
      <div>
        <h2>{me.name}&#8217;s repos</h2>
        <h4 className="account-details">
          <a href="{me.blog}">{me.blog}</a>
          <br/>
          {me.location}
        </h4>
        <div className="repos">
          {repos.map((repo) => {
            return (
              <div key={repo.id}>
                <a href={repo.app_url}><span className='octicon octicon-repo'></span> {repo.full_name}</a>
              </div>
            )
          })}
        </div>
      </div>
    )

  }
})
