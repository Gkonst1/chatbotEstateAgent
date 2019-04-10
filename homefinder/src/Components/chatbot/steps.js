const string_to_array = function (str) {
  return str.trim().split(" ");
  };

const style={
  marginRight: '3%',
  marginBottom: '1%'
}

const steps = [
  {
    id: '1',
    message: 'Hello, can I help you?',
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
      for (var x in data){
      data[x]= data[x].toLowerCase();
      if (data[x].includes("rent")){
        result= true;
      }else if (data[x].includes("buy")){
        result= true;
      }else
      {
        result= 'Do you want to Buy or Rent';
      }
    }
    return result;
  },
    trigger: '3',
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
      if (isNaN(value)) {
        return 'value should be a number';
      }else if( value <= 0){
        return 'value should be a positive number';
      }else{
        return true;
      }
    },
    trigger: '5',
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
      if (isNaN(value)) {
        return 'value should be a number';
      }else if( value <= 0){
        return 'value should be a positive number';
      }else{
        return true;
      }
    },
    trigger: '7'
  },
  {
    id: '7',
    message: 'Great! Check out your options',
    trigger: 'review',
  },
  {
    id: 'review',
    component: <Link to='/results'><p className="results" >Your Results</p></Link>,
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
      { value: 'action', label: 'action', trigger: 'update-action-q' },
      { value: 'price', label: 'price', trigger: 'update-price-q' },
      { value: 'size', label: 'size', trigger: 'update-size-q' },
    ],
  },
  {
    id: 'update-action-q',
    message: 'So do you want to Buy or Rent?',
    trigger: 'update-action'
  },
  {
    id: 'update-action',
    validator: (value) => {
      let result;
      const data = string_to_array(value);
      for (var x in data){
      data[x]= data[x].toLowerCase();
      if (data[x] === 'rent'){
        result= true;
      }else if (data[x] === 'buy'){
        result= true;
      }else
      {
        result= 'Do you want to Buy or Rent';
      }
    }
    return result;
  },
    update: 'action',
    trigger: '7',
  },
  {
    id: 'update-price-q',
    message: 'So what is your new budget?',
    trigger: 'update-price'
  },
  {
    id: 'update-price',
    validator: (value) => {
      if (isNaN(value)) {
        return 'value should be a number';
      }else if( value <= 0){
        return 'value should be a positive number';
      }else{
        return true;
      }
    },
    update: 'price',
    trigger: '7',
  },
  {
    id: 'update-size-q',
    message: 'So what is your new preferable size?',
    trigger: 'update-size'
  },
  {
    id: 'update-size',
    validator: (value) => {
      if (isNaN(value)) {
        return 'value should be a number';
      }else if( value <= 0){
        return 'value should be a positive number';
      }else{
        return true;
      }
    },
    update: 'size',
    trigger: '7',
  },
  {
    id: 'end-message',
    message: 'Thanks! I hope i was helpful!',
    end: true,
  },
];

export default {steps,string_to_array};
