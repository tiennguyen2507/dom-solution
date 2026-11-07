import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ProjectItem } from "@/data/projectsData";
import styles from "@/app/page.module.css";
export default function ProjectCard({ project }: {
    project: ProjectItem;
}) {
    return <article className={styles.projectCard}><Link href={`/project/${project.id}`} className={styles.projectImage}><Image src={project.image} alt={project.name} fill sizes="(max-width:600px) 91vw, (max-width:900px) 44vw, 29vw"/><span className={styles.projectVisit}><ArrowUpRight size={20}/></span></Link><div className={styles.projectMeta}>{project.category}<span>{project.year}</span></div><h3><Link href={`/project/${project.id}`}>{project.name}</Link></h3><p>{project.summaryVi}</p><div className={styles.tags}>{project.tech.map(t => <span key={t}>{t}</span>)}</div><Link href={`/project/${project.id}`} className={styles.textLink}>Xem chi tiết dự án <ArrowUpRight size={16}/></Link></article>;
}
