import React, {FC, memo} from "react";
import {Styled} from "./Header-syled";

export const Header: FC = memo(() => {
    return (
        <Styled.Wrapper>
            <Styled.Title>
                UI/UX - 4 курс
            </Styled.Title>
        </Styled.Wrapper>
    )
})