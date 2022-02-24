# monopayment_gateway

MonoPaymentGateway for connect nigirea bank account

# monopayment_gateway

[visit mono](https://mono.co/) and create account and get public_key
and sec_key

```js
import React, { useState } from "react";
import { ConnectMono } from "./MonoConnect";
export default function App() {
  const [codeId, setCodeId] = useState();
  return (
    <div className="App">
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
```

#Contributers
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<td align="center">
		<a href="https://in.linkedin.com/in/vishal-kardam-425186220">
			<img src="https://avatars.githubusercontent.com/u/90035664?v=4" width="100px;" alt="Vishal Kardam"/>
			<br />
			<sub><b>Vishal kardam</b></sub>
		</a><br />
		<a href="#ideas-vishalkardam" title="Ideas, Planning, & Feedback">🤔</a> 
		<a href="#" title="Code">💻</a> 
		<a href="https://github.com/vishalkardam1508" title="Documentation">📖</a>
	</td>


> Please see full example.
