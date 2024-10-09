import { getApp, getApps, initializeApp } from "firebase/app";
import { getMessaging, getToken, isSupported } from "firebase/messaging";

// Replace the following with your app's Firebase project configuration
const firebaseConfig = {
<<<<<<< HEAD
	apiKey: "AIzaSyAcK-965nxG3efqMa9RzxILW4_qJEENHAY",
	authDomain: "pwa-new-notification.firebaseapp.com",
	projectId: "pwa-new-notification",
	storageBucket: "pwa-new-notification.appspot.com",
	messagingSenderId: "821297853926",
	appId: "1:821297853926:web:4ca4574a9126f1f6759227",
	measurementId: "G-E3EL0SKPZC",
=======
  apiKey: "AIzaSyBpYg-KAzwWGaT3g7J8smjnNqP8N8Nj8vQ",
  authDomain: "penpalmagicapp.firebaseapp.com",
  projectId: "penpalmagicapp",
  storageBucket: "penpalmagicapp.appspot.com",
  messagingSenderId: "45289060638",
  appId: "1:45289060638:web:33121bc47d40ceef83f10f",
  measurementId: "G-FG3MPZ8JV6"
>>>>>>> upstream/main
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const messaging = async () => {
<<<<<<< HEAD
	const supported = await isSupported();
	return supported ? getMessaging(app) : null;
};

export const fetchToken = async () => {
	try {
		const fcmMessaging = await messaging();
		if (fcmMessaging) {
			const token = await getToken(fcmMessaging, {
				vapidKey: process.env.NEXT_PUBLIC_FIREBASE_FCM_VAPID_KEY,
			});
			return token;
		}
		return null;
	} catch (err) {
		console.error("An error occurred while fetching the token:", err);
		return null;
	}
=======
  const supported = await isSupported();
  return supported ? getMessaging(app) : null;
};

export const fetchToken = async () => {
  try {
    const fcmMessaging = await messaging();
    if (fcmMessaging) {
      const token = await getToken(fcmMessaging, {
        vapidKey: process.env.NEXT_PUBLIC_FIREBASE_FCM_VAPID_KEY,
      });
      return token;
    }
    return null;
  } catch (err) {
    console.error("An error occurred while fetching the token:", err);
    return null;
  }
>>>>>>> upstream/main
};

export { app, messaging };
