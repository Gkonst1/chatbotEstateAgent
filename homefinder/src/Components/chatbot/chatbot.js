import React, {Fragment, Component} from "react";
import PropTypes from 'prop-types';
import './chatbot.css';
import bot from '../../icons and colors/chatbot.png';
import ChatBot from 'react-simple-chatbot';
import houses from '../houses.js';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      action: '',
      price: '',
      size: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { action, price, size } = steps;

    this.setState({ action, price, size });
  }

  render() {
    const { action, price, size } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Action</td>
              <td>{action.value}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{price.value}</td>
            </tr>
            <tr>
              <td>Size</td>
              <td>{size.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

const steps = [
  {
            id: '1',
            message: 'Do you want to buy or rent?',
            trigger: 'action',
          },
          {
            id: 'action',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Ok then! Give me your budget',
            trigger: 'price',
          },
          {
            id: 'price',
            user: true,
            options: [
              { value: '0-100$', label: '0-100$', trigger: '5' },
              { value: '101-250$', label: '101-250$', trigger: '5' },
              { value: '251-450$', label: '251-450$', trigger: '5' },
              { value: '451$+', label: '451$+', trigger: '5' },
            ],
          },
          {
            id: '5',
            message: 'And what is your preferable size?',
            trigger: 'size',
          },
          {
            id: 'size',
            options: [
              { value: '0-30m2', label: '0-30m2', trigger: '7' },
              { value: '31-80m2', label: '31-80m2', trigger: '7' },
              { value: '81-200m2', label: '81-200m2', trigger: '7' },
              { value: '201m2+', label: '201m2+', trigger: '7' },
            ],
            },
          {
            id: '7',
            message: 'Great! Check out your options',
            trigger: 'review',
          },
          {
            id: 'review',
            component: <Review />,
            asMessage: true,
            trigger: 'update',
          },
          {
            id: 'update',
            message: 'Would you like to update some filters?',
            trigger: 'update-question',
          },
          {
            id: 'update-question',
            options: [
              { value: 'yes', label: 'Yes', trigger: 'update-yes' },
              { value: 'no', label: 'No', trigger: 'end-message' },
            ],
          },
          {
            id: 'update-yes',
            message: 'What field would you like to update?',
            trigger: 'update-fields',
          },
          {
            id: 'update-fields',
            options: [
              { value: 'action', label: 'action', trigger: 'update-action' },
              { value: 'price', label: 'price', trigger: 'update-price' },
              { value: 'size', label: 'size', trigger: 'update-size' },
            ],
          },
          {
            id: 'update-action',
            update: 'action',
            trigger: '7',
          },
          {
            id: 'update-price',
            update: 'price',
            trigger: '7',
          },
          {
            id: 'update-size',
            update: 'size',
            trigger: '7',
          },
          {
            id: 'end-message',
            message: 'Thanks! I hope i was helpful!',
            end: true,
          },
        ];

class Chatbot extends React.Component{
  constructor() {
		super();
		this.state = {
			shown: true,
		};
	}


  toggle() {
		this.setState({
			shown: !this.state.shown
		});
	}



  render(){
    var isShown = {
			display: !this.state.shown ? "block" : "none"
		}
    return (
      <div className="parent">
        <Fragment className="chatbot"><img src={bot} className="bot" onClick={this.toggle.bind(this)}/></Fragment>
        <ChatBot style={isShown} className="chat" steps={steps} />
      </div>

    )
  }
}

export default Chatbot;
