importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
<<<<<<< HEAD
	"https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
=======
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
>>>>>>> upstream/main
);

// Replace these with your own Firebase config keys...
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

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
<<<<<<< HEAD
	console.log(
		"[firebase-messaging-sw.js] Received background message ",
		payload
	);

	// payload.fcmOptions?.link comes from our backend API route handle
	// payload.data.link comes from the Firebase Console where link is the 'key'
	const link = payload.fcmOptions?.link || payload.data?.link;

	const notificationTitle = payload.notification.title;
	const notificationOptions = {
		body: payload.notification.body,
		icon: "./logo.png",
		data: { url: link },
	};
	self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("notificationclick", function (event) {
	console.log("[firebase-messaging-sw.js] Notification click received.");

	event.notification.close();

	// This checks if the client is already open and if it is, it focuses on the tab. If it is not open, it opens a new tab with the URL passed in the notification payload
	event.waitUntil(
		clients
			// https://developer.mozilla.org/en-US/docs/Web/API/Clients/matchAll
			.matchAll({ type: "window", includeUncontrolled: true })
			.then(function (clientList) {
				const url = event.notification.data.url;

				if (!url) return;

				// If relative URL is passed in firebase console or API route handler, it may open a new window as the client.url is the full URL i.e. https://example.com/ and the url is /about whereas if we passed in the full URL, it will focus on the existing tab i.e. https://example.com/about
				for (const client of clientList) {
					if (client.url === url && "focus" in client) {
						return client.focus();
					}
				}

				if (clients.openWindow) {
					console.log("OPENWINDOW ON CLIENT");
					return clients.openWindow(url);
				}
			})
	);
=======
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );

  // payload.fcmOptions?.link comes from our backend API route handle
  // payload.data.link comes from the Firebase Console where link is the 'key'
  const link = payload.fcmOptions?.link || payload.data?.link;

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "./logo.png",
    data: { url: link },
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("notificationclick", function (event) {
  console.log("[firebase-messaging-sw.js] Notification click received.");

  event.notification.close();

  // This checks if the client is already open and if it is, it focuses on the tab. If it is not open, it opens a new tab with the URL passed in the notification payload
  event.waitUntil(
    clients
      // https://developer.mozilla.org/en-US/docs/Web/API/Clients/matchAll
      .matchAll({ type: "window", includeUncontrolled: true })
      .then(function (clientList) {
        const url = event.notification.data.url;

        if (!url) return;

        // If relative URL is passed in firebase console or API route handler, it may open a new window as the client.url is the full URL i.e. https://example.com/ and the url is /about whereas if we passed in the full URL, it will focus on the existing tab i.e. https://example.com/about
        for (const client of clientList) {
          if (client.url === url && "focus" in client) {
            return client.focus();
          }
        }

        if (clients.openWindow) {
          console.log("OPENWINDOW ON CLIENT");
          return clients.openWindow(url);
        }
      })
  );
>>>>>>> upstream/main
});
