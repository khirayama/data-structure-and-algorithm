import styles from './RemarkParagraph.module.scss';

export function RemarkParagraph(props) {
  return (
    <p {...props} className={styles['paragraph']}>
      {props.children}
    </p>
  );
}
