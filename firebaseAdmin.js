import admin from "firebase-admin";
import { readFileSync } from "fs";

const serviceAccount = JSON.parse(readFileSync("serviceAccountKey.json", "utf8"));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com"
});

export const db = admin.firestore();
