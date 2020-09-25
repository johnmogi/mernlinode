import Link from 'next/link';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBContainer
} from 'mdbreact';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
        <MDBNavbar color='rgba-black-strong' transparent dark expand='md' fixed='top'>
          <MDBContainer>
          <MDBNavbarBrand>
            <h3 className='white-text'>JohnMogi</h3>
            איפיון | עיצוב | פולסטאק
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <Link href='/'>
                  <a className='nav-link'>Home</a>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link href='/register'>
                  <a className='nav-link'>Register</a>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className='mr-2'>הבלוגייה</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem>
                      <Link href='/posts/first-post'>
                        <a>קוד</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link href='/blog/design'>
                        <a>עיצוב</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link href='/blog/brief'>
                        <a>בריינסטורמינג</a>
                      </Link>
                    </MDBDropdownItem>
             
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <Link href='/cv'>
                  <a className='nav-link'>קורות חיים</a>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link href='/register'>
                  <a className='nav-link'>צרו קשר</a>
                </Link>
              </MDBNavItem>
              </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
              {/* <a href='tel:0509382456' className='nav-link'> */}
              <MDBBtn tag="a" gradient="peach">
                <MDBIcon icon="phone" />
               050-9382456</MDBBtn>
               {/* </a> */}
      </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </>
    );
  }
}

export default Layout;
