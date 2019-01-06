import React, {Component} from 'react';
import GameType from '../General/Checkbox/GameType';
import DateRange from '../General/DateRange';
import Days from '../General/Checkbox/Days';
import Timing from '../General/Checkbox/Timing';
import Special from '../General/Checkbox/Special';
import Category from '../General/Checkbox/Category';
import Results from '../General/Result/FilterResult';
class Search extends Component {
	render() {
		return (
			<div className="stripe-bg">
				<div style={{height:'50px'}}></div>
				<div className="page-wrapper">
					<div className="filter-box">
						<h5 style={{color:'#242424'}}>Advance Search</h5>
						<div className="filter-box-item">
							<div className="left label">Game Type: </div>
							<div className="left"><GameType /></div>
							<div className="clear"></div>
						</div>
						<div className="filter-box-item">
							<div className="left label">Date Range: </div>
							<div className="left"><DateRange /></div>
							<div className="clear"></div>
						</div>
						<div className="filter-box-item">
							<div className="left label">Preferred Days: </div>
							<div className="left"><Days /></div>
							<div className="clear"></div>
						</div>
						<div className="filter-box-item">
							<div className="left label">Preferred Time: </div>
							<div className="left"><Timing /></div>
							<div className="clear"></div>
						</div>
						<div className="filter-box-item">
							<div className="left label" style={{marginRight:'15px'}}>Location: </div>
							<div className="left was-validated">
								<select className="custom-select browser-default">
									<option value="">Anywhere</option>
									<option value="1">Central</option>
									<option value="2">North</option>
									<option value="3">South</option>
                                </select>
							</div>
							<div className="clear"></div>
						</div>

						<div className="filter-box-item">
							<div className="left label" style={{marginRight:'15px'}}>Players a side: </div>
							<div className="left was-validated">
								<select className="custom-select browser-default">
									<option value="">Choose players a side</option>
									<option value="1">5 players a side</option>
									<option value="2">8 players a side</option>
									<option value="3">11 players a side</option>
                                </select>
							</div>
							<div className="clear"></div>
						</div>

						<div className="filter-box-item">
							<div className="left label">Special: </div>
							<div className="left"><Special /></div>
							<div className="clear"></div>
						</div>

						<div className="filter-box-item">
							<div className="left label">Category: </div>
							<div className="left"><Category /></div>
							<div className="clear"></div>
						</div>
						<button className="btn btn-unique submit-green-btn" type="submit">Search</button>
					</div>

					<div className="result-holder">
						<h5 style={{color:'#242424'}}>Results:</h5>
						<div className="col-sm-12">
							<Results />
						</div>
					</div>
				</div>
			</div>
			
		);
	}
}

export default Search;
