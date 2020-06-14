import styled from 'styled-components';

/** Sections  */
export const Section1 = styled.section`
  background: url(/images/Bg Section 1.png);
  width: 100%;
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 650ms;
`;

export const Section2 = styled.section`
  width: 100%;
  background-color: #1DA8D5;
  display: flex;
  justify-content: center;
`;

export const Section3 = styled.section`
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 100%;
  background-color: #FFF;
  display: flex;
  justify-content: center
`;
/** Sections  */

/** Description  */
export const Desc1 = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #1DA8D5;
`;

export const Desc2 = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 147.7%;
  letter-spacing: 0.55em;
  text-transform: uppercase;
  color: #1DA8D5;
`;

export const Desc3 = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 61px;
  color: #FFF;
`;

export const Desc4 = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 33px;
  color: #FFFFFF;
`;

export const Highlight = styled(Desc3)`
  display: inline;
  background: linear-gradient(to bottom, #1DA8D5 40%, #316AC0 50%)
`;

export const Divider = styled.hr`
  display: block;
  border: 4px solid #40E5DC;
  margin: 1em 0;
  padding: 0
`;
/** Description  */

/** Footer  */
export const Final = styled.footer`
  display: inline;
  padding: 2em 3em;
  width: 100%;
  text-align: center;
  background-color: #47B8DD
`;

export const Copyright = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  mix-blend-mode: normal;
`;

/** Footer  */