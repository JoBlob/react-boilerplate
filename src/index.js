import React from 'react';
import ReactDOM from 'react-dom';

import './style/main.less';

class Welcome extends React.Component {
    render () {
        return <div>Gesundheit</div>;
    }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));
