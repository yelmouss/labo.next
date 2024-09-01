'use client';
import { styled } from '@mui/material/styles';

const StyledButton = styled('button')(({ theme }) => ({
  background: 'transparent',
  border: 'none',
  padding: '1em 1.5em',
  color: theme.palette.text.primary,
  textTransform: 'uppercase',
  
  position: 'relative',
  transition: '0.5s ease',
  cursor: 'pointer',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: '2px',
    width: 0,
    backgroundColor: '#ffc506',
    transition: '0.5s ease',
  },
  '&:hover': {
    color: '#1e1e2b',
    transitionDelay: '0.5s',
  },
  '&:hover::before': {
    width: '100%',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: 0,
    width: '100%',
    backgroundColor: '#ffc506',
    transition: '0.4s ease',
    zIndex: -1,
  },
  '&:hover::after': {
    height: '100%',
    transitionDelay: '0.4s',
    color: 'aliceblue',
  },
}));

const Button56 = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button56;