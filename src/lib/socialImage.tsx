import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
export async function createSocialImage() {
    const [hero, font, bold] = await Promise.all([
        readFile(join(process.cwd(), "public/images/tikat-founder-editorial-v2.png")),
        readFile(join(process.cwd(), "public/fonts/UTM_Avo.ttf")),
        readFile(join(process.cwd(), "public/fonts/UTM_AvoBold.ttf")),
    ]);
    return new ImageResponse(<div style={{ display: "flex", width: "100%", height: "100%", background: "#f7f6f2", color: "#252521", fontFamily: "Avo" }}>
   <div style={{ display: "flex", flexDirection: "column", padding: "48px 44px", width: 720, justifyContent: "space-between" }}>
    <div style={{ display: "flex", fontSize: 44, fontWeight: 700 }}>tikat<span style={{ color: "#dc3d2e" }}>.vn</span></div>
    <div style={{ display: "flex", flexDirection: "column" }}><div style={{ display: "flex", fontSize: 68, fontWeight: 700, letterSpacing: -3 }}>Website & Tool</div><div style={{ display: "flex", fontSize: 38, color: "#dc3d2e", marginTop: 8 }}>Đúng ý tưởng. Đúng nhu cầu.</div></div>
    <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #dcdcd3", paddingTop: 24 }}><div style={{ display: "flex", fontSize: 26, fontWeight: 700 }}>Nguyễn Lê Đình Tiên</div><div style={{ display: "flex", fontSize: 21, marginTop: 10, color: "#75746c" }}>Đà Nẵng · Zalo 0886 694 350</div><div style={{ display: "flex", fontSize: 19, marginTop: 8, color: "#75746c" }}>nguyenledinhtien2507@gmail.com</div></div>
   </div>
   <img src={`data:image/png;base64,${hero.toString("base64")}`} alt="Nguyễn Lê Đình Tiên — người đứng sau Tikat.vn" width={480} height={630} style={{ objectFit: "cover", objectPosition: "54% center" }}/>
  </div>, { width: 1200, height: 630, fonts: [{ name: "Avo", data: font, weight: 400, style: "normal" }, { name: "Avo", data: bold, weight: 700, style: "normal" }] });
}
