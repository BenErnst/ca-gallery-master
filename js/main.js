'use strict';


$(onInit);


function onInit() {
    console.log('Starting...');
    renderPortfolios();
}

var portfolioCount = 1;

function renderPortfolios() {
    const $portfoliosContainer = $('#portfolio .container');
    var strHtmls = `<div class="row">
    <div class="col-lg-12 text-center">
    <h2 class="section-heading">Portfolio</h2>
    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
    </div>
    </div>
    <div class="row">`;

    strHtmls += gProjs.map(proj => {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${portfolioCount}">
        <div class="portfolio-hover">
        <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
        </div>
        </div>
        <img class="img-fluid" src="img/portfolio/${proj.id}.png" alt="">
        </a>
        <div class="portfolio-caption">
        <h4>${proj.title}</h4>
        <p class="text-muted">${proj.desc}</p>
        </div>
        </div>`;
    })

    // strHtmls = strHtmls.join('')
    $portfoliosContainer.html(strHtmls);
}
