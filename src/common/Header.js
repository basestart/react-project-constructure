import React, { Component } from 'react';
import { modules, icons } from '../modules';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moduleKeys: [],
            current: '',
            icons: {}
        };
    }
    componentDidMount() {
        let moduleKeys = Object.keys(modules);
        this.setState({
            moduleKeys,
            current: moduleKeys[0],
            icons
        });
    }
    handleClick = e => {
        this.setState({
            current: e.key
        });
    };
    render() {
        let { moduleKeys, icons } = this.state;
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                style={{ padding: '0 20px', boxSizing: 'border-box' }}
            >
                {moduleKeys.map(module => (
                    <Menu.Item key={module}>
                        <Link to={`/${module}`} key={module}>
                            <Icon type={icons[`${module}Icon`]} />
                            {module}
                        </Link>
                    </Menu.Item>
                ))}
            </Menu>
        );
    }
}
