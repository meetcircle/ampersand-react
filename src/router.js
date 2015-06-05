import app from 'ampersand-app'
import React from 'react'
import qs from 'qs'
import xhr from 'xhr'
import uuid from 'node-uuid'
import Router from 'ampersand-router'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'
import Layout from './layout'

export default Router.extend({
  renderPage (page, opts = {layout: true}) {
    if (opts.layout) {
      page = (
        <Layout me={app.me}>
          {page}
        </Layout>
      )
    }

    React.render(page, document.body)
  },

  routes: {
    '': 'public',
    'repos': 'repos',
    'login': 'login',
    'logout': 'logout',
    'auth/callback?:query': 'authCallback'
  },

  public () {
    this.renderPage(<PublicPage/>, {layout: false})
  },

  repos () {
    this.renderPage(<ReposPage repos={app.me.repos} />)
  },

  login () {
    const state = uuid()
    window.localStorage.state = state
    window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
      client_id: '9466ee583be1685bf4e1',
      redirect_uri: window.location.origin + '/auth/callback',
      scope: 'user,repo',
      state: state
    })
  },

  logout () {
    window.localStorage.clear()
    window.location = '/'
  },

  authCallback (query) {
    query = qs.parse(query)
    if (query.state === window.localStorage.state) {
      delete window.localStorage.state
      xhr({
        url: 'https://meetcircle-test-auth.herokuapp.com/authenticate/' + query.code,
        json: true
      }, (err, resp, body) => {
        if (err) {
          console.error('something went wrong')
        } else {
          app.me.token = body.token
          this.redirectTo('/repos')
        }
      })
    }
  }
})
