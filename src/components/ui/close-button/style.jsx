import styled, { css, themeGet, position, color } from "@styled";

export const CloseButtonWrap = styled(
    ({ color, position, right, top, ...rest }) => <button {...rest} />
)`
    height: 40px;
    width: 40px;
    line-height: 40px;
    padding: 0;
    background: transparent;
    border: none;
    color: ${themeGet("colors.heading")};
    span {
        position: relative;
        cursor: pointer;
        display: inline-block;
        width: 100%;
        height: 100%;
        &:before,
        &:after {
            position: absolute;
            top: 23px;
            left: 8px;
            content: "";
            width: 24px;
            height: 3px;
            background: currentColor;
            transform-origin: 50% 50%;
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        &:before {
            transform: rotate(45deg);
        }
        &:after {
            transform: rotate(-45deg);
        }
    }
    ${(props) =>
        props.size === "large" &&
        css`
            height: 48px;
            width: 48px;
            line-height: 48px;
            span {
                &:before,
                &:after {
                    width: 42px;
                }
            }
        `}
    &:hover {
        span {
            color: ${themeGet("colors.primary")};
            &:before,
            &:after {
                transform: none;
            }
        }
    }
    ${position}
    ${color}
`;
