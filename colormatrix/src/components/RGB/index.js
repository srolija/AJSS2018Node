import React, { Component } from 'react';
import Matrix from '../Matrix';
import Colorpicker from '../Colorpicker';

class RGB extends Component {

	render() {
		const { colorMatrix, colorPicker, setColor, selectColor } = this.props;

		return (
			<div className="container">
				<h1>
					This is RGB
				</h1>
				{/* COLORS */}
				<Matrix colorMatrix={colorMatrix} setColor={setColor} />
				{/* PICKER */}
				<Colorpicker colorPicker={colorPicker} selectColor={selectColor} />
			</div>
		);
	}
}

export default RGB;