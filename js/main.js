'use strict';


$(onInit);


function onInit() {
    console.log('Starting...');
    renderPortfolios();
    renderModals();
}


function renderPortfolios() {
    var modalCount = 0;
    const $portfoliosContainer = $('#portfolio .container');

    // moving back to HTML:
    var strHtmls = `<div class="row">
    <div class="col-lg-12 text-center">
    <h2 class="section-heading">Portfolio</h2>
    <h3 class="section-subheading text-muted">MY PROJECTS</h3>
    </div>
    </div>
    <div class="row">`;

    strHtmls += gProjs.map(proj => {
        return `<div class="col-xs-4 col-sm-4 col-lg-3 portfolio-item m-auto">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${modalCount++}">
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

    // strHtmls = strHtmls.join('') //no need
    $portfoliosContainer.html(strHtmls);
}


function renderModals() {
    var modalCount = 0;
    const $modals = $('.modals');

    const strHtmls = gProjs.map(proj => {
        return `<div class="portfolio-modal modal fade" id="portfolioModal${modalCount++}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog"><div class="modal-content bg-light"><div class="close-modal" data-dismiss="modal">
        <div class="lr"><div class="rl"></div></div></div><div class="container"><div class="row">
        <div class="col-lg-8 mx-auto"><div class="modal-body">
        <h2>${proj.name}</h2>
        <p class="item-intro text-muted">${proj.desc}</p>
        <img class="img-fluid d-block mx-auto" src="img/portfolio/modal/${proj.id}.png" alt="">
        <ul class="list-inline"><li><a href="${proj.url}" target="_blank">CHECK IT OUT</a></li>
        <li>Date: ${getDate(proj.publishedAt)}</li>
        <li>Client: Misterbit</li>
        <li>Category: ${proj.labels}</li></ul>
        <button class="btn btn-primary" data-dismiss="modal" type="button">
        <i class="fa fa-times"></i>Close Project</button>
        </div></div></div></div></div></div></div>`;
    })

    $modals.html(strHtmls);
}


function onSubmit() {
    const $email = $('#email-input').val();
    const $subject = $('#subject-input').val();
    const $message = $('#message-body-input').val();

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=benernst3@gmail.com&su=${$subject}&body=${$message}. From: ${$email}`);

    // Could be in another function:
    $('#email-input').val('');
    $('#subject-input').val('');
    $('#message-body-input').val('');
}


