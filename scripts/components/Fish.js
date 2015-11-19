/*
	Fish
	<Fish />
*/

import React from 'react';
import h from '../helpers';

var Fish = React.createClass({
	onButtonClick: function () {
		var index = this.props.index;
		this.props.addToOrder(index);
	},
	render: function () {
		var details = this.props.details;
		var isAvailable = (details.status === 'available' ? true : false);
		var buttonText = (isAvailable ? 'Add To Order' : 'Sold Out!');
		return (
			<li className="menu-fish">
				<img src={details.image} alt={details.name} />
				<h3 className="fish-name">
					{details.name}
					<span className="price">{h.formatPrice(details.price)}</span>
				</h3>
				<p>{details.desc}</p>
				<button disabled={!isAvailable} onClick={this.onButtonClick}>{buttonText}</button>
			</li>
		)
	},
	propTypes: {
		addToOrder: React.PropTypes.func.isRequired
	}
});

export default Fish;
