import styles from './RemarkList.module.scss';

export function RemarkList(props) {
  return (
    <ul {...props} className={styles['list']}>
      {props.children}
    </ul>
  );
}

export function RemarkListItem(props) {
  return (
    <li {...props} className={styles['list-item']}>
      {props.children}
    </li>
  );
}
