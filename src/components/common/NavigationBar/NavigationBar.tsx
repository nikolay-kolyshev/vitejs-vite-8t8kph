import React, {FC, memo} from "react";
import {Styled} from "./NavigationBar-styled";
import {PageButton} from "./PageButton/PageButton";
import {NavigationRoutes} from "../NavigationRoutes/NavigationRoutes.types";

export const NavigationBar: FC = memo(() => {
    return (
        <Styled.Wrapper>
            <PageButton pageName={'Задание 1'} isActive={true} pageRoute={NavigationRoutes.Counter}/>
            <PageButton pageName={'Задание 2'} isActive={false} pageRoute={NavigationRoutes.Task2}/>
            <PageButton pageName={'Задание 3'} isActive={false} pageRoute={NavigationRoutes.Task3}/>
            <PageButton pageName={'Задание 4'} isActive={false} pageRoute={NavigationRoutes.Task4}/>
        </Styled.Wrapper>
    )
});