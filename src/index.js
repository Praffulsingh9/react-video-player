import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
const API_KEY ='AIzaSyAWLavWE8LxhZCuDOQsJeSowzvm4bw_dqs';

const App = () => {
    return (<div>
        <SearchBar />
    </div>
    );
}

ReactDOM.render(<App/>,document.querySelector('#container'))