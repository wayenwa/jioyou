import React, {Component} from 'react';



class Days extends Component {

    renderGameTypeBtn(){
        const Days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

        var content = [];

        Days.map((type, index) =>
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

export default Days;
