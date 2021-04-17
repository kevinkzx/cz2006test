import React from 'react';
import {
	CloseIcon,
	Icon,
	SidebarContainer,
	SidebarLink,
	SidebarMenu,
	SidebarRoute,
	SidebarWrapper,
	SideBtnWrap
} from "./SidebarElements";
import * as PropTypes from "prop-types";

/**
 * This component renders the side bar to show buttons in navbar, when the the page of the website is reduced horizontally
 */
class Sidebar extends React.Component {
	render() {
		let {isOpen, toggle} = this.props;
		return (
			<SidebarContainer isOpen={isOpen}
							  onClick={toggle}>
				<Icon onClick={toggle}>
					<CloseIcon/>
				</Icon>
				<SidebarWrapper>
					<SidebarMenu>
						<SidebarLink to="packages"
									 onClick={toggle}>
							Packages
						</SidebarLink>
						<SidebarLink to="parlours"
									 onClick={toggle}>
							Parlours
						</SidebarLink>
						<SidebarLink to="location"
									 onClick={toggle}>
							Location
						</SidebarLink>
						<SidebarLink to="information"
									 onClick={toggle}>
							Information
						</SidebarLink>
					</SidebarMenu>
					<SideBtnWrap>
						<SidebarRoute to="/signin">
							Sign In
						</SidebarRoute>
					</SideBtnWrap>
				</SidebarWrapper>
			</SidebarContainer>
		);
	}
}

Sidebar.propTypes = {
	isOpen: PropTypes.any,
	toggle: PropTypes.any
}

export default Sidebar;