import styles from "./page.module.css";
import { Button } from "@repo/ui/button";

export default function Page(): JSX.Element {
  return (
    <Button appName="web" className={styles.button}>
      I should be blue !
    </Button>
  );
}
