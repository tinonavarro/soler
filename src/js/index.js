import { verifyMobile, setMobileClass } from "./modules/isMobile";
import {
  d,
  w,
  dd,
  c,
  log,
  dir,
  id,
  q,
  all,
  body,
  cssScrollBarWidth
} from "./modules/initialVariables";
import { loading } from "./modules/loading";
import { scrollTo } from "./modules/scrollSmooth";
import { activeMenu, toggleMenu } from "./modules/active-menu";
import { getProducts } from "./modules/products";

setMobileClass(dd, "mobile", "desktop");

// activeMenu();

const loadingEle = document.getElementById("loading");

addEventListener("load", () => {
  cssScrollBarWidth();
  setMobileClass(dd, "mobile", "desktop");
  if (loadingEle) loading(loadingEle, 500);
});

addEventListener("resize", () => {
  cssScrollBarWidth();
  setMobileClass(dd, "mobile", "desktop");
});

const setCurrentYear = ele => {
  ele.innerText = new Date().getFullYear();
};

const currentYearElement = id("currentYear");
if (currentYearElement) setCurrentYear(currentYearElement);

(function() {
  scrollTo(".scroll", false, ".main-header");
})();

toggleMenu(verifyMobile(), "#toggle", "#main-menu");

const mySlider = q(".my-slider");

//
if (mySlider) {
  const time = 5000;
  let slide = tns({
    container: ".my-slider",
    items: 1,
    slideBy: 1,
    autoplay: true,
    controls: true,
    nav: true,
    controlsText: [
      '<img alt="" src="img/icons/left-arrow.svg">',
      '<img alt="" src="img/icons/right-arrow.svg">'
    ],
    fixedWidth: false,
    autoWidth: false,
    speed: 600,
    animateDelay: time,
    arrowKeys: true,
    lazyload: true,
    freezable: false,
  });
}

const bannerContent = q('.banner-content')

if (bannerContent){
  let bannerContentHeight = bannerContent.clientHeight
  dd.style.setProperty('--banner-data-height', `${bannerContentHeight * .6}px`)

}

const productsShow = id('productsShoW')
const productsList = id('productsList')

if (productsShow && productsList) getProducts(productsList,productsShow)
