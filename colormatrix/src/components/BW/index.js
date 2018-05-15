import React, { Component } from 'react';

import Matrix from '../Matrix';

class BW extends Component {

	render() {
		const { colorMatrix } = this.props;

		return (
			<div className="container">
				<h1>
					This is BW
				</h1>
				<Matrix colorMatrix={colorMatrix} isGreyscale={true} />
			</div>
		);
	}
}

export default BW;