import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8099/auth/realms/demo/protocol/openid-connect/auth",
  realm: "demo",
  clientId: "demo-client",
});

export default keycloak;
