<<<<<<< HEAD
// import admin from "firebase-admin";
// import { Message } from "firebase-admin/messaging";
// import { NextRequest, NextResponse } from "next/server";
// import knock from "@/knock"; // Assuming Knock setup is in lib/knock.ts

// // Initialize Firebase Admin SDK
// if (!admin.apps.length) {
// 	const serviceAccount = require("@/service_key.json");
// 	admin.initializeApp({
// 		credential: admin.credential.cert(serviceAccount),
// 	});
// }

// export async function POST(request: NextRequest) {
// 	const { token, title, message, link } = await request.json();

// 	const payload: Message = {
// 		token,
// 		notification: {
// 			title: title,
// 			body: message,
// 		},
// 		webpush: link && {
// 			fcmOptions: {
// 				link,
// 			},
// 		},
// 	};

// 	try {
// 		await admin.messaging().send(payload);

// 		return NextResponse.json({ success: true, message: "Notification sent!" });
// 	} catch (error) {
// 		return NextResponse.json({ success: false, error });
// 	}
// }

import admin from "firebase-admin";
import { Message } from "firebase-admin/messaging";
import { NextRequest, NextResponse } from "next/server";
import knock from "@/knock"; // Assuming Knock setup is in lib/knock.ts
import { Knock } from "@knocklabs/node";

if (!admin.apps.length) {
	const serviceAccount = require("@/service_key.json");
	admin.initializeApp({
		credential: admin.credential.cert(serviceAccount),
	});
}

export async function POST(request: NextRequest) {
	const { token, title, message, link } = await request.json();

	// Prepare Firebase payload
	const firebasePayload: Message = {
		token,
		notification: {
			title: title,
			body: message,
		},
		webpush: link && {
			fcmOptions: {
				link,
			},
		},
	};

	try {
		// Send notification via Firebase
		await admin.messaging().send(firebasePayload);

		// Send notification via Knock
		await knock.workflows.trigger("notification-key", {
			recipients: ["user-id"],
			data: {
				title: title,
				message: message,
				link: link,
			},
		});

		return NextResponse.json({
			success: true,
			message: "Notification sent via Firebase and Knock!",
		});
	} catch (error) {
		return NextResponse.json({ success: false, error });
	}
=======
import admin from "firebase-admin";
import { Message } from "firebase-admin/messaging";
import { NextRequest, NextResponse } from "next/server";

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  const serviceAccount = require("@/service_key.json");
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export async function POST(request: NextRequest) {
  const { token, title, message, link } = await request.json();

  const payload: Message = {
    token,
    notification: {
      title: title,
      body: message,
    },
    webpush: link && {
      fcmOptions: {
        link,
      },
    },
  };

  try {
    await admin.messaging().send(payload);

    return NextResponse.json({ success: true, message: "Notification sent!" });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
>>>>>>> upstream/main
}
