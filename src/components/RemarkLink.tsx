import Link from 'next/link';
import styles from './RemarkLink.module.scss';

export function RemarkLink(props) {
  /* FIXME Link component might not work with anchor link in other page */
  /* https://github.com/vercel/next.js/issues/11109 */
  // if (props.href.indexOf('/') === 0) {
  //   return (
  //     <Link {...props}>
  //       <a {...props} className={styles['link']}>
  //         {props.children}
  //       </a>
  //     </Link>
  //   );
  // }
  return (
    <a {...props} className={styles['link']}>
      {props.children}
    </a>
  );
}
