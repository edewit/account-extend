import {
  PersonalInfo,
  UserRepresentation,
  savePersonalInfo,
  useEnvironment,
} from "@keycloak/keycloak-account-ui";
import {
  Button,
  Page,
  PageSection,
  PageSectionVariants,
} from "@patternfly/react-core";
import style from "./App.module.css";

import viteLogo from "/vite.svg";

function App() {
  const context = useEnvironment();
  const submit = async (data: UserRepresentation) => {
    try {
      await savePersonalInfo(context, data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Page>
      <PageSection variant={PageSectionVariants.darker}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className={style.logo} alt="Vite logo" />
        </a>
        <Button
          variant="primary"
          onClick={() =>
            submit({
              firstName: "John Doe",
              email: "john.doe@example.com",
            })
          }
        >
          Save
        </Button>
      </PageSection>
      <PersonalInfo />
    </Page>
  );
}

export default App;
