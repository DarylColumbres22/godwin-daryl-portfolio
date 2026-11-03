import { FiCpu, FiInbox, FiMonitor, FiShare2, FiSmartphone, FiZap } from 'react-icons/fi';

/** Glyph used on a project's thumbnail until a real screenshot is supplied. */
export const projectIcons = {
  automation: FiZap,
  inbox: FiInbox,
  robot: FiCpu,
  device: FiSmartphone,
  network: FiShare2,
  web: FiMonitor,
};

export function getProjectIcon(key) {
  return projectIcons[key] || FiZap;
}
