import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import './banner.css';

export class Banner extends React.Component {

	render() {

		const images = [
			{
				original: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/4v.jpg',
				description: 'Tuesday, 30 October Skypark Arena Astro Turf (Pitch 1) 8pm - 10pm'
				
			},
			{
				original: 'https://github.com/xiaolin/react-image-gallery/raw/master/static/image_gallery.gif',

			},
		];

		return (
			/* Wrap the component with className = 'img-gallery' to follow design responsiveness */
			<div className="banner">
				<div className = 'img-gallery'>
					<ImageGallery items={images} showThumbnails={false} />
				</div>
			</div>
		);
	}

}

export default Banner;