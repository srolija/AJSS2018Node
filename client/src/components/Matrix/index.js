import React, { Component } from 'react';
import color from 'color';

class Matrix extends Component {

	render() {
		const { colorMatrix, setColor, isGreyscale } = this.props;

		return (
			<table>
				<tbody>
					{
						colorMatrix.map((_row, _i1) => (
							<tr key={_i1}>
								{
									_row.map((_column, _i2) => (
										<td
											key={_i2}
											onClick={setColor && setColor.bind(this, _i1, _i2)}
											style={{ background: isGreyscale ? color(`#${_column}`).grayscale() : `#${_column}` }} />
									))
								}
							</tr>
						))
					}
				</tbody>
			</table>
		);
	}
}

export default Matrix;