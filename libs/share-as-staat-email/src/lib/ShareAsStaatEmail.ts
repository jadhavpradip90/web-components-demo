import React from "react";
import ReactDOM from "react-dom/client";
import r2wc from "react-to-webcomponent";
import ShareAsStaatEmailReact, { ShareAsStaatEmailReactProps } from "./components/react/ShareAsStaatEmailReact";

export const WebShareAsStaatEmail = r2wc<ShareAsStaatEmailReactProps>(ShareAsStaatEmailReact, React, ReactDOM, {
  props: {
    recipients: "string",
    subject: "string",
    body: "string",
  }
});

// customElements.define("share-as-staat-email", WebShareAsStaatEmail);