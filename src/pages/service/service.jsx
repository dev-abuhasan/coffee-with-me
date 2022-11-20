import React from 'react';

const Service = () => {
    const [view, setView] = React.useState('password');
    const [userInfo, setUserInfo] = React.useState({});

    const getData = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    const submitBtn = () => {
        console.log('sub top', userInfo);

        const changePase = "abuonetowthree";

        setUserInfo({ ...userInfo, password: changePase });
    }

    console.log(userInfo);
    /**
     *  pass box input 
        123 : onetowthree
        1 2 3: one tow three
        asd123: asdonetowthree
    */
    return (
        <div>
            <h1>Service</h1>
            <button onClick={() => setView(view === 'text' ? 'password' : 'text')}>View Pass</button>
            <br />
            <input type="text" name="name" onChange={(e) => getData(e)} />
            <input type="text" name="email" onChange={(e) => getData(e)} />
            <input type={view} name="password" onChange={(e) => getData(e)} />
            <button onClick={() => submitBtn()}>Submit</button>
        </div>
    );
};

export default Service;