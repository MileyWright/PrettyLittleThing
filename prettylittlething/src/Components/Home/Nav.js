import React from "react";
import { Link } from 'react-router-dom';
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
        <Menu className='dropdown-menu'>
            <Menu.Item className='UK_dropdown'key="0"> 
                <img src={require('../Assets/united-kingdom.png')} className='currency_flag' alt='UK store'/>
                <span className='currency_text_gbp'><p>UK & Rest<br/> of World</p></span>
                <span className='pull-right'>£</span>
            </Menu.Item>
            <Menu.Item key="1">
                <img src={require('../Assets/ireland.png')} className='currency_flag' alt='IRE store' />
                <span className='currency_text_eur'>IRE</span> 
                <span className='pull-right'>€</span>
            </Menu.Item>
            <Menu.Item key="2">
                <img src={require('../Assets/european-union.png')} className='currency_flag' alt='EU store' />
                <span className='currency_text_eur'>EU</span> 
                <span className='pull-right'>€</span>
            </Menu.Item>
            <Menu.Item key="3">
                <img src={require('../Assets/australia.png')} className='currency_flag' alt='AU store' />
                <span className='currency_text_au'>AU</span> 
                <span className='pull-right'>$</span>
            </Menu.Item>
            <Menu.Item key="4">
                <img src={require('../Assets/new-zealand.png')} className='currency_flag' alt='NZ store' />
                <span className='currency_text_nz'>NZ</span> 
                <span className='pull-right'>$</span>
            </Menu.Item>
            <Menu.Item key="5">
                <img src={require('../Assets/canada.png')} className='currency_flag' alt='CA store' />
                <span className='currency_text_ca'>CA</span> 
                <span className='pull-right'>$</span>
            </Menu.Item>
            <Menu.Item key="6">
                <img src={require('../Assets/france.png')} className='currency_flag' alt='FR store' />
                <span className='currency_text_fr'>FR</span> 
                <span className='pull-right'>€</span>
            </Menu.Item>
            <Menu.Item key="7">
                <img src={require('../Assets/israel.png')} className='currency_flag' alt='IL store' />
                <span className='currency_text_il'>IL</span> 
                <span className='pull-right'>₪</span>
            </Menu.Item>
            <Menu.Item key="8">
                <img src={require('../Assets/qatar.png')} className='currency_flag' alt='QA store' />
                <span className='currency_text_qa'>QA</span> 
                <span className='pull-right'> ﷼</span>
            </Menu.Item>
            <Menu.Item key="9">
                <img src={require('../Assets/united-arab-emirates.png')} className='currency_flag' alt='AE store' />
                <span className='currency_text_ae'>AE</span> 
                <span className='pull-right'> د.إ</span>
            </Menu.Item>
        </Menu>
      );
    return(
        <div className='nav'>
            <div className='topNav'>
                <div className='search'>
                    <Dropdown className='dropdown'overlay={menu} trigger={['click']}>
                        <a href='/' className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        <img src={require('../Assets/flag.png')} alt='american flag'/> <DownOutlined />
                        </a>
                    </Dropdown>

                    <Input
                        className='search_bar'
                        placeholder="SEARCH"
                        onSearch={value => console.log(value)}
                        style={{ width: 220, height: 25}}
                        suffix={suffix}
                    />
                </div>
                <div className='prettylittlething-logo'>
                    <img src={require('../Assets/PrettyLittleThing-logo.jpg')} alt='Pretty Little Thing Logo'/>
                </div>
                <div className='user_icons'>
                    <div className='need_help'>
                        <Link path='/' className='need_help_link'>
                            Need Help?
                        </Link>
                    </div>
                    <div>
                        <Link path='/'>
                            <img src={require('../Assets/user.png')} alt='user' className='nav_icons'/>
                        </Link>
                    </div>
                    <div>
                        <Link path='/'>
                            <img src={require('../Assets/heart.png')} alt='heart' className='nav_icons'/>
                        </Link>
                    </div>
                    <div>
                        <Link path='/'>
                            <img src={require('../Assets/shopping-bag.png')} alt='shopping bag' className='nav_icons'/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='bottomNav'>
                <li>NEW IN</li>
                <li className='nav_sale'>SALE</li>
                <li>CLOTHING</li>
                <li>STAY HOME</li>
                <li>SHOP BY FIGURE</li>
                <li>DRESSES</li>
                <li>TOPS</li>
                <li>SHOES</li>
                <li>ACCESSORIES</li>
                <li>BEAUTY</li>
                <li>THE EDIT</li>
            </div>
        </div>
    )
}

export default Nav;