import styled, { keyframes } from "styled-components";
import Link from "next/link";

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const Nav = styled.nav`
  height: 80px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  margin: 0 0 -80px 0;
  animation: ${slideDown} 1.75s ease-in-out;
`;

const LinkContainer = styled.div`
  display: flex;
`;

const LinkStyle = styled.nav`
  padding: 0rem 0.75rem;
  cursor: pointer;
  font-size: 1.5rem;
`;

const Navbar = () => {
  return (
    <Nav>
      <div
        style={{ borderRight: "solid 1px white", padding: "0 1.5rem 0 0.5rem" }}
      >
        <div
          style={{
            border: "solid 1px darkgrey",
            borderRadius: "50%",
            height: "47px",
            cursor: "pointer",
          }}
        >
          <svg
            width="45px"
            height="45px"
            viewBox="0 0 23 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 8H13.75M5 12H19M10.25 16L19 16"
              stroke="#f17137"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div>
        <Link href="/" style={{ textDecoration: "none", color: "white" }}>
          <LinkStyle>Watt Doctor</LinkStyle>
        </Link>
      </div>
      <div
        style={{ borderLeft: "solid 1px white", padding: "0 0.5rem 0 1.5rem" }}
      >
        <div
          style={{
            border: "solid 1px darkgrey",
            borderRadius: "50%",
            height: "47px",
            width: "47px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <svg
            width="33px"
            height="33px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />

            <g id="Complete">
              <g id="mail">
                <g>
                  <polyline
                    fill="none"
                    points="4 8.2 12 14.1 20 8.2"
                    stroke="#f17137"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                  />

                  <rect
                    fill="none"
                    height="14"
                    rx="2"
                    ry="2"
                    stroke="#f17137"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    width="18"
                    x="3"
                    y="6.5"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      {/* 
      <LinkContainer>
        <Link href="/" style={{ textDecoration: "none", color: "white" }}>
          <LinkStyle>Home</LinkStyle>
        </Link>
        <Link
          href="/services"
          style={{ textDecoration: "none", color: "white" }}
        >
          <LinkStyle>Services</LinkStyle>
        </Link>
        <Link
          href="/contact"
          style={{ textDecoration: "none", color: "white" }}
        >
          <LinkStyle>Contact</LinkStyle>
        </Link>
      </LinkContainer> */}
    </Nav>
  );
};

export default Navbar;
