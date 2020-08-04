import React from 'react';
// import AutoCompleteText.css from '.';??

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
			text: '',
		};

	}

		onTextChange = (e) => {
			const value = e.target.value;
			let suggestion = [];
			if (0 < value.length){
				const regex = new RegExp(`^${value}`, 'i');
				suggestion = this.items.sort().filter(v => regex.test(v))
			}
			this.setState({suggestion, text: value});
			}

		suggesSelected(value){
			this.setState({suggestion: [], text: value});
		}

		renderSuggestion() {
			const { suggestion } = this.state;

			if (suggestion.length === 0){
				return (<div></div>);
			}
			return(
				<ul>
					{suggestion.map((item) => <li onClick={() => this.suggesSelected(item)}>{item}</li>)}
				</ul>

				);
		}
	

	render(){
		const {text} = this.state;

		return(
			<div className="AutoCompleteText">
				<input value={text} onChange={this.onTextChange} type="text" />
				{this.renderSuggestion()}
			</div>
			);
	}
}
