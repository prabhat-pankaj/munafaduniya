import { initializeApp } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { recomputeWallet } from "../src/wallet.js";

const [userId, withdrawalId, status, note = ""] = process.argv.slice(2);

if (!userId || !withdrawalId || !status) {
  console.error(
    "Usage: node scripts/update-withdrawal.mjs <userId> <withdrawalId> <approved|paid|rejected> [note]"
  );
  process.exit(1);
}

if (!["approved", "paid", "rejected"].includes(status)) {
  console.error("status must be approved, paid, or rejected.");
  process.exit(1);
}

initializeApp();
const db = getFirestore();

try {
  const ref = db.doc(`users/${userId}/withdrawals/${withdrawalId}`);
  const snapshot = await ref.get();
  if (!snapshot.exists) {
    throw new Error("Withdrawal request not found.");
  }

  await ref.set(
    {
      status,
      note,
      processedAt: FieldValue.serverTimestamp(),
      processedBy: "cli",
    },
    { merge: true }
  );

  const wallet = await recomputeWallet(userId);
  console.log(`Withdrawal ${withdrawalId} marked ${status}.`);
  console.log("Wallet:", wallet);
} catch (error) {
  console.error("Could not update withdrawal:", error.message);
  process.exit(1);
}
