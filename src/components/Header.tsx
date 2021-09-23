import styled from 'styled-components';

const Title = styled.h1`
  border-bottom: 1px solid black;
  padding-bottom: 12px;
`

const Header:React.FC<{}> = () => {
  return (
    <Title>nuffsaid.com Coding Challenge</Title>
  );
}

export default Header;