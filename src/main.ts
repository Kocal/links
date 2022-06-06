import './tailwind.css';
import { createApp } from 'vue';
import App from './App.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBlog, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faGithub, faStrava } from '@fortawesome/free-brands-svg-icons';

library.add(faBlog, faBookOpen, faInstagram, faTwitter, faGithub, faStrava);

const app = createApp(App);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.mount('#app');
