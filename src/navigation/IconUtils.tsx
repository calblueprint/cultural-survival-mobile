import Icon from '../../assets/icons';

function handleGrants({ focused, color }: { focused: boolean; color: string }) {
  return focused ? (
    <Icon type="active_grants_icon" />
  ) : (
    <Icon type="inactive_grants_icon" />
  );
}
  
function handleHome({ focused, color }: { focused: boolean; color: string }) {
  return focused ? (
    <Icon type="active_home_icon" />
  ) : (
    <Icon type="inactive_home_icon" />
  );
}
  
function handleSearch({ focused, color }: { focused: boolean; color: string }) {
  return focused ? (
    <Icon type="active_search_icon" />
  ) : (
    <Icon type="inactive_search_icon" />
  );
}
  
function handleLibrary({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) {
  return focused ? (
    <Icon type="active_library_icon" />
  ) : (
    <Icon type="inactive_library_icon" />
  );
}

const handleFunctions = {
  handleGrants,
  handleHome,
  handleLibrary,
  handleSearch
};

export default handleFunctions;