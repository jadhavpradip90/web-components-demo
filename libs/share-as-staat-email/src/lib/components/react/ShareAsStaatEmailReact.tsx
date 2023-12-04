import React from "react";
import { Link } from '@fluentui/react-components';
/* eslint-disable-next-line */
export interface ShareAsStaatEmailReactProps {
  recipients: string;
  subject: string;
  body: string;
}

export function ShareAsStaatEmailReact(props: ShareAsStaatEmailReactProps) {
  console.log("Props :: ", props);
  const { recipients, subject, body } = props;

  const onLinkClick = React.useCallback(() => {
    setTimeout(() => {
      console.log("recipients :: ", recipients);
      console.log("subject :: ", subject);
      console.log("body :: ", body);
    }, 100);
  }, [recipients, subject, body]);

  return (
    <Link onClick={onLinkClick}>Share as STAAT Email</Link>
  );
}

export default ShareAsStaatEmailReact;
