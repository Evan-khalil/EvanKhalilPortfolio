import React from 'react';
import './Carousel.css';

const VideoCarousel = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-12 text-center">
          <div id="video-carousel" className="carousel slide" data-bs-ride="carousel">
            {/* Indicators */}
            <ol className="carousel-indicators">
              <li data-bs-target="#video-carousel" data-bs-slide-to="0" className="active"></li>
              <li data-bs-target="#video-carousel" data-bs-slide-to="1"></li>
              <li data-bs-target="#video-carousel" data-bs-slide-to="2"></li>
              <li data-bs-target="#video-carousel" data-bs-slide-to="3"></li>
              <li data-bs-target="#video-carousel" data-bs-slide-to="4"></li>
            </ol>

            {/* Wrapper for slides */}
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="inner-content vid-inner-content">
                  <div className="embed-responsive embed-responsive-16by9">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/1m4SZ1GNv8k?si=JjI1FxuRlidg-xTj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="inner-content vid-inner-content">
                  <div className="embed-responsive embed-responsive-16by9">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/gSwQwyqYXuU?si=FGeXHXubbb36YMHw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                  </div>
                </div>
              </div>
              {/* Add more carousel items for other videos */}
            </div>
            
            {/* Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#video-carousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#video-carousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCarousel;
