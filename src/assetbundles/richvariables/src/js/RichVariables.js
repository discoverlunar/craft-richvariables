// Import our CSS
import '@css/app.pcss';
import '@img/RichVariables-icon.svg';
import '@img/RichVariables-menu-icon.svg';

const main = async () => {
};

main().then({});

// Accept HMR as per: https://webpack.js.org/api/hot-module-replacement#accept
if (module.hot) {
    module.hot.accept();
}
