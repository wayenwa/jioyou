import React, {Component} from 'react';



class Timing extends Component {

    renderGameTypeBtn(){
        const Timing = ['Morning', 'Afternoon', 'Night'];

        var content = [];

        Timing.map((type, index) =>
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

export default Timing;
