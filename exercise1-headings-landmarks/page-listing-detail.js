import React from 'react';
import BodyClassName from 'react-body-classname';
import sanitizeHtml from 'sanitize-html';
import { Helmet } from 'react-helmet';
import LoadedImageUrl from 'components/utils/loaded-image-url';

import 'components/styles/page-listings.scss';

import HeaderPortal from 'components/header-portal';
import Icon from 'components/icon';
import ListingsData from 'data/listings.json';
import DatePicker from 'components/date-picker/date-picker';

import * as imageURLs from '../images/listings/*.{png,jpg}';

const Exercise1ListingPage = props => {
	const data = ListingsData.listings[props.id];
	const headerImageUrl = LoadedImageUrl(imageURLs, data.detailHeaderImageSrc);
	return (
		<BodyClassName className='header-overlap page-listing-detail'>
			<>
				<HeaderPortal>
					<h1 className='visually-hidden'>Camp Spots</h1>
				</HeaderPortal>
				<article>
					<header
						className='page-header'
						style={{ backgroundImage: `url(${headerImageUrl}` }}>
						<div className='page-header-content wide-layout'>
							<h2 className='listing-name'>{data.listingName}</h2>
							<p className='location'>{data.location}</p>
						</div>
					</header>
					<section
						className='wide-layout two-parts-70-30'
						aria-label='Site description and booking calendar'>
						<div>
							<h3 className='h4-style'>Description</h3>
							<div
								className='description-text'
								dangerouslySetInnerHTML={{
									__html: sanitizeHtml(data.description),
								}}
							/>

							<h3 className='h4-style'>Amenities</h3>
							<ul className='amenity-icons grid'>
								{data.amenities.map((amenity, index) => {
									return (
										<li key={index}>
											<Icon
												name={amenity}
												showText={true}
											/>
										</li>
									);
								})}
							</ul>
						</div>
						<div>
							<h3 className='h4-style'>Calendar</h3>
							<DatePicker />
						</div>
					</section>
					<section className='wide-layout' aria-label='Image gallery'>
						<h3>Image Gallery</h3>
						<div className='detail-images'>
							{data.detailImages.map((image, index) => {
								let detailImageUrl = LoadedImageUrl(
									imageURLs,
									image.imageSrc
								);
								return (
									<img
										key={index}
										src={detailImageUrl}
										alt={image.imageAlt}
									/>
								);
							})}
						</div>
					</section>
				</article>
			</>
		</BodyClassName>
	);
};

export default Exercise1ListingPage;
