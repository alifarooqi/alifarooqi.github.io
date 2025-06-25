import React, { ReactElement } from 'react';

// ICONS
import SvgIcon from '@mui/material/SvgIcon';
import ComputerIcon from '@mui/icons-material/Computer';
import InfoIcon from '@mui/icons-material/Info';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MapIcon from '@mui/icons-material/Map';
import CodeIcon from '@mui/icons-material/Code';
import LinkIcon from '@mui/icons-material/Link';
import WebIcon from '@mui/icons-material/Web';
import MailIcon from '@mui/icons-material/Mail';
import Twitter from '@mui/icons-material/Twitter';
import SecurityIcon from '@mui/icons-material/Security';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import TimerIcon from '@mui/icons-material/Timer';
import HandymanIcon from '@mui/icons-material/Handyman';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { ReactComponent as FacebookIcon } from '../assets/icons/facebook.svg';
import { ReactComponent as GitHubIcon } from '../assets/icons/github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/icons/linkedin.svg';
import { ReactComponent as CppIcon } from '../assets/icons/cplusplus-plain.svg';
import { ReactComponent as JavaIcon } from '../assets/icons/java-plain-wordmark.svg';
import { ReactComponent as ScalaIcon } from '../assets/icons/scala.svg';
import { ReactComponent as KotlinIcon } from '../assets/icons/kotlin.svg';
import { ReactComponent as AngularIcon } from '../assets/icons/angularjs-plain-wordmark.svg';
import { ReactComponent as JavaScriptIcon } from '../assets/icons/javascript-plain.svg';
import { ReactComponent as MongoDBIcon } from '../assets/icons/mongodb-plain-wordmark.svg';
import { ReactComponent as MySQLIcon } from '../assets/icons/mysql-plain-wordmark.svg';
import { ReactComponent as NodejsIcon } from '../assets/icons/nodejs-plain-wordmark.svg';
import { ReactComponent as PHPIcon } from '../assets/icons/php-plain.svg';
import { ReactComponent as ReactIcon } from '../assets/icons/react-original-wordmark.svg';
import { ReactComponent as TypeScriptIcon } from '../assets/icons/typescript-plain.svg';
import { ReactComponent as GraphQLIcon } from '../assets/icons/graphql.svg';
import { ReactComponent as TerraformIcon } from '../assets/icons/terraform.svg';
import { ReactComponent as PostgresIcon } from '../assets/icons/postgresql.svg';
import { ReactComponent as KubernetesIcon } from '../assets/icons/kubernetes.svg';
// ICONS END


type IconsType = Record<string, ReactElement>;

const Icons: IconsType = {
  email: <MailIcon />,
  facebook: <SvgIcon component={FacebookIcon} />,
  twitter: <Twitter />,
  github: <SvgIcon component={GitHubIcon} stroke="currentColor" strokeWidth={2} style={{ fill: 'none' }} />,
  linkedin: <SvgIcon component={LinkedInIcon} />,
  projects: <ComputerIcon />,
  about: <InfoIcon />,
  cpp: <SvgIcon component={CppIcon} viewBox="0 0 128 128" fontSize="large" title="C++" />,
  java: <SvgIcon component={JavaIcon} viewBox="0 0 128 128" fontSize="large" title="Java" />,
  typescript: <SvgIcon component={TypeScriptIcon} viewBox="0 0 128 128" fontSize="large" title="TypeScript" />,
  javascript: <SvgIcon component={JavaScriptIcon} viewBox="0 0 128 128" fontSize="large" title="JavaScript" />,
  mysql: <SvgIcon component={MySQLIcon} viewBox="0 0 128 128" fontSize="large" title="MySQL" />,
  php: <SvgIcon component={PHPIcon} viewBox="0 0 128 128" fontSize="large" title="PHP" />,
  mongodb: <SvgIcon component={MongoDBIcon} viewBox="0 0 128 128" fontSize="large" title="MongoDB" />,
  nodejs: <SvgIcon component={NodejsIcon} viewBox="0 0 128 128" fontSize="large" title="Node.js" />,
  react: <SvgIcon component={ReactIcon} viewBox="0 0 128 128" fontSize="large" title="React" />,
  angular: <SvgIcon component={AngularIcon} viewBox="0 0 128 128" fontSize="large" title="Angular" />,
  graphql: <SvgIcon component={GraphQLIcon} viewBox="0 0 400 400" fontSize="large" title="GraphQL" />,
  helpoutline: <HelpOutlineIcon />,
  map: <MapIcon />,
  code: <CodeIcon />,
  link: <LinkIcon />,
  web: <WebIcon />,
  security: <SecurityIcon />,
  energy: <EnergySavingsLeafIcon/>,
  smartToy: <SmartToyIcon/>,
  videoGame: <VideogameAssetIcon/>,
  timer: <TimerIcon/>,
  app: <AppShortcutIcon />,
  scala: <SvgIcon component={ScalaIcon} viewBox="0 0 590 270" fontSize="large" title="Scala" />,
  kotlin: <SvgIcon component={KotlinIcon} viewBox="0 0 24 24" fontSize="large" title="Kotlin" />,
  schedule: <ScheduleIcon />,
  tools: <HandymanIcon />,
  terraform: <SvgIcon component={TerraformIcon} viewBox="0 0 1024 1024" fontSize="large" title="Terraform" />,
  postgresql: <SvgIcon component={PostgresIcon} viewBox='0 0 128 128' fontSize="large" title="Postgres" />,
  kubernetes: <SvgIcon component={KubernetesIcon} viewBox='0 0 16 16' fontSize="large" title="Kubernetes" />,
};

type IconKey = keyof typeof Icons;

export { Icons, type IconKey, type IconsType };