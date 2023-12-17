// Create the HTML code you want to inject
const htmlToInject = '<a rel="me" href="https://mastodon.social/@kimiblockmoe"></a>';

// Find the target element where you want to inject the HTML
const targetElement = document.body;

// Inject the HTML at the beginning of the target element
targetElement.insertAdjacentHTML('afterbegin', htmlToInject);

