import React from 'react'

const {
  createClass,
  DOM: { div, h1 }
} = React

var MyTitle = createClass({
  render: function () {
    const style = {color: this.props.color}
    return (
       <div>
          <h1 style={ style }>
            {this.props.title}
          </h1>
       </div>
    )
  }
})

export default MyTitle
