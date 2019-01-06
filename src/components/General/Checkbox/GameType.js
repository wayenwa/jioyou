import React, {Component} from 'react';



class GameType extends Component {

    renderGameTypeBtn(){
        const GameType = ['Social', 'Team'];

        var content = [];

        GameType.map((type, index) =>
            content.push(
                <button className="chkBtn">{type}</button>
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

export default GameType;
