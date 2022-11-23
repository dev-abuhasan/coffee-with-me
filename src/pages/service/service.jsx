import React from 'react';

const Service = () => {
    const [view, setView] = React.useState('password');
    const [userInfo, setUserInfo] = React.useState({});

    const getData = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    const passValidation = () => {
        const splitVal = userInfo?.password.split('');
        for (let i = 0; i < splitVal.length; i++) {
            if (splitVal[i] === '0') {
                splitVal[i] = 'zero';
            } else if (splitVal[i] === '1') {
                splitVal[i] = 'one';
            } else if (splitVal[i] === '2') {
                splitVal[i] = 'two';
            }

        }
        const pass = splitVal.toString();
        const changeVal = pass.replaceAll(',', '')
        const newUserInfo = { ...userInfo, password: changeVal };

        return newUserInfo;
    };

    const submitBtn = () => {
        const validateUser = passValidation();
        console.log(validateUser);
    }

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