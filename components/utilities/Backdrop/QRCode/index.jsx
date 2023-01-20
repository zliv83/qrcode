import styles from './QRCode.module.scss';

export default function QRCode() {
  return (
    <div className={styles.container}>
      <div className={styles.codeContainer}>
        <div className={styles.qrCode} />
        <div className={styles.text}>
          <div className={styles.title}>
            Improve your front-end skills by building projects
          </div>
          <div className={styles.subtitle}>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </div>
        </div>
      </div>
    </div>
  );
}
