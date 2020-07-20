import React, { useState } from "react";
import { Drawer, Input } from "antd";
import {MenuOutlined, SearchOutlined } from '@ant-design/icons';
import './Drawer.css';

const SideMenu = (props) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const suffix = (
    <SearchOutlined
        style={{
        fontSize: 16,
        }}
    />
  );

  return (
    <>
      <div className="side_Menu" onClick={showDrawer}>
        <MenuOutlined style={{fontSize: 20}}/>
      </div>
      <Drawer
        className="sideMenu"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <div className='grid'>
        <Input
          className='searchbar'
          placeholder="Search..."
          onSearch={value => console.log(value)}
          style={{ width: 220, height: 25}}
          suffix={suffix}
        />
          <div className='side_nav'>
            <div>NEW IN</div>
            <img src={require('../Assets/newin.webp')} alt='newin'/>
          </div>
          <div className='side_nav'>
            <div>SALE</div>
            <img src={require('../Assets/sale.webp')} alt='sale'/>
          </div>
          <div className='side_nav'>
            <div>CLOTHING</div>
            <img src={require('../Assets/clothing.webp')} alt='clothing'/>
          </div>
          <div className='side_nav'>
            <div>STAY HOME</div>
            <img src={require('../Assets/stay-home.webp')} alt='stayhome'/>
          </div>
          <div className='side_nav'>
            <div>SHOP BY FIGURE</div>
            <img src={require('../Assets/shopby.webp')} alt='shopbyfigure'/>
          </div>
          <div className='side_nav'>
            <div>DRESSES</div>
            <img src={require('../Assets/dresses.webp')} alt='dresses'/>
          </div>
          <div className='side_nav'>
            <div>TOPS</div>
            <img src={require('../Assets/tops.webp')} alt='tops'/>
          </div>
          <div className='side_nav'>
            <div>SHOES</div>
            <img src={require('../Assets/shoes.webp')} alt='shoes'/>
          </div>
          <div className='side_nav'>
            <div>ACCESSORIES</div>
            <img src={require('../Assets/accessories.webp')} alt='accessories'/>
          </div>
          <div className='side_nav'>
            <div>BEAUTY</div>
            <img src={require('../Assets/beauty.webp')} alt='beauty'/>
          </div>
          <div className='side_nav'>
            <div>THE EDIT</div>
            <img src={require('../Assets/the-edit.webp')} alt='the-edit'/>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default SideMenu;