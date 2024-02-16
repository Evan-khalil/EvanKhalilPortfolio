// ProjectsHighlights.js

import React from 'react';
import './ProjectsHighlights.css';

const ProjectsHighlights = () => {
  return (
    <section id="Projects" className="projects-section">
      <div className="section-header">
        <div className="SectionHeaders">Project Highlights</div>
        <hr />
      </div>
      <div id="projectsection" className="row">
        <div className="col-12">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="false">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="embed-responsive embed-responsive-4by3">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/1m4SZ1GNv8k" title="YouTube video player" frameborder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                           
                </div>          
              </div>
              <div className="carousel-item">
                {/* Add more carousel items as needed */}
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsHighlights;
