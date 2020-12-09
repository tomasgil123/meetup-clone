import auth0 from '../../auth/auth0'

export default async function login(req, res) {
  //is difficult to tell the header which language the page has
  //for the time being we will hardcode the value to en

  const typeAction = req.query.typeAction
  let redirect = '/en/my-profile/events'
  if (typeAction === 'login') {
    redirect = '/en/my-profile/name'
  }
  try {
    await auth0.handleLogin(req, res, { redirectTo: redirect })
  } catch (error) {
    console.error(error)
    res.status(error.status || 500).end(error.message)
  }
}
