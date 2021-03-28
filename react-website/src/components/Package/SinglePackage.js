import React from 'react';
import {
	PackageInfor,
	SinglePackageContainer,
	SinglePackageDesc,
	SinglePackageImage,
	SinglePackageInfo
} from "./PackageElements";

const SinglePackage = () => {
	return (
		<>
		<SinglePackageContainer>
			<SinglePackageImage>

			</SinglePackageImage>
			<SinglePackageInfo>
				<SinglePackageDesc>

				</SinglePackageDesc>
				<PackageInfor>

				</PackageInfor>

			</SinglePackageInfo>

		</SinglePackageContainer>
		</>
	);
};

export default SinglePackage;