import React, {Component} from 'react';



class Special extends Component {

    renderGameTypeBtn(){
        const Cat = ['Veteran', 'Ladies', 'Chill'];

        var content = [];

        Cat.map((type, index) =>
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
