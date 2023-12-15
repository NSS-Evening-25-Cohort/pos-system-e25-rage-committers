import firebase from 'firebase/app';
import 'firebase/auth';
import client from './client';
import startApp from './startApp';
import loginPage from '../pages/loginPage';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      startApp();
      // logoutButton();
    } else {
      loginPage();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
