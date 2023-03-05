let mongoId = process.env.REACT_APP_ID;
if (!mongoId) {
  // eslint-disable-next-line no-console
  console.error('No MongoDB App ID');
  // TODO @david: fix mongoID checking, make sure that errors are more debuggable.
  mongoId = '';
}
const SYNC_CONFIG = {
  // Set `enabled` to `true` to enable sync.
  enabled: true,
  // Add your Realm App ID here if sync is enabled.
  appId: mongoId,
};
export default SYNC_CONFIG;
