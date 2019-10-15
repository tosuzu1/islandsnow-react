import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Icon, Dropdown, Image, List, Grid, Divider, Input } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name="facebook f"/></Menu.Item>
            <Menu.Item fitted><Icon name="instagram"/></Menu.Item>
            <Menu.Item fitted><Icon name="twitter"/></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest"/></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="search"/></Menu.Item>
            <Menu.Item fitted><Icon name="home"/></Menu.Item>
            <Menu.Item fitted><Icon name="user"/></Menu.Item>
            <Dropdown item text="MY CART" icon="shopping cart">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item fitted>0</Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Image src="https://cdn.shopify.com/s/files/1/1035/5187/files/logoshort_800x.png" size='medium' centered/>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu">
          <Grid centered container>
            <Dropdown item text="MEN">
              <Dropdown.Menu>
                <Dropdown.Item>TANK TOPS</Dropdown.Item>
                <Dropdown.Item>LONG SLEEVE SHIRTS</Dropdown.Item>
                <Dropdown.Item>SHIRTS</Dropdown.Item>
                <Dropdown.Item>SWEATSHIRTS & JACKETS</Dropdown.Item>
                <Dropdown.Item>ALOHA SHIRTS</Dropdown.Item>
                <Dropdown.Item>BOTTOMS</Dropdown.Item>
                <Dropdown.Item>ACCESSORIES</Dropdown.Item>
                <Dropdown.Item>HATS</Dropdown.Item>
                <Dropdown.Item>BAGS & WALLETS</Dropdown.Item>
                <Dropdown.Item>STICKERS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="WOMEN">
              <Dropdown.Menu>
                <Dropdown.Item>TANK TOPS</Dropdown.Item>
                <Dropdown.Item>LONG SLEEVE SHIRTS</Dropdown.Item>
                <Dropdown.Item>SHIRTS</Dropdown.Item>
                <Dropdown.Item>SWEATSHIRTS</Dropdown.Item>
                <Dropdown.Item>ACCESSORIES</Dropdown.Item>
                <Dropdown.Item>HATS</Dropdown.Item>
                <Dropdown.Item>BAGS & WALLETS</Dropdown.Item>
                <Dropdown.Item>STICKERS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="KIDS">
              <Dropdown.Menu>
                <Dropdown.Item>SHIRTS</Dropdown.Item>
                <Dropdown.Item>ONESIESS</Dropdown.Item>
                <Dropdown.Item>SWEATSHIRTS</Dropdown.Item>
                <Dropdown.Item>ACCESSORIES</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="BRAND">
              <Dropdown.Menu>
                <Dropdown.Item>ALOHA SURF PROJECT</Dropdown.Item>
                <Dropdown.Item>AMUSE SOCIETY</Dropdown.Item>
                <Dropdown.Item>FARMERS MARKET HAWAII</Dropdown.Item>
                <Dropdown.Item>HAWAII DOMESTIC MARKET</Dropdown.Item>
                <Dropdown.Item>HERSCHEL SUPPLY CO.</Dropdown.Item>
                <Dropdown.Item>HILIFE</Dropdown.Item>
                <Dropdown.Item>ISLAND SNOW HAWAII</Dropdown.Item>
                <Dropdown.Item>KAILUA BOYS</Dropdown.Item>
                <Dropdown.Item>KAILUA GIRLS</Dropdown.Item>
                <Dropdown.Item>KA'OHAO</Dropdown.Item>
                <Dropdown.Item>MOKULUA HULA</Dropdown.Item>
                <Dropdown.Item>LANIKAI CANOE CLUB</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>SALE</Menu.Item>
          </Grid>
        </Menu>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image src={require("./IS_BG.PNG")} fluid/>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className={"footer-background"}>
          <Grid container columns={3}>
            <Grid.Column>
              <List>
                <List.Item>About Us</List.Item>
                <List.Item>Store Locations</List.Item>
                <List.Item>Employment</List.Item>
                <List.Item>Videos</List.Item>
                <List.Item>Shipping&Returns</List.Item>
                <List.Item>Terms&Conditions</List.Item>
                <List.Item>Privacy Policy</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List>
                <List.Item>Men</List.Item>
                <List.Item>Womens</List.Item>
                <List.Item>Kids</List.Item>
                <List.Item>Brands</List.Item>
                <List.Item>Sales</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List>
                <List.Item>Join our mailing list for updates</List.Item>
                <List.Item> </List.Item>
                <List.Item> </List.Item>
                <List.Item> </List.Item>
                <List.Item>Sign up to receive our email updates!</List.Item>
                <Input className="inputEmail" action={'join'} placeholder={'Enter Email Address'}/>

              </List>
            </Grid.Column>

          </Grid></div>
    )
  }
}

class DividerMenu extends React.Component {
  render() {
    return (
        <Divider/>
    )
  }
}

class FooterSocialMedia extends React.Component {
  render() {
    return (
        <Menu borderless className="bottommenu">
          <Grid centered container>
            <Menu.Item fitted><Icon name="big facebook f"/></Menu.Item>
            <Menu.Item fitted><Icon name="big instagram"/></Menu.Item>
            <Menu.Item fitted><Icon name="big twitter"/></Menu.Item>
            <Menu.Item fitted><Icon name="big pinterest"/></Menu.Item>
          </Grid>
        </Menu>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
          <DividerMenu/>
          <FooterSocialMedia/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));