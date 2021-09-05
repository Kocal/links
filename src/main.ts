import './tailwind.css';
import { createApp } from 'vue';
import App from './App.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faTwitter, faGithub);

const app = createApp(App);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.mount('#app');
