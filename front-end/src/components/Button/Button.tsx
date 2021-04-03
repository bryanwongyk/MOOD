// import { FunctionComponent, ReactElement } from "react";
import theme from '../Theme/theme';
import styled from 'styled-components';

// const MyButton = (props) => {
//  console.log(props.buttonType)
//   return (
//     <Button>
//         SignIn/Up
//     </Button>
//   );
// };

const MyButton = styled.button`
	background: ${props => (props.dark ? theme.color.h1 : theme.color.text)};
`;

export default MyButton;
