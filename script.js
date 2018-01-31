var Counter = React.createClass ({
	getInitialState: function() {
		return {
			counter: 0
		};
	},

	increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

	decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

	render: function() {
		return React.createElement('div', {},
			React.createElement('span',{}, 'Licznik' + this.state.counter),
			React.createElement('button',{onClick: this.increment}, 'Zwiększ licznik'),
			React.createElement('button',{onClick: this.decrement}, 'Zmniejsz licznik')
		);
	}
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app1'));

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app2'));

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app3'));

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app4'));