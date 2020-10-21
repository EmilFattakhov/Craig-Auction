import React, { useState } from "react";
import { Session } from '../api/session'
import './SignIn.css'

const SignIn = props => {

    const [text1, setText1] = useState({ email: "", password: "" });
    const [error, setError] = useState('')


    function handleChange(evt) {
        const value = evt.target.value;
        setText1({
            ...text1,
            [evt.target.name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault()

        Session.create(text1)
            .then(data => {
                if (data.status === 404) {
                    setError('Wrong Credentidals')
                } else {
                    props.theThing()
                    props.history.push('/auctions')
                }
            })
    }

    return (
        <div>

            <div className='welcome-container'>
                <div className='welcome-title' style={{ marginTop: '10em' }}>
                    <h1 className='luxor-auctions'>Sign In</h1>

                    <h3 className='welcome-description'> Please Sign In</h3>
                    <p>{error}</p>
                    <form onSubmit={handleSubmit} className='new-form'>
                        <input
                            className='new-input input-signin'
                            name="email"
                            id="email"
                            type="text"
                            placeholder="Email"
                            onChange={handleChange}
                            value={text1.email}
                        />
                        <input
                            className='new-input input-signin'
                            name="password"
                            id="password"
                            type="password"
                            placeholder="Password"
                            onChange={handleChange}
                            value={text1.password}
                        />
                        <button className='buy-sell-button new-submit'>Submit</button>

                    </form>
                </div>
            </div>

            <div class="fill">
                <img src="https://image.freepik.com/free-photo/abstract-background-luxury-cloth-liquid-wave-wavy-folds_34170-23.jpg" alt="" />
            </div>
        </div>
    );
};
export default SignIn;
