import React, {Component} from 'react';
import Banner from '../General/Banner/Carousel';
import Instruction from '../General/Instruction/Instruction';
import HomeSearch from '../General/HomeSearch/HomeSearch';
import UpcomingGames from '../General/UpcomingGames';
import TeamGames from '../General/TeamGames';
import SocialGames from '../General/SocialGames';
import Testimonials from '../General/Testimonials';

class Home extends Component {
	
	render() {
		return (
			<div className="home-holder">
				<Banner />
				<div className="container" style={{marginBottom: '15px'}}>
					<div className="row">
						<div className="col-md-6">
							<Instruction />
						</div>
						<div className="col-md-6">
							<HomeSearch />
						</div>
					</div>
					
					
				</div>
				<div className="row">
					<UpcomingGames />
					<TeamGames />
					<SocialGames />
				</div>
				<div className="row" style={{backgroundColor: '#535252'}}>
					<Testimonials />
				</div>
			</div>
		);
	}
}

export default Home;
