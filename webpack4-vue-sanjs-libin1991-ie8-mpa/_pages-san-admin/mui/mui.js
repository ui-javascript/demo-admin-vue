import {Button, Icon} from 'san-mui';
import { Component } from 'san';
import './index.css';
import 'san-mui/lib/index.css';

class App extends Component {

    static template = `
        <div style="display: flex; height: 100%; align-items: center; justify-content: center">
            <sm-button>
                <sm-icon style="margin-right: 10px">all_inclusive</sm-icon>
                hello world
            </sm-button>
        </div>
    `;

    static components = {
        'sm-button': Button,
        'sm-icon': Icon
    };

}

new App().attach(document.body);