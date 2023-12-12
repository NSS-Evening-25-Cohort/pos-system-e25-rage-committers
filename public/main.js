// USE WITH FIREBASE AUTH
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  ViewDirectorBasedOnUserAuthStatus();
  console.warn('YOU ARE UP AND RUNNING!');
};

init();
