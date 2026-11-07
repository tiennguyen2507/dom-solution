import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from "@/data/projectsData";
import { portfolioData } from "@/data/tikatData";
import styles from "@/app/page.module.css";
export default function ProjectArchive() {
    const projects = getAllProjects();
    return (<section className={styles.projectArchive} id="du-an">
      <div className={styles.projectHeading}>
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>02 / DỰ ÁN ĐÃ THỰC HIỆN</span>
          <h2>Những sản phẩm<br />mình đã xây dựng.</h2>
          <p>Website, ứng dụng và hệ thống quản lý — các dự án trong hồ sơ của Tikat.</p>
        </div>
        <Link href="/project" className={styles.textLink}>Khám phá tất cả {projects.length} dự án <ArrowUpRight size={18}/></Link>
      </div>
      <div className={styles.projectGrid}>{projects.slice(0, 6).map(project => <ProjectCard key={project.id} project={project}/>)}</div>
      {projects.length > 6 && <details className={styles.moreProjects}>
        <summary>Xem thêm {projects.length - 6} dự án <span>+</span></summary>
        <div className={styles.projectGrid}>{projects.slice(6).map(project => <ProjectCard key={project.id} project={project}/>)}</div>
      </details>}
      <div className={styles.portfolioHeading}><h3>Các dự án khác trong portfolio</h3><p>FinFlow, Aurora Living, Nexus Hub và TechForge AI.</p></div>
      <div className={styles.projectGrid}>
        {portfolioData.map(project => <article className={styles.projectCard} key={project.id}>
          <div className={styles.projectImage}><Image src={project.image} alt={project.title} fill sizes="(max-width: 600px) 91vw, (max-width: 900px) 44vw, 29vw"/></div>
          <div className={styles.projectMeta}>{project.categoryLabel} <span>{project.year}</span></div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className={styles.tags}>{project.techStack.map(tech => <span key={tech}>{tech}</span>)}</div>
          <details className={styles.projectDetails}><summary>Thông tin dự án <span>+</span></summary><p>Khách hàng: {project.client}</p><p>{project.metrics}</p><div className={styles.tags}>{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></details>
        </article>)}
      </div>
    </section>);
}
