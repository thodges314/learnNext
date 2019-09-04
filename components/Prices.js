class Prices extends React.Component {
	state = {
		currency: 'USD'
	}

	render () {
		let description=''
		let code = ''
		let rate = ''

		switch(this.state.currency) {
			case 'USD':
				({description, code, rate} = this.props.bpi.USD)
				break
			case 'GBP':
				({description, code, rate} = this.props.bpi.GBP)
				break
			case 'EUR':
				({description, code, rate} = this.props.bpi.EUR)
				break
			default:
				description = ''
				code = ''
				rate = ''
		}

		return (
			<div>
				<ul className='list-group'>
					<li className='list-group-item'>
						Bitcoin rate for {description}:
						<span class="badge badge-primary">{code}</span>
						<strong>{rate}</strong>
					</li>
				</ul>
				<br />
				<select onChange={e=>{this.setState({currency: e.target.value})}} className='form-control'>
					<option value='USD'>USD</option>
					<option value='GBP'>GBP</option>
					<option value='EUR'>EUR</option>
				</select>
			</div>
		)
	}
}

export default Prices