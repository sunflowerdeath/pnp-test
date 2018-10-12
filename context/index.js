const React = require('react')

const ExampleContext = React.createContext('Default value')

const ExampleComponent = () => 
	React.createElement(
		ExampleContext.Consumer,
		{ children: value => React.createElement('h3', null, value) }
	)

module.exports = { ExampleContext, ExampleComponent }
