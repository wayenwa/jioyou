import React, {Component} from 'react';
import './instruction.css';
class Instruction extends Component {
	
	render() {
		return (
			<div>
                <h3 className="howThingsWork">How things Work?</h3>
                <div className="number-holder">
                    <span className="circle">1</span>
                    <p style={{marginLeft: '40px'}}>Choose a game that suites your preference.</p>
                </div>
                <div className="number-holder">
                    <span className="circle">2</span>
                    <p style={{marginLeft: '40px'}}>Book and pay for your slots. Once done, you are registered for the game.</p>
                </div>
                <div className="number-holder">
                    <span className="circle">3</span>
                    <p style={{marginLeft: '40px'}}>Turn up for the game and look for the host. Be friendly & play safe.</p>
                </div>
			</div>
		);
	}
}

export default Instruction;
