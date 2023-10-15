import styled, { css } from "styled-components";
import { Button } from "@mui/material";
import { colors } from "../../utils";

export const StyledButton = styled(Button)<{
  variant: "primary" | "secondary" | "text";
}>`
  display: flex;
  gap: 8px;
  position: relative;
  padding-inline: 40px;
  color: ${colors.primary};
  border: 1px solid ${colors.primary};
  transition: all 0.2s ease;
  font-size: 16px;
  font-weight: 500;
  line-height: 40px;

  ${({ variant }) =>
    variant === "primary" &&
    css`
      &,
      &:hover {
        color: ${colors.white};
        background-color: ${colors.primary};
      }
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      &:hover {
        color: ${colors.white};
        background-color: ${colors.primary};
      }
    `}

  ${({ variant }) =>
    variant === "text" &&
    css`
      padding: 0;
      border: none;
      text-transform: none;
      color: ${colors.gray900};
      background-color: transparent;

      &:hover {
        background-color: transparent;
      }
    `}
`;
