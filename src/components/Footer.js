import styled from "styled-components";

const FooterSection = styled.div`
  color: white;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -35px 0 0 0;
  font-size: 14px;
`;

const Footer = () => {
  return <FooterSection>Watt Doctor 2023. All rights reserved</FooterSection>;
};

export default Footer;
