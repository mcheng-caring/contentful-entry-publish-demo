import { useState } from "react";
import {
  EditorExtensionSDK,
  FieldExtensionSDK,
  SidebarExtensionSDK,
} from "@contentful/app-sdk";
import {
  Card,
  Button,
  Typography,
  Paragraph,
} from "@contentful/forma-36-react-components";
import { PlainClientAPI } from "contentful-management";

export interface PublishButtonProps {
  cma: PlainClientAPI;
  sdk: EditorExtensionSDK | FieldExtensionSDK | SidebarExtensionSDK;
}

const PublishButton = (props: PublishButtonProps) => {
  const { sdk } = props;
  const [message, setMessage] = useState("idle");

  const handlePublish = () => {
    console.log("publishing...");
    setMessage("publishing...");
    sdk.entry
      .publish()
      .then((value) => {
        console.log("%csuccessful publish", "color: green", value);
        setMessage("successful publish");
      })
      .catch((error) => {
        console.error("%cpublish failed", "color: red", error);
        setMessage("publish failed");
      });
  };

  return (
    <Card>
      <Typography>
        <Paragraph>{message}</Paragraph>
      </Typography>
      <Button onClick={handlePublish}>Publish</Button>
    </Card>
  );
};

export default PublishButton;
