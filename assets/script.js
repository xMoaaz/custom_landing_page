// variables
const pageIntro = document.querySelector('.page-intro');
const pageDetails = document.querySelector('.page-details');

const ctaHandler = () => {
    /* page intro */
    pageIntro.style.scale = 0;
    pageIntro.style.opacity = 0;
    setTimeout(() => {
        pageIntro.style.display = "none";
    }, 500)
    
    pageDetails.style.display = "block";
    setTimeout(() => {
        pageDetails.style.opacity = 1;
        pageDetails.style.transform = "translateY(0)";
    }, 500)
    /* page details */
}