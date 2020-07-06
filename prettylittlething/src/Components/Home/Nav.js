import React from "react";
import { Input } from 'antd';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { SearchOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './Home.css';


const Nav = () => {
    const suffix = (
        <SearchOutlined
            style={{
            fontSize: 16,
            }}
        />
    );
    const menu = (
        <Menu>
            <Menu.Item key="0"> 
                <img src={require('../Assets/united-kingdom.png')} className='currency_flag' alt='UK store'/>
                <span className='currency_text_gbp'>UK & Rest of World</span>
                <span className='pull-right'>£</span>
            </Menu.Item>
            <Menu.Item key="1">
                <img src={require('../Assets/ireland.png')} className='currency_flag' alt='IRE store' />
                <span className='currency_text_eur'>IRE</span> 
                <span className='pull-right'>€</span>
            </Menu.Item>
            <Menu.Item key="3">
                3rd menu item
            </Menu.Item>
        </Menu>
      );
    return(
        <div className='nav'>
            <div className='topNav'>
                <Dropdown overlay={menu} trigger={['click']}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <img src={require('../Assets/flag.png')} alt='american flag'/> <DownOutlined />
                    </a>
                </Dropdown>
                <Input
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 200, height: 30, fontSize: 12}}
                    suffix={suffix}
                />
            </div>
            <div className='bottomNav'>

            </div>
        </div>
    )
}

export default Nav;