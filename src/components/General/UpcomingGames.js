import React, {Component} from 'react';



class UpcomingGames extends Component {

    renderGameTypeBtn(){
        const schedules = [
            {
                'image_url': 'https://s3-ap-southeast-1.amazonaws.com/jioyou-files.com/images/location/kovan.jpg',
                'name' : 'Kovan Sports Centre (5 aside)',
                'date' : '31-10-2018',
                'time' : '8pm - 10pm',
                'current_players': '19/20'
            },
            {
                'image_url': 'https://s3-ap-southeast-1.amazonaws.com/jioyou-files.com/images/location/kovan.jpg',
                'name' : 'Kovan Sports Centre (5 aside)',
                'date' : '31-10-2018',
                'time' : '8pm - 10pm',
                'current_players': '19/20'
            },
            {
                'image_url': 'https://s3-ap-southeast-1.amazonaws.com/jioyou-files.com/images/location/kovan.jpg',
                'name' : 'Kovan Sports Centre (5 aside)',
                'date' : '31-10-2018',
                'time' : '8pm - 10pm',
                'current_players': '19/20'
            },
            
        ];

        var content = [];

        schedules.map((sch, index) =>
            content.push(
                <div className="col-sm-4 left">
                    <img src={sch['image_url']} />
                    <div className="result-item">
                        <span className="name">{sch['name']}</span>
                        <div><span>Date: </span>{sch['date']}</div>
                        <div><span>Time: </span>{sch['time']}</div>
                        <div><span>Current Players: </span>{sch['current_players']}</div>
                    </div>
                </div>
            )
        )
        return content;
    }
	render(){
		return (
			<div class="gray-holder">
                <div className="page-wrapper">
                    <h5 style={{color:'#3c9d00', textAlign:'center', fontWeight:'bold'}}>Upcoming Games</h5>
                    {this.renderGameTypeBtn()}
                    <div className="clear"></div>   
                    <button className="green-button-no-shadow">View All</button>
                </div>
			</div>
			
		);
	}
}

export default UpcomingGames;
