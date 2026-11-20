const base = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const i = (slug, variant = "original", invert = false) => ({
  src: `${base}/${slug}/${slug}-${variant}.svg`,
  invert, // black logos that need flipping on the dark theme
});

export const skillIcons = {
  "Java 21": i("java"),
  JavaScript: i("javascript"),
  TypeScript: i("typescript"),
  "Python": i("python"),
  FastAPI: i("fastapi"),
  "Spring Boot 3.x": i("spring"),
  "Spring Security": i("spring"),
  "Spring Data JPA": i("spring"),
  Hibernate: i("hibernate"),
  "React.js": i("react"),
  HTML5: i("html5"),
  CSS3: i("css3"),
  "SQL Server": i("microsoftsqlserver"),
  MySQL: i("mysql"),
  Redis: i("redis"),
  RabbitMQ: i("rabbitmq"),
  "Apache Kafka": i("apachekafka"),
  Maven: i("maven"),
  Gradle: i("gradle"),
  JUnit: i("junit"),
  Postman: i("postman"),
  Swagger: i("swagger"),
  Docker: i("docker"),
  Jenkins: i("jenkins"),
  Git: i("git"),
  GitHub: i("github", "original", true),
  Jira: i("jira"),
  "AWS (Cloud Practitioner)": i("amazonwebservices", "original-wordmark", true),
};
