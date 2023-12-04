// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { Button } from '@fluentui/react-components';

export function App() {
  const addShareLinks = React.useCallback(() => {
    const container = document.getElementById("shareContainer");
    const element = document.createElement("share-as-staat-email");
    element.setAttribute("subject", "Email Subject");
    element.setAttribute("recipients", "pradip.jadhav@ubs.com");
    element.setAttribute("body", "This is email Body");
    (container as Node).appendChild(element);
  }, []);

  return (
    <div>
      <Button onClick={addShareLinks}>Add Share As Staat Email</Button>
      <div id="shareContainer">
        
      </div>
    </div>
  );
}

export default App;
