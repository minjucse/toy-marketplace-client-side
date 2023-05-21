import React from 'react'
import Banner from '../Banner/Banner'
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner />
            <div className="tabs tabs-boxed">
                <a className="tab tab-active">All</a>
                <a className="tab ">Tab 2</a>
                <a className="tab">Tab 3</a>
            </div>
        </div>
    )
}

export default Home