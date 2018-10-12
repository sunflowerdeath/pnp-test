const React = require('react')

const { ExampleComponent } = require('@pnp-test/context')

const Component = () =>
	React.createElement('div', null, React.createElement(ExampleComponent))

module.exports = Component
