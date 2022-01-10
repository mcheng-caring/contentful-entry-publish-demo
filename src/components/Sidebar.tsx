import { PlainClientAPI } from 'contentful-management';
import { SidebarExtensionSDK } from '@contentful/app-sdk';
import PublishButton from './PublishButton';

interface SidebarProps {
  sdk: SidebarExtensionSDK;
  cma: PlainClientAPI;
}

const Sidebar = (props: SidebarProps) => {
  return <PublishButton sdk={props.sdk} cma={props.cma} />
};

export default Sidebar;
