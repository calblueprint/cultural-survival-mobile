import { getNetworkStateAsync } from 'expo-network';

async function getConnectionState() {
  const networkState = await getNetworkStateAsync();
  return networkState.isConnected;
}
