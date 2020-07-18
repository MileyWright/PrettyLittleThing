import React, { useState } from "react";
import { Drawer} from "antd";
import {MenuOutlined} from '@ant-design/icons';
import './Drawer.css';

const SideMenu = (props) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="side_Menu" onClick={showDrawer}>
        <MenuOutlined style={{fontSize: 20}}/>
      </div>
      <Drawer
        className="sideMenu"
        title="FILTER"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <br />
        <br />
        <div>Hello</div>

      </Drawer>
    </>
  );
};

export default SideMenu;