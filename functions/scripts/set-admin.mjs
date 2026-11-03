import { initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const uid = process.argv[2];

if (!uid) {
  console.error("Usage: node scripts/set-admin.mjs <firebase-uid>");
  process.exit(1);
}

initializeApp();

try {
  const auth = getAuth();
  const user = await auth.getUser(uid);
  const claims = { ...(user.customClaims || {}), admin: true };
  await auth.setCustomUserClaims(uid, claims);
  console.log(`Admin claim set for ${uid}. The user must sign in again.`);
} catch (error) {
  console.error("Could not set admin claim:", error.message);
  process.exit(1);
}
