"use client";
import { useState } from "react";
import { getAllProjects } from "@/data/projectsData";
import ProjectCard from "@/components/ProjectCard";
import styles from "@/app/page.module.css";
const projects = getAllProjects();
const categories = [...new Set(projects.map(p => p.category))];
export default function ProjectBrowser() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("");
    const filtered = projects.filter(p => (!category || p.category === category) && `${p.name} ${p.category} ${p.summaryVi} ${p.tech.join(" ")}`.toLocaleLowerCase("vi").includes(query.toLocaleLowerCase("vi")));
    return <><div className={styles.filterBar}><label>Tìm dự án<input type="search" placeholder="Tên dự án, lĩnh vực, công nghệ…" value={query} onChange={e => setQuery(e.target.value)}/></label><label>Lĩnh vực<select value={category} onChange={e => setCategory(e.target.value)}><option value="">Tất cả lĩnh vực</option>{categories.map(c => <option key={c} value={c}>{c}</option>)}</select></label><span role="status">{filtered.length} / {projects.length} dự án</span></div>{filtered.length ? <div className={styles.projectGrid}>{filtered.map(p => <ProjectCard key={p.id} project={p}/>)}</div> : <div className={styles.emptyState}><h2>Chưa tìm thấy dự án phù hợp.</h2><p>Thử một từ khóa khác hoặc xem lại toàn bộ danh sách.</p><button className={styles.darkButton} onClick={() => { setQuery(""); setCategory(""); }}>Xóa bộ lọc ↗</button></div>}</>;
}
