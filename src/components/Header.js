import React from 'react';
import Link from 'gatsby-link';
import styles from './Header.module.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hideNav: true
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.dismissNav = this.dismissNav.bind(this);
  }

  toggleNav() {
    const hideNav = this.state.hideNav;
    this.setState({hideNav: !hideNav});
  }

  dismissNav() {
    this.setState({ hideNav: true });
  }

  render() {
    const { hideNav } = this.state;
    const navStyle = hideNav
      ? `${styles.nav} ${styles.navHidden}` : `${styles.nav}`;
    return (
      <div className={styles.header}>
        <div className={styles.logo}>
          <div>LOGO</div>
          <div className={styles.menuButton} onClick={this.toggleNav}>Menu</div>
        </div>
        <nav className={navStyle}>
          <Link onClick={this.dismissNav} to="/">Home</Link>
          <Link onClick={this.dismissNav} to="/blog">Blog</Link>
          <Link onClick={this.dismissNav} to="/about">About</Link>
        </nav>
      </div>
    );
  }
};

export default Header;