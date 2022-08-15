// import DPlayer from '../../src/index';
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { faPenToSquare, faLink } from '@fortawesome/free-solid-svg-icons';
// import { faGithub, faTwitter, faTelegram, faDiscord, faReddit } from '@fortawesome/free-brands-svg-icons';
// import { defineClientConfig } from '@vuepress/client';

// library.add(faPenToSquare, faLink, faGithub, faTwitter, faTelegram, faDiscord, faReddit);

// export default defineClientConfig({
//     enhance({ app, router, siteData }) {
//         app.component('font-awesome-icon', FontAwesomeIcon);
//         app.use(ElementPlus);

//         // @ts-ignore
//         if (!__VUEPRESS_SSR__) {
//             app.config.globalProperties.Unidata = Unidata;
//             app.config.globalProperties.unidata = new Unidata({
//                 moralisWeb3APIKey: 'dCYUW7mpC8lJJitfSX5nsgWBREkBIb5SW1OfFlDLiV7A0v4b2vubtkpQXsBrXqt0',
//                 alchemyEthereumAPIKey: '4h0_z1B6WEmj9hp1HJZm7ujeWZpLR6rv',
//                 alchemyPolygonAPIKey: 'm1tznK8U8nVecA0Zime5dzF8Pb2av70q',
//                 alchemyFlowAPIKey: 'op8m1oqlivm297iodsezvn3hoya9960u',
//                 nftscanAPIKey: 'YdKYhj6I',
//             });

//             (<any>window).unidata = app.config.globalProperties.unidata;
//         }
//     },
// });
