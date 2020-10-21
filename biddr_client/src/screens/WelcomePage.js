import React from 'react'
import './WelcomePage.css'

const WelcomePage = props => {
    return (
        <>
            <div className='welcome-container'>
                <div className='welcome-title'>
                    <h1 className='luxor-auctions'>Craig Auctions</h1>

                    <h3 className='welcome-description'> Find your dream car today </h3>
                    <div className='welcome-button-container'>
                        <button className='buy-sell-button' onClick={() => props.history.push('/auctions')}>BUY</button>
                        <button className='buy-sell-button' onClick={() => props.history.push('/auctions/new')}>SELL</button>
                    </div>

                </div>


            </div>
            <div class="fill">
                <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" />
            </div>
        </>
    )
}

export default WelcomePage