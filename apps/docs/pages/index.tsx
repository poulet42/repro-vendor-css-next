import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
export default function Page(): JSX.Element {
  return (
    <Button appName="docs" className={styles.myButton}>
      I should be blue!
    </Button>
  );
}
