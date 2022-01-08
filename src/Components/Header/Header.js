import React from "react";
import AvatarSrc from '../../Assets/phil_avatar.png'

import {
    MainHeader,
    TitleWrapper,
    HeaderAvatar,
    HeaderTitle,
    HeaderMenuWrapper
} from './'
import { config } from "../../config"
import { HeaderMenuItem } from './HeaderMenuItem'

export const Header = () => {



    return (
        <MainHeader>
            <TitleWrapper>
            <a href="/">
                <HeaderAvatar src={AvatarSrc} />
                <HeaderTitle>{config.title}</HeaderTitle>
            </a>
            </TitleWrapper>
            <HeaderMenuWrapper>
                <HeaderMenuItem menu_item_title={"Blog"} path="/" ></HeaderMenuItem>
                <HeaderMenuItem menu_item_title={"Experience"} path={"/experience"}></HeaderMenuItem>
                {/* <HeaderMenuItem menu_item_title={"Coaching"} path="/coaching"></HeaderMenuItem> */}
            </HeaderMenuWrapper>
        </MainHeader>
    )
}
