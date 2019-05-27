import React from "react";
import PropTypes from 'prop-types';
import './chatbot.css';
import bot from '../../icons and colors/chatbot.png';
import ChatBot from 'react-simple-chatbot';
import { Link } from 'react-router-dom';
import Chatboticon from './chatboticon';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: sessionStorage.getItem('status'),
			price: sessionStorage.getItem('price'),
      size: sessionStorage.getItem('size'),
      location: sessionStorage.getItem('location'),
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { action, price, size, location } = steps;

    if (willUpdateA){
      action.value= updatedA;
    }else{
      action.value= intent;
    }
    if (willUpdateP){
      price.value= updatedP;
    }else{
			price.value= defaultP;
    }
    if (willUpdateS){
      size.value= updatedS;
    }else{
			size.value= defaultS;
    }

    this.setState({ action, price, size, location });

    window.sessionStorage.setItem('status', action.value);
		window.sessionStorage.setItem('price', price.value);
		window.sessionStorage.setItem('size', size.value);
		window.sessionStorage.setItem('location', location.value);
  }

	handleSubmit = ()=> {
    if (window.location!="http://localhost:3000/results"){
      console.log(window.location);
    }
    else{
      window.location.reload();
     console.log(sessionStorage.getItem('location'));
    }
	}
  render() {
    const { action, price, size, location } = this.state;
    return <Link to='/results'><p className="results" onClick={this.handleSubmit}>Your Results</p></Link>;
	};
}

Review.propTypes = {
  steps: PropTypes.object,
};
Review.defaultProps = {
  steps: "",
};

const string_to_array = function (str) {
  return str.trim().split(" ");
  };


let intent= sessionStorage.getItem('status'),
    idValue,
    willUpdateA,
    updatedA,
    willUpdateP,
    updatedP,
		defaultP= sessionStorage.getItem('price'),
    willUpdateS,
    updatedS,
		defaultS= sessionStorage.getItem('size')

const steps = [
  {
    id: '0',
    message: 'Hello my friend! Can I help you?',
    trigger: '1',
  },
	{
		id:'1',
		user:true,
		trigger: '1.5',
	},
  {
      id: '1.5',
      delay: 1500,
      message: 'Do you want to Buy or Rent?',
      trigger: 'action',
    },
  {
    id: 'action',
    user: true,
    validator: (value) => {
      let result;
      const data = string_to_array(value);
      willUpdateA= false;
      for (var x in data){
      data[x]= data[x].toLowerCase();
      if (data[x].includes("rent")){
        intent= 'Rent';
        result= true;
      }else if (data[x].includes("buy")){
        intent= 'Buy';
        result= true;
      }else
      {
        idValue= 1.5;
        result= true;
      }
    }
    return result;
  },
   trigger: ({value}) => value.toLowerCase().includes('rent') || value.toLowerCase().includes('buy') ? '3' : 'error'
  },
  {
    id: '3',
    message: 'Ok then! Give me your budget in Euros(€)',
    trigger: 'price',
  },
  {
    id: 'price',
    user: true,
    validator: (value) => {
      let result;
      willUpdateP= false;
      if (isNaN(value)) {
        idValue= 3;
        result= true;
      }else if( value <= 0){
        idValue= 3;
        result= true;
      }else{
				defaultP=value;
        result= true;
      }
      return result;
    },
    trigger: ({value}) => isNaN(value) ? 'notNumberError' : value <=0 ? 'notPositiveNumberError' : '5',
  },
  {
    id: '5',
    message: 'And what is your preferable size in square metres?',
    trigger: 'size',
  },
  {
    id: 'size',
    user: true,
    validator: (value) => {
      let result;
      willUpdateS= false;
      if (isNaN(value)) {
        idValue= 5;
        result= true;
      }else if( value <= 0){
        idValue= 5;
        result= true;
      }else{
				defaultS=value;
        result= true;
      }
      return result;
    },
    trigger: ({value}) => isNaN(value) ? 'notNumberError' : value<=0 ? 'notPositiveNumberError' : '6',
  },
  {
    id: '6',
    message:'Please give me where your new location should be!',
    trigger:'location',
  },
  {
    id:'location',
		options: [
      { value: 'Toumpa', label: 'Toumpa', trigger: '7' },
      { value: 'Kalamaria', label: 'Kalamaria', trigger: '7' },
      { value: 'Kentro', label: 'Kentro', trigger: '7' },
			{ value: 'Charilaou', label: 'Charilaou', trigger: '7' },
			{ value: 'Panepistimia', label: 'Panepistimia', trigger: '7' },
			{ value: 'Evosmos', label: 'Evosmos', trigger: '7' },
      { value: '', label: 'All', trigger: '7' },
    ]
  },
  {
    id: '7',
    message: 'Great! Check out your options',
    trigger: 'review',
  },
  {
    id: 'review',
		delay: 1500,
    component: <Review/>,
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
      { value: 'no', label: 'No', trigger: 'endGreet' },
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
      { value: 'action', label: 'action', trigger: 'update-action-q' },
      { value: 'price', label: 'price', trigger: 'update-price-q' },
      { value: 'size', label: 'size', trigger: 'update-size-q' },
			{ value: 'location', label: 'location', trigger: 'update-location-q' },
    ],
  },
  {
    id: 'update-action-q',
    message: 'So do you want to Buy or Rent?',
    trigger: 'update-action',
  },
  {
    id: 'update-action',
    user: true,
    validator: (value) => {
      let result;
      const data = string_to_array(value);
      for (var x in data){
      data[x]= data[x].toLowerCase();
      if (data[x].includes("rent")){
        updatedA= 'Rent';
        result= true;
      }else if (data[x].includes("buy")){
        updatedA= 'Buy';
        result= true;
      }else
      {
        idValue= 'update-action-q';
        result= true;
      }
    }
    willUpdateA=true;
    return result;
  },
    trigger: ({value}) => value.toLowerCase().includes('rent') || value.toLowerCase().includes('buy') ? 'update-ends-q' : 'error',
  },
  {
    id: 'update-price-q',
    message: 'So what is your new budget?',
    trigger: 'update-price',
  },
  {
    id: 'update-price',
    user:true,
    validator: (value) => {
      let result;
      if (isNaN(value)) {
        idValue= 'update-price-q';
        result= true;
      }else if( value <= 0){
        idValue= 'update-price-q';
        result= true;
      }else{
        updatedP= value;
        result= true;
      }
      willUpdateP= true;
      return result;
    },
    trigger: ({value}) => isNaN(value) ? 'notNumberError' : value<=0 ? 'notPositiveNumberError' : 'update-ends-q',
  },
  {
    id: 'update-size-q',
    message: 'So what is your new preferable size?',
    trigger: 'update-size',
  },
  {
    id: 'update-size',
    user: true,
    validator: (value) => {
      let result;
      if (isNaN(value)) {
        idValue= 'update-size-q';
        result= true;
      }else if( value <= 0){
        idValue= 'update-size-q';
        result= true;
      }else{
        updatedS= value;
        result= true;
      }
      willUpdateS= true;
      return result;
    },
    trigger: ({value}) => isNaN(value) ? 'notNumberError' : value<=0 ? 'notPositiveNumberError' : 'update-ends-q',
  },
	{
		id: 'update-location-q',
		message: 'So what is your new preferable location?',
		trigger: 'location'
	},
	{
		id: 'update-ends-q',
		message: 'Do you want to update more filters?',
		trigger: 'update-ends'
	},
	{
		id: 'update-ends',
		options: [
      { value: 'yes', label: 'yes', trigger: 'update-yes'},
      { value: 'no', label: 'no', trigger: '7'},
    ],
	},
  {
    id: 'endGreet',
    message: 'Thanks! I hope i was helpful!',
    trigger: 'nextStep'
  },
  {
    id: 'nextStep',
    options: [
      {value:'Start Again!', label: 'Start Again!', trigger: '1.5'},
      {value:'The End!', label: 'The End!', trigger: 'end-message'}
    ]
  },
  {
    id: 'end-message',
    message: 'Good Bye my friend! Refresh the page in case you need me again. :D',
    end: true,
  },
  {
    id:'error',
    message: 'Sorry can you rephrase?',
    trigger: ()=> true ? idValue : idValue,
  },
  {
    id:'notNumberError',
    message: 'Sorry, your answer must be a number, e.g. 500',
    trigger: ()=> true ? idValue : idValue,
  },
  {
    id:'notPositiveNumberError',
    message: 'Sorry, your answer must be a positive number, e.g. 500',
    trigger: ()=> true ? idValue : idValue,
  }
];

class Chatbot extends React.Component{

  render(){
    const style={
      marginRight: '3%',
      marginBottom: '1%'
    }
    return (
      <div className="parent">
        <ChatBot
          botAvatar={bot}
          className="chat"
          steps={steps}
          cache="true"
          floating="true"
          floatingIcon={<Chatboticon/>}
          floatingStyle={style}
          headerTitle="I'm your assistant!"
        />
      </div>

    )
  }
}

export default Chatbot;
