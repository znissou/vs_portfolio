import Link from 'next/link';
import Image from "next/image";
import styles from '../styles/HomePage.module.css';
import getExperience from './api/experience';

export default function HomePage({ experience }) {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.textSection}>
            <h1 className={styles.name}>Anis Zouaghi</h1>
            <h2 className={styles.title}>Software Engineer</h2>

            <p className={styles.description}>
              Experienced Software Engineer at DZExpert with a strong background in developing and
              maintaining high-performance applications. Proficient in multiple programming languages
              and frameworks, I leverage my skills to drive innovation and efficiency in every project.
            </p>

            <div className={styles.expertise}>
              <div className={styles.expertiseTitle}>Specialization</div>
              <div className={styles.expertiseGrid}>
                <span className={styles.expertiseTag}>Mobile</span>
                <span className={styles.expertiseTag}>Web</span>
                <span className={styles.expertiseTag}>ERP</span>
                <span className={styles.expertiseTag}>NLP</span>
                <span className={styles.expertiseTag}>Cloud Computing</span>
                <span className={styles.expertiseTag}>Networks</span>
              </div>
            </div>

            <div className={styles.actions}>
              <Link href="/resume">
                <button className={styles.primaryButton}>Resume</button>
              </Link>
              <Link href="/contact">
                <button className={styles.secondaryButton}>Contact</button>
              </Link>
            </div>
          </div>

          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.profileImage}
                src="/me.jpg"
                width={280}
                height={280}
                alt="anis zouaghi"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.experience}>
        <h2 className={styles.sectionTitle}>Experience</h2>

        <div className={styles.timeline}>
          {experience.map((job) => (
            <div key={job.id} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <Link href="/resume">
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <div>
                      <h3 className={styles.jobTitle}>{job.title}</h3>
                      <p className={styles.company}>{job.company} - {job.location}</p>
                    </div>
                    <span className={styles.period}>{job.period}</span>
                  </div>
                  <p className={styles.jobDescription}>{job.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const experience = getExperience();

  return {
    props: {
      title: 'Home',
      experience
    },
  };
}
