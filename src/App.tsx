import { Page } from "@patternfly/react-core";
import { PersonalInfo, savePersonalInfo, useEnvironment } from "keycloak-account-ui";
import viteLogo from "/vite.svg";
import './i18n';
import "./App.css";

function App() {
  const context = useEnvironment();
  const submit = async (data) => {
    try {
      await savePersonalInfo(context, data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Page>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <PersonalInfo />
    </Page>
  );
}

export default App;
