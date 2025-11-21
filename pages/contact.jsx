import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
  const contactMethods = [
    {
      name: 'Email',
      value: 'anis@zouaghi.dev',
      href: 'mailto:anis@zouaghi.dev',
      icon: '✉',
      description: 'Primary contact method'
    },
    {
      name: 'LinkedIn',
      value: 'in/anis-zouaghi',
      href: 'https://www.linkedin.com/in/anis-zouaghi',
      icon: '💼',
      description: 'Professional network'
    },
    {
      name: 'GitHub',
      value: 'github.com/znissou',
      href: 'https://github.com/znissou',
      icon: '💻',
      description: 'Open source projects'
    }
    // {
    //   name: 'Google Scholar',
    //   value: 'Research Publications',
    //   href: 'https://scholar.google.com/citations?user=FlFym8kAAAAJ',
    //   icon: '🎓',
    //   description: 'Academic profile'
    // },
    // {
    //   name: 'PyPi',
    //   value: 'pypi.org/user/drkostas',
    //   href: 'https://pypi.org/user/drkostas',
    //   icon: '📦',
    //   description: 'Python packages'
    // }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Get In Touch</h1>
          <p className={styles.subtitle}>Software Engineer • Senior Developer @ DzExpert</p>
        </div>

        <div className={styles.bio}>
          <p>
            Passionate Software Engineer with experience building web and mobile applications, ERP integrations,
            and AI-powered solutions for real-world business needs. Skilled in Flutter, Odoo, Python,
            and modern cloud and DevOps practices, with a solid background in computer networks and NLP.
          </p>
          <p>
            Currently working at DzExpert, contributing to ERP solutions, Android and Flutter apps, CI/CD pipelines,
            and advanced Business Intelligence dashboards for better enterprise decision‑making. Always motivated to
            learn, experiment, and take part in the ongoing software revolution.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {contactMethods.map((method) => (
            <a
              key={method.name}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
            >
              <div className={styles.cardIcon}>{method.icon}</div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{method.name}</h3>
                <p className={styles.cardValue}>{method.value}</p>
                <p className={styles.cardDescription}>{method.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.availability}>
            <span className={styles.statusIndicator}></span>
            Available to discuss full-time roles, research collaborations, and consulting
          </p>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
