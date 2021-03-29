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

const Sidebar = ({isOpen, toggle}) => {
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
};

export default Sidebar;