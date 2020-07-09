import * as React from 'react';
import { NavMenu } from '../NavMenu/NavMenu';
import { iNavData } from '../../../models/models';
import { RES_URL } from '../../../config';
import I18n from '../../../services/I18n';

export interface HeaderProps {
    className?: string;
    navData: iNavData[];
    currSection: string;
    openBurgerMenu?: (e: any) => void;
    scrollToAnchor?: (id: string) => void;
    isSplash?: boolean;
}

export interface HeaderState {

}

export class Header extends React.Component<HeaderProps, HeaderState>{
    el: HTMLDivElement;
    constructor(p: HeaderProps) {
        super(p);
    }

    render() {
        const { props, state } = this,
            cls = this.props.className || "";

        return (
            <div className={"header " + cls} ref={e => this.el = e}>
                <div className="header__wrapper">    
                    <div
                        className={`header__block header__campaign-logo  ${props.isSplash ? "header__block--hidden " : ""}`}
                        onClick={() => props.scrollToAnchor("splash")}
                    >
                        <a href={`/`}>
                            <img src={RES_URL + "img/BeautifyCode_light.png"} alt={I18n.t("altText")} />
                        </a>
                    </div>
                    <div className={`header__block hide-on-med-and-down  header__menu ${(props.currSection == "splash" ? "header__block--hidden " : "")}`}>
                        {props.navData && props.navData.length > 0 && (
                            <NavMenu
                                currSection={props.currSection}
                                navData={props.navData}
                                handleClick={props.scrollToAnchor}
                            />
                        )}
                    </div>
                    <a className="header__menu-toggle hide-on-large-only" href="#0" title="Menu">
                        <span className="header__menu-icon"></span>
                    </a>
                </div>
            </div>
        )
    }
}
