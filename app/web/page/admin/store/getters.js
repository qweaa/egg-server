const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  app_data: state => state.app.appData,
  user: state => state.user.user,
  permission_routes: state => state.permission.routes,
}
export default getters