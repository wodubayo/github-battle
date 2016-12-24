import React from 'react'
import ReactDOM from 'react-dom'
import routes from './config/routes'
import Raven from 'raven-js'

var sentryKey = '4038eb8f514a4cf4b80ff4977e5bfbcb';
var sentryApp = '108496';
var sentryUrl = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp;

var _APP_INFO = {
    name: 'Github Battle',
    branch: 'video4',
    version: '1.0'
}

Raven.config(sentryUrl, {
    release: _APP_INFO.version,
    tags:{
        branch: _APP_INFO.branch,
    }
}).install()


ReactDOM.render(routes, document.getElementById('app'));