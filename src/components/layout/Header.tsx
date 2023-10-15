import styled from "styled-components";
import { Button, Container } from "..";
import { IUser, Logo } from "../../assets";
import { Link } from "react-router-dom";
import { navLinks } from "../../data";

export function Header() {
  return (
    <StyledHeader>
      <StyledContainer>
        <NavContent>
          <Link to="/">
            <Logo />
          </Link>
          <NavLinks>
            {navLinks.map(({ id, title, link }) => (
              <NavLink to={link} key={id}>
                {title}
              </NavLink>
            ))}
          </NavLinks>
        </NavContent>
        <NavActions>
          <Button variant="primary">Get consultation</Button>
          <Button variant="text">
            <IUser />
            Log in / Register
          </Button>
        </NavActions>
      </StyledContainer>
      <BackgroundImage
        src="/background.svg"
        alt="background image"
        aria-hidden
      />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: relative;
  padding-block: 20px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const NavLink = styled(Link)`
  color: black;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  pointer-events: none;
`;
