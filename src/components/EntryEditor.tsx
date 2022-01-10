import { PlainClientAPI } from 'contentful-management';
import { EditorExtensionSDK } from '@contentful/app-sdk';
import PublishButton from './PublishButton';

interface EditorProps {
  sdk: EditorExtensionSDK;
  cma: PlainClientAPI;
}

const Entry = (props: EditorProps) => {
  return <PublishButton sdk={props.sdk} cma={props.cma} />
};

export default Entry;
