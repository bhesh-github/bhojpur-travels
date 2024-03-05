import styles from "components/templates/base/basetemplate.module.css";
import { FC } from "react";

export interface IBaseTemplateProps {
  stringProps: string;
}

const BaseTemplate: FC<IBaseTemplateProps> = ({ stringProps }) => {
  return <div className={styles.container}>{stringProps}</div>;
};

export default BaseTemplate;
