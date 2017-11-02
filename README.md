# react-responsive-redux [![npm version](https://badge.fury.io/js/react-responsive-redux.svg)](https://badge.fury.io/js/react-responsive-redux)

## The Problem
If you use [react-responsive](https://github.com/contra/react-responsive) and [server-side-rendering](https://facebook.github.io/react/docs/react-dom-server.html) you've probably come across this cryptic warning in your browser console before:

> Warning: React attempted to reuse markup in a container but the checksum was invalid. This generally means that you are using server rendering and the markup generated on the server was not what the client was expecting. React injected new markup to compensate which works but you have lost many of the benefits of server rendering. Instead, figure out why the markup being generated is different on the client or server: (client) actid="1">Foo&lt;/h1>&lt;div data-react (server) actid="1">Bar&lt;/h1>&lt;div

This happens when the server and client disagree about the state of the DOM. With [react-responsive](https://github.com/contra/react-responsive) specifically it can be caused by code like this:
```javascript
<MediaQuery maxWidth={991}>
  <div>You are a mobile device</div>
</MediaQuery>
<MediaQuery minWidth={992}>
  <div>You are a desktop</div>
</MediaQuery>
```
On the client side this works just fine, but on the server side it doesn't because there's no DOM to query, so both components render empty on the server. Once `react` takes over on the client side it will re-render these elements correctly based on the provided media queries.

 [react-responsive](https://github.com/contra/react-responsive) offers the [values prop](https://github.com/contra/react-responsive#server-rendering) as a workaround:
```javascript
<MediaQuery maxWidth={991} values={{ width: 1024 }}>
  <div>You are a mobile device</div>
</MediaQuery>  
<MediaQuery minWidth={992} values={{ width: 1024 }}>
  <div>You are a desktop</div>
</MediaQuery>
```

This example will work fine as long as your browser window is `>= 1024px`. If it's not you're back to the warning above.

### A Solution

`react-responsive-redux` combines several pieces together to work around this issue.
1. The `User-Agent` string is sniffed to get a reasonable guess of the client's screen size
2. This value is stored in [redux](http://redux.js.org/) store so it's globally accessible
3. Wrapped versions of [MediaQuery](https://github.com/contra/react-responsive#using-css-media-queries) are provided which get their `width` from the global store.

The end result is that it's possible to do server-side rendering correctly for responsive pages which change for mobile, tablet, or desktop users (it also means that `react` warning probably disappears):
```javascript
<MobileScreen>
  <div>You are a mobile device</div>
</MobileScreen>
<DesktopScreen>
  <div>You are a desktop</div>
</DesktopScreen>
```

## Installation
Install with [npm](https://www.npmjs.com/):
```
npm install react-responsive-redux
```
`react-responsive-redux` has the following `peerDependencies`:
```
"prop-types": "^15.5.10",
"react": "^15.6.1 || ^16.0.0",
"react-redux": "^5.0.6",
"redux": "^3.7.2"
```

## Usage
To use `react-responsive-redux` you need to do the following:
1. Add a redux reducer to your store
2. Add mobile detection and an action dispatch in your request handler
3. Use a wrapped component

### redux setup
Add the `responsive` reducer into your `redux` store:

#### ES5 Example
```javascript
var redux = require('redux')
var responsiveReducer = require('react-responsive-redux').reducer

var reducers = {
  // ... your other reducers here ...
  responsive: responsiveReducer
}
var reducer = redux.combineReducers(reducers)
var store = redux.createStore(reducer)
```

#### ES6 Example
```javascript
import { createStore, combineReducers } from 'redux'
import { reducer as responsiveReducer } from 'react-responsive-redux'

const reducers = {
  // ... your other reducers here ...
  responsive: responsiveReducer
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)
```

### server setup
Add mobile detection and dispatch a redux action during your request handler. This must happen after you've created your `redux` store and before you do your server-side rendering.

(Note: these examples are based on the [redux SSR example](http://redux.js.org/docs/recipes/ServerRendering.html#the-server-side) and are incomplete as-is).
#### ES5 Example
```javascript
var setMobileDetect = require('react-responsive-redux').setMobileDetect
var mobileParser = require('react-responsive-redux').mobileParser
var reducers = require('./reducers')
var renderToString = require('react-dom/server').renderToString

function handleRender(req, res) {
  // Create a new Redux store instance
  var store = createStore(reducers)
  var dispatch = store.dispatch

  // do our mobile detection
  var mobileDetect = mobileParser(req)

  // set mobile detection for our responsive store
  dispatch(setMobileDetect(mobileDetect))

  // Render the component to a string
  var html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  // Grab the initial state from our Redux store
  var preloadedState = store.getState()

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState))
}
```

#### ES6 Example
```javascript
import { setMobileDetect, mobileParser } from 'react-responsive-redux'
import reducers from './reducers'
import { renderToString } from 'react-dom/server'

function handleRender(req, res) {
  // Create a new Redux store instance
  const store = createStore(reducers)
  const { dispatch } = store

  // do our mobile detection
  const mobileDetect = mobileParser(req)

  // set mobile detection for our responsive store
  dispatch(setMobileDetect(mobileDetect))

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  // Grab the initial state from our Redux store
  const preloadedState = store.getState()

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState))
}
```
### React Components

#### responsiveWrapper(props={})
`responsiveWrapper` is a wrapper to generate [redux](http://redux.js.org/)-connected [MediaQuery](https://github.com/contra/react-responsive#using-css-media-queries) components. These components have `width` and `deviceWidth` set in the [values prop](https://github.com/contra/react-responsive#server-rendering) from the connected store. All props are passed through to the underlying `<MediaQuery` instance.

The following convenience components are exported and are all are built using `responsiveWrapper`:

#### &lt;PhoneScreen&gt;
```javascript
export const PhoneScreen =  responsiveWrapper({ maxWidth: 767 })
```
#### &lt;PhoneScreenHidden&gt;
```javascript
export const PhoneScreenHidden =  responsiveWrapper({ minWidth: 768 })
```
#### &lt;TabletScreen&gt;
```javascript
export const TabletScreen =  responsiveWrapper({ query: '(min-width: 768px) and (max-width: 992px)' })
```
#### &lt;TabletScreenHidden&gt;
```javascript
export const TabletScreenHidden = responsiveWrapper({ query: '(max-width: 767px), (min-width: 992px)' })
```
#### &lt;MobileScreen&gt;
```javascript
export const MobileScreen = responsiveWrapper({ maxWidth: 991 })
```
#### &lt;MobileScreenHidden&gt;
```javascript
export const MobileScreenHidden = responsiveWrapper({ minWidth: 992 })
```
#### &lt;DesktopScreen&gt;
```javascript
export const DesktopScreeen = responsiveWrapper({ minWidth: 992 })
```
#### &lt;DesktopScreenHidden&gt;
```javascript
export const DesktopScreenHidden = responsiveWrapper({ maxWidth: 991 })
```
#### ES5 Example
```javascript
var React = require('react')
var MobileScreen = require('react-responsive-redux').MobileScreen
var DesktopScreen = require('react-responsive-redux').DesktopScreen

function Component() {
  return(
    <div>
      <MobileScreen>
        <div>You are a mobile device</div>
      </MobileScreen>
      <DesktopScreen>
        <div>You are a desktop</div>
      </DesktopScreen>
    </div>    
  )
}

```

#### ES6 Example
```javascript
import React from 'react'
import { MobileScreen, DesktopScreen } from 'react-responsive-redux'

const Component = () =>
  <div>
    <MobileScreen>
      <div>You are a mobile device</div>
    </MobileScreen>
    <DesktopScreen>
      <div>You are a desktop</div>
    </DesktopScreen>
  </div>
```

### Breakpoints
The current breakpoints are based on [bootstrap's](https://v4-alpha.getbootstrap.com/layout/overview/#responsive-breakpoints) sizings.

|Device Type| Breakpoint |
|-----------|-----|
| Phone | max-width: 767px |
| Tablet | min-width: 768px, max-width: 991px |
| Mobile | max-width: 991px |
| Desktop | min-width: 992px |
-----------------

### Fake Widths
Device detection is done using [mobile-detect](https://github.com/hgoebl/mobile-detect.js) which allows us to get the following information:

 * `mobile` - is the device mobile (ie, `phone` or `tablet`)
 * `phone` - is the device a phone?
 * `tablet` - is the device a tablet?
 * `desktop` - the opposite of `mobile`

Based on this information and our breakpoints we set a fake screen size in our store:

|Device Type| Fake Width (in px)|
|-----------|-----|
| Phone | 767 |
| Tablet | 991 |
| Mobile | 767 |
| Desktop | 992 |
-----------------

### TODO
 * Add support for custom breakpoints
 * Add support for custom screen sizes
