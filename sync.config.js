let mongoId = process.env.REACT_APP_ID;
if (!mongoId) {
  console.error("No MongoDB App ID");
  mongoId = mongoId = "";
}
export const SYNC_CONFIG = {
	// Set `enabled` to `true` to enable sync.
	enabled: true,
	// Add your Realm App ID here if sync is enabled.
	appId: mongoId,
};
