import brandLogo from '../assets/logo.png'; // import logo
import brandLogoLight from '../assets/tap-logo.jpg'; // import white logo
import { headerWrap } from './variables';
import { navModal } from './variables';

export const loadNav = () => {
	const logoImgTemplate = `
    <nav class="nav-container">
      <div class="brand-logo-wrap">
        <img src="${brandLogo}" class="brand-logo" />
      </div>
    </nav>
`;

	const navModalTemplate = `
  <div class="container">
    <div class="brand-logo-wrap">
      <img src="${brandLogoLight}" class="brand-logo" />
    </div>

    <ul class="nav-links">
      <li class="link">
        <a href="/">Home</a>
      </li>
      <li class="link">
        <a href="/about.html">Meet The Art Preacher</a>
      </li>
      <li class="link">
        <a href="/catalog.html">Catalog</a>
      </li>
    </ul>

    <div class="close-btn">
      <i class="fa-solid fa-xmark"></i>
    </div>
  </div>
`;

	if (headerWrap) {
		headerWrap.innerHTML += logoImgTemplate;

		headerWrap.addEventListener('click', (e) => {
			navModal.classList.add('block');
			navModal.classList.add('show-nav-block');

			navModal.innerHTML += navModalTemplate;
		});
	}

	const mutationObserver = new MutationObserver((entries) => {
		const modalCloseBtn = document.querySelector('.close-btn');

		modalCloseBtn.addEventListener('click', () => {
			navModal.classList.remove('show-nav-block');
			navModal.classList.remove('block');

			navModal.innerHTML += '';
		});
	});

	// const config = {
	// 	childList: true,
	// 	subtree: true,
	// 	attributes: true,
	// };

	const parentElement = navModal;
	mutationObserver.observe(parentElement, {
		childList: true,
		subtree: true,
		attributes: true,
	});
};
