import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

const {
  createClass,
  createElement,
  createFactory
} = React

var MyTitleFactory = createFactory(MyTitle)

var MyFirstComponent = createClass({
  render: function () {
    return (
      <div>
        <MyTitle title='props are cool' color='rebeccapurple'/>
        <MyTitle title='props are amazing' color='mediumaquamarine'/>
        <MyTitle title='Lol!' color='tomato'/>
        <MyTitle title='gfdjghfdshgfdhkj' color='peru'/>
      </div>
    )
  }
})

ReactDOM.render(createElement(MyFirstComponent), document.getElementById('app'))
