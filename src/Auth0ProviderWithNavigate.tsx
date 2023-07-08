// import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import { Auth0Provider } from "@auth0/auth0-react";

interface Props {
  children: JSX.Element | JSX.Element[]
}
export const Auth0ProviderWithNavigate = ({ children }: Props) => {

  const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN!;
  const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID!;
  const redirectUri = import.meta.env.VITE_APP_AUTH0_CALLBACK_URL;
  const audience = import.meta.env.VITE_APP_AUTH0_AUDIENCE;

  // const onRedirectCallback = (appState?: AppState, user?: User) => {
  //   navigate(appState?.returnTo || window.location.pathname);
  // };

  if (!(domain && clientId && redirectUri && audience)) {
    console.log(import.meta);
    console.log(import.meta.env);

    const text = `domain: ${domain}, clientId: ${clientId}, audience: ${audience}`;
    return <h1>Invalid auth0 {text}</h1>;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        audience: audience,
        redirect_uri: window.location.origin,
      }}
    >
      {children}
    </Auth0Provider>
  );
};
