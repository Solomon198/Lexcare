import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Counter.css';
import routes from '../../constants/routes.json';
import {
  increment,
  decrement,
  incrementIfOdd,
  incrementAsync,
  selectCount,
} from './counterSlice';
import Realm from 'realm';

// Define your models and their properties
const CarSchema = {
  name: 'Car',
  properties: {
    make:  'string',
    model: 'string',
    miles: {type: 'int', default: 0},
  }
};
const PersonSchema = {
  name: 'Person',
  properties: {
    name:     'string',
    birthday: 'date',
    cars:     'Car[]', // a list of Cars
    picture:  'data?'  // optional property
  }
};



export default class Counter extends React.Component {
   componentDidMount(){
     Realm.open({schema:[CarSchema,PersonSchema]}).then((realm)=>{

      const myCars = realm.objects("Car")
      console.log(myCars.avg("miles"))
      //  realm.write(()=>{
      //      const myCar = realm.create("Car", {
      //       make: 'Honda',
      //       model: 'Civic',
      //       miles: 1000,
      //     })

      //     myCar.miles += 20;
      //  })

      //   // Add another car
      //   realm.write(() => {
      //     const myCar2 = realm.create('Car', {
      //       make: 'Ford',
      //       model: 'Focus',
      //       miles: 2000,
      //     });
      //   });

        realm.close();
     }).catch((e)=>{
       console.log(e)
     }).then((val)=>{
       console.log("comleted successfully")
     })
   }
   render(){
      return(
        <div>
          <h1>Hello react</h1>
        </div>
      )
   }
}
