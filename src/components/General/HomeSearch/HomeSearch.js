import React from 'react';
import { Container, Row, Col } from 'mdbreact';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './homeSearch.css';

    class FormsPage extends React.Component  {
        constructor (props) {
            super(props)
            this.state = {
              startDate: moment()
            };
            this.handleChange = this.handleChange.bind(this);
          }
         
          handleChange(date) {
            this.setState({
              startDate: date
            });
          }
      render() {
        return(
            <div className="search-holder">
                <Container>
                    <Row className="mt-6">
                    <h5 className="lookForMatch">Look for a match</h5>
                    <Col className="col-sm-12 mt-2">
                        <form className='was-validated' noValidate>
                            <div className="form-group">
                                <label>Players a side</label>
                                <select className="custom-select browser-default">
                                <option value="">Choose players a side</option>
                                <option value="1">5 players a side</option>
                                <option value="2">8 players a side</option>
                                <option value="3">11 players a side</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Location</label>
                                <select className="custom-select browser-default">
                                <option value="">Choose Location</option>
                                <option value="1">Central</option>
                                <option value="2">North</option>
                                <option value="3">South</option>
                                </select>
                            </div>
                            <div className="form-group">
                            <label>Date</label>
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <button className="btn btn-unique submit-green-btn" type="submit">Search</button>
                        </form>
                    </Col>
                    </Row>
                </Container>
            </div>
        );
      }
    };

    export default FormsPage;