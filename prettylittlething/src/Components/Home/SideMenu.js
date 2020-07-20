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
          <div className='side_nav'></div>
          <div className='nav'></div>
          <div className='nav'></div>
          <div className='nav'></div>
          <div className='nav'></div>
          <div className='nav'></div>
          <div className='nav'></div>
        </div>

      </Drawer>
    </>
  );
};

export default SideMenu;