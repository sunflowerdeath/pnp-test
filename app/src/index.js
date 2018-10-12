const React = require('react')
const ReactDOM = require('react-dom')

const { ExampleContext } = require('@pnp-test/context')
const Component = require('@pnp-test/component')

const App = () =>
	React.createElement(
		'div',
		null,
		React.createElement(
			ExampleContext.Provider,
			{ value: 'App context value' },
			React.createElement(Component)
		)
	)

ReactDOM.render(React.createElement(App), document.querySelector('#root'))
