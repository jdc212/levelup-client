import styles from "./SearchBar.module.css";

export function SearchBar(props) {
  return (
    <div className={styles.sectionfaq}>
      <h3 className={styles.title}>Search User Points</h3>
      <div className={styles.faqbox}>
        <div className={styles.faqitem}>
          <input
            type="text"
            area="searchParams"
            className={styles.searchBar}
            placeholder={props.placeholder}
            onKeyUp={(event) => {
              props.filterAPI(event.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
