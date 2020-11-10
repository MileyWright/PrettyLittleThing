import React from 'react';
import './Home.css';

export default class HiddenNav extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        prevScrollpos: window.pageYOffset,
        visible: true
    };
    }

   // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      <nav className={this.state.visible ? 'navbar' : 'hiddenNav'}>
        SUMMER SALE - UP TO 70% OFF EVERYTHING* EXCL BEAUTY - HURRY! LIMITED TIME ONLY
      </nav>
    );
  }
}
