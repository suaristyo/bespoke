import React, { useState } from 'react';
import { Button , DatePicker, List} from 'antd';
import 'antd/dist/antd.css';
import Item from 'antd/lib/list/Item';


const Slide01 = () => {
  const [startDate ,setStartDate] = useState(new Date());
  console.log(startDate)
  return (
    <section>
    <h1 style={{color:"white"}}>Presentasi Interview T&T</h1>
    <h3 style={{color:"white"}}>Anggota</h3>
    <p>Stephen (171112640)</p>
    <p>Suaristyo (171111296)</p>
    <p>William Handono (171110258)</p>

    <DatePicker  id = "dt" selected={startDate} onChange={date => setStartDate(date)}/>
    <br />
  </section>
  );
}

export default Slide01;
