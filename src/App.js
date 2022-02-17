import React, { useState } from "react";
import { ConnectMono } from "./MonoConnect";
import "./styles.css";
export default function App() {
  const [codeId, setCodeId] = useState();
  React.useEffect(() => {
    console.log(codeId, "hdjhdjkdhkjdhjkdh");
  }, [codeId]);
  return (
    <div className="App">
      <div style={{ margin: 40 }} />

      <ConnectMono
        publicKey="pub_key_mono"
        secKey="sec_key_mono"
        setCodeId={setCodeId}
        text="Mono Bank Account"
        buttonStyle={{
          width: 200,
          height: 40,
          textColor: "white",
          background: "green",
          border: 0,
          borderRadius: 0
        }}
      />
      <h4>User_Id : {codeId}</h4>
    </div>
  );
}
