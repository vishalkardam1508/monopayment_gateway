import React from "react";
import MonoConnect from "@mono.co/connect.js";

export const ConnectMono = (props) => {
  const ButtonStyle = props.buttonStyle;
  const PubKey = props.publicKey;
  const SecKey = props.secKey;
  const style = {
    width: ButtonStyle.width ? ButtonStyle.width : 100,
    minHeight: ButtonStyle.height ? ButtonStyle.height : 40,
    background: ButtonStyle.background ? ButtonStyle.background : "red",
    color: ButtonStyle.textColor ? ButtonStyle.textColor : "#fff",
    border: ButtonStyle.border ? ButtonStyle.border : "none",
    borderRadius: ButtonStyle.borderRadius ? ButtonStyle.borderRadius : 0
  };
  const monoConnect = React.useMemo(() => {
    const monoInstance = new MonoConnect({
      onClose: () => console.log("Widget closed"),
      onLoad: () => console.log("Widget loaded successfully"),
      onSuccess: async ({ code }) => {
        await getAuthMono(code);
        console.log("User Connect Successfully with Mono");
      },
      key: PubKey
    });

    monoInstance.setup();

    return monoInstance;
  }, []);

  async function getAuthMono(code) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("mono-sec-key", SecKey);

    var raw = JSON.stringify({
      code: code
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const authdata = await fetch(
      "https://api.withmono.com/account/auth",
      requestOptions
    )
      .then((response) => response.json())
      .then(async (result) => {
        await props.setCodeId(result?.id);
        console.log(result, "djhd");
      })
      .catch(async (error) => console.log("error", error));
    console.log(authdata);
  }
  return (
    <div>
      <button style={style} onClick={() => monoConnect.open()}>
        {props.text === "" ? "Link account with Mono" : props.text}
      </button>
    </div>
  );
};
