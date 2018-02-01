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

	getDefaultProps: function() {
		console.log('Ustawienie domyślnych propsów, które nie zostały przekazane do komponentu');
	},

	componentWillMount: function() {
		console.log('Jest wywoływany zaraz przed render, ustawienie stanu nie spowoduje przerenderowania komponentu');
	},

	componentDidMount: function() {
		console.log('Po wykonaniu metody render wykonuje się ta metoda. Komponent jest już w drzewie DOM i można nim manipulować np poprzez jQuery');
	},

	componentWillReceiveProps: function() {
		console.log('Wykonuje się gdy komponent dostaje nową właściwość, nie wykonuje się przy pierwszym renderowaniu');
	},

	shouldComponentUpdate: function() {
		console.log('Sprawdza czy dany komponent trzeba jeszcze raz przerenderować (odświeżyć)');
	},	

	componentWillUpdate: function() {
		console.log('Wykonuje się zaraz po tym jak metoda shouldComponentUpdate zwróci wartość true');
	},

	componentDidUpdate: function() {
		console.log('tak jak w componentDidMount tylko po przerenderowaniu');
	},

	componentDidUpdate: function() {
		console.log('Gdy usuwamy komponent to za pomocą tej metody możemy odpiąć nasłuchiwanie zdarzeń');
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