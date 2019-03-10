import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import rootSaga from './sagas'

/*为了运行我们的 Saga，需要
  1、创建一个 Saga middleware 和要运行的 Sagas（目前我们只有一个 helloSaga）
  2、将这个 Saga middleware 连接至 Redux store.*/
import createSagaMiddleware from 'redux-saga'

import Counter from './Counter'
import reducer from './reducers'

const store = createStore(reducer,applyMiddleware(createSagaMiddleware(helloSaga)))
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})

function render() {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() => action('INCREMENT')}
            onDecrement={() => action('DECREMENT')}
            onIncrementAsync={() => action('INCREMENT_ASYNC')} />,
        document.getElementById('root')
    )
}

render()
store.subscribe(render)
