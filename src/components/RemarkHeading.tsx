import styles from './RemarkHeading.module.scss';

export function RemarkHeading2(props) {
  return (
    <h2 {...props} className={styles['heading2']}>
      <span>{props.children}</span>
    </h2>
  );
}

export function RemarkHeading3(props) {
  return (
    <h3 {...props} className={styles['heading3']}>
      <span>{props.children}</span>
    </h3>
  );
}
