import React, {Component} from 'react';



class Special extends Component {

    renderGameTypeBtn(){
        const Special = ['Budget', 'Special'];

        var content = [];

        Special.map((type, index) =>
            content.push(
                <button className="chkBtn-days">{type}</button>
            )
        )
        return content;
    }
	render(){
		return (
			<div>
				{this.renderGameTypeBtn()}
			</div>
			
		);
	}
}

export default Special;
