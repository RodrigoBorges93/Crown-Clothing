import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import CartIcon from '../cart-icon/cart-icon.component';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.styles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        COMPRAR
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>

      {
        currentUser ?
          <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
        :

        <OptionLink to='/signin'>
        SIGN IN
        </OptionLink>
      }
      <CartIcon />

    </OptionsContainer>
    {
      (!hidden) ?
      <CartDropdown />
      :
      null
    }
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);
