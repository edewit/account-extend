import "@patternfly/react-core/dist/styles/base.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  KeycloakProvider,
  AccountEnvironment,
} from "@keycloak/keycloak-account-ui";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <KeycloakProvider
      environment={
        {
          authServerUrl: "http://localhost:8180",
          realm: "master",
          clientId: "security-admin-console-v2",
          features: {
            isRegistrationEmailAsUsername: false,
            isEditUserNameAllowed: true,
            isInternationalizationEnabled: true,
            isLinkedAccountsEnabled: true,
            isEventsEnabled: true,
            isMyResourcesEnabled: true,
            isTotpConfigured: true,
            deleteAccountAllowed: true,
            updateEmailFeatureEnabled: true,
            updateEmailActionEnabled: true,
            isViewGroupsEnabled: true,
          },
        } as AccountEnvironment
      }
    >
      <App />
    </KeycloakProvider>
  </React.StrictMode>
);
