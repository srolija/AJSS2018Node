import React, { Component } from 'react';

class ColorPicker extends Component {

	render() {
		const { colorPicker, selectColor } = this.props;

		return (
			<table>
				<tbody>
					<tr>
						{
							colorPicker.map((_column, _i) => (
								<td
									key={_i}
									onClick={selectColor && selectColor.bind(this, _column)}
									style={{ background: `#${_column}` }} />
							))
						}
					</tr>
				</tbody>
			</table>
		);
	}
}

export default ColorPicker;