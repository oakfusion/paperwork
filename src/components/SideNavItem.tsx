import React from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { ISideNavItemProps } from "../helpers/helpers";
import { Icon, InlineIcon } from '@iconify/react';
import {Link} from "gatsby"

const SideNavItem = (props:ISideNavItemProps) => {
    const {name, slug, icon} = props;
    return (
        <Link activeClassName="active-side-link" className="side-nav-item-link flex align-center trans-03s" to={slug}>
            <Icon className="side-nav-item-icon" icon={icon} />
            <div  className="side-nav-text">
                {name}
            </div>
        </Link>
    )
}

export default SideNavItem
