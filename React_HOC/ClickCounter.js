import React , {Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component{

render() {

const {count ,incrementCount} = this.props
	return (
		<button onClick={incrementCount}>
			{this.props.name }  Clicked {clount} times
		</button>
	)
	}
}

// passing component and one more prop
export default withCounter(ClickCounter, 5)	