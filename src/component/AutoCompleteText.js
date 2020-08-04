import React from 'react';

export default class AutoCompleteText extends React.Component {
	
	
	constructor(props){
		super(props);
		this.items = [
			'David',
			'Damian',
			'Sara',
			'Salim',
			'Jane',
			'Janet',
		];
		this.state = {
			suggestion: [],
		};

	}

		onTextChange = (e) => {
			const value = e.target.value;
			let suggestion = [];
			if (0 < value.length){
				const regex = new RegExp(`^${value}`, 'i');
				suggestion = this.items.sort().filter(v => regex.test(v))
			}
			this.setState({suggestion});
			}

		renderSuggestion() {
			const { suggestion } = this.state;

			if (suggestion.length === 0){
				return (<div></div>);
			}
			return(
				<ul>
					{suggestion.map((item) => <li>{item}</li>)}
				</ul>

				);
		}
	

	render(){
		return(
			<div>
				<input onChange={this.onTextChange} type="text" />
				{this.renderSuggestion()}
			</div>
			);
	}
}
