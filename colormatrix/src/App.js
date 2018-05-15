import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import NoMatch from './components/NoMatch';
import RGB from './components/RGB';
import BW from './components/BW';

export default class App extends Component {

	state = {
		colorMatrix: [
			['FF0000', '00FF00', '0000FF', 'FF00FF', 'F0F0F0'],
			['FF0000', '00FF00', '0000FF', 'FF00FF', 'F0F0F0'],
			['FF0000', '00FF00', '0000FF', 'FF00FF', 'F0F0F0'],
			['FF0000', '00FF00', '0000FF', 'FF00FF', 'F0F0F0'],
			['FF0000', '00FF00', '0000FF', 'FF00FF', 'F0F0F0']
		],
		colorPicker: ['FF0000', '00FF00', '0000FF', 'FF00FF', 'F0F0F0'],
		activeColor: 'FFFFFF'
	}

	selectColor = (color) => {
		this.setState({ activeColor: color });
	}

	setColor = (row, column) => {
		const { colorMatrix, activeColor } = this.state;

		const newMatrix = colorMatrix.slice();
		newMatrix[row][column] = activeColor;

		this.setState({ colorMatrix: newMatrix })
	}

	render() {
		const { colorMatrix } = this.state;
		return (
			<BrowserRouter>
				<div>
					<Route path="/" component={Navigation} />
					<Switch>
						<Route exact path="/" component={() => <RGB selectColor={this.selectColor} setColor={this.setColor} {...this.state} />} />
						<Route exact path="/rgb" component={() => <RGB selectColor={this.selectColor} setColor={this.setColor} {...this.state} />} />
						<Route exact path="/bw" component={() => <BW colorMatrix={colorMatrix} />} />
						<Route component={NoMatch} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}