import styled from 'styled-components';
import { Link as ReactRouterDomLink } from 'react-router-dom';

export const Link = styled(ReactRouterDomLink)`
  text-decoration: none;

  & span {
    color: rgba(0, 0, 0, 0.87) !important;
  }
`;
