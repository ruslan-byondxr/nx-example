import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps {
  children: HTMLElement | string
}

const StyledButton = styled.button`
  color: tomato;
`;

export function Button(props: ButtonProps) {
  return (
    <StyledButton>
      {props.children}
    </StyledButton>
  );
}

export default Button;
