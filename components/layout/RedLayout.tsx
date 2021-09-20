import styles from './styles.module.css';

const RedLayout = (props: any) => {

  return (
    <div className={styles.redLayOut}>{props.children}</div>
  )
}

export default  RedLayout;