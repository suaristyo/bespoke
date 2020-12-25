import React,{useState} from 'react';
import Code from '../components/Code';
import {Button} from 'antd';


class Slide02 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { textTo: "Saya mau gaji sesuai UMR / ditentukan Interview",
                   pictureOut: false };
  }

  changeText = (textTo,pictureOut) => {
    this.setState({ textTo , pictureOut }); 
  } 

  render () {
    const { textTo,pictureOut } = this.state
    return (
      <section>
        <h1 style={{color:'white'}}>Apakah gaji yang anda mau ?</h1>
        <div>
          <h2 style={{color:'white'}}>Ayo Dipilih !!</h2>
          <br/>
          <Button type="primary" size="large">Saya mau gaji sesuai keinginan / kebutuhan saya</Button>
          <Button type="primary" size="large" style={{marginLeft:30}}
          onMouseEnter={()=>{this.changeText("Saya mau gaji sesuai keinginan / kebutuhan saya")}} 
          onMouseLeave={()=>{this.changeText("Saya mau gaji sesuai UMR / ditentukan Interview")}}>{textTo}</Button>
        </div>
      </section>
    );
  }
};
export default Slide02;