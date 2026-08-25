import { jsPDF } from "jspdf";
import {
  personalInfo,
  educationData,
  skillCategories,
  domainItems,
  internshipItems,
  projectItems,
  certificationItems,
  achievementItems,
  workshopData,
} from "../data/portfolioData";

export function generateResumePdf(): void {
  // Create jsPDF document with standard A4 dimensions (210 x 297 mm)
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;
  let y = 16;

  const navyColor = [15, 23, 42]; // #0f172a
  const royalBlue = [37, 99, 235]; // #2563eb
  const textDark = [30, 41, 59]; // #1e293b
  const textMuted = [100, 116, 139]; // #64748b
  const borderGray = [226, 232, 240]; // #e2e8f0

  function checkPageBreak(requiredSpace: number) {
    if (y + requiredSpace > pageHeight - 16) {
      doc.addPage();
      y = 16;
      addPageHeaderMini();
    }
  }

  function addPageHeaderMini() {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
    doc.text("SWETHA J — Curriculum Vitae", margin, 10);
    doc.text(`Page ${doc.getNumberOfPages()}`, pageWidth - margin, 10, { align: "right" });
    doc.setDrawColor(borderGray[0], borderGray[1], borderGray[2]);
    doc.line(margin, 12, pageWidth - margin, 12);
  }

  function drawSectionHeader(title: string) {
    checkPageBreak(14);
    y += 3;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(royalBlue[0], royalBlue[1], royalBlue[2]);
    doc.text(title.toUpperCase(), margin, y);

    // Accent line
    const textWidth = doc.getTextWidth(title.toUpperCase());
    doc.setDrawColor(royalBlue[0], royalBlue[1], royalBlue[2]);
    doc.setLineWidth(0.6);
    doc.line(margin + textWidth + 3, y - 1, pageWidth - margin, y - 1);
    y += 5;
  }

  // --- HEADER BANNER ---
  doc.setFillColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.roundedRect(margin, y, contentWidth, 34, 2, 2, "F");

  // Name
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(255, 255, 255);
  doc.text(personalInfo.name, margin + 6, y + 9);

  // Subtitle
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(147, 197, 253); // Light blue #93c5fd
  doc.text("Master of Computer Applications (MCA) | Web Developer | AI Enthusiast", margin + 6, y + 16);

  // Contact Row
  doc.setFontSize(8);
  doc.setTextColor(226, 232, 240); // #e2e8f0
  const contactText1 = `Phone: +91 ${personalInfo.phone}  |  Email: ${personalInfo.email}`;
  const contactText2 = `GitHub: ${personalInfo.github}  |  LinkedIn: ${personalInfo.linkedin}`;
  doc.text(contactText1, margin + 6, y + 23);
  doc.text(contactText2, margin + 6, y + 29);

  y += 38;

  // --- PROFILE SUMMARY ---
  drawSectionHeader("Profile Summary");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  const summaryText =
    "Motivated and detail-oriented Master of Computer Applications (MCA) student at Holy Cross College (Autonomous), Trichy, with strong foundations in Web Development, Artificial Intelligence, Data Analytics, and Database Systems. Proven record of academic excellence (8.61 UG CGPA, 8.25 PG CGPA), collegiate leadership as Student Council Member, and practical project engineering across educational, e-commerce, and conversational systems. Seeking impactful web development and software engineering opportunities.";
  const splitSummary = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(splitSummary, margin, y);
  y += splitSummary.length * 4.2;

  // --- EDUCATION ---
  drawSectionHeader("Education");
  educationData.forEach((edu) => {
    checkPageBreak(13);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
    doc.text(edu.degree, margin, y);

    doc.setFont("helvetica", "bold");
    doc.setTextColor(royalBlue[0], royalBlue[1], royalBlue[2]);
    doc.text(`${edu.scoreLabel}: ${edu.score}`, pageWidth - margin, y, { align: "right" });

    y += 4;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
    doc.text(`${edu.institution}  •  ${edu.period}`, margin, y);
    y += 4.5;
  });

  // --- SKILLS & DOMAINS ---
  drawSectionHeader("Technical Skills & Core Domains");
  skillCategories.forEach((cat) => {
    checkPageBreak(8);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
    doc.text(`${cat.title}:`, margin, y);

    const skillsList = cat.skills.map((s) => s.name).join(", ");
    doc.setFont("helvetica", "normal");
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.text(skillsList, margin + 45, y);
    y += 4.5;
  });

  checkPageBreak(8);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.text("Focus Domains:", margin, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.text(domainItems.map((d) => d.title).join("  •  "), margin + 45, y);
  y += 5.5;

  // --- INTERNSHIPS ---
  drawSectionHeader("Professional Internships");
  internshipItems.forEach((intern) => {
    checkPageBreak(12);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
    doc.text(`${intern.title} — ${intern.role}`, margin, y);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
    doc.text(`${intern.organization} | ${intern.period}`, pageWidth - margin, y, { align: "right" });

    y += 4;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    const splitDesc = doc.splitTextToSize(intern.description, contentWidth);
    doc.text(splitDesc, margin, y);
    y += splitDesc.length * 3.8 + 2;
  });

  // --- KEY PROJECTS ---
  drawSectionHeader("Key Projects");
  projectItems.forEach((proj) => {
    checkPageBreak(15);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
    doc.text(`${proj.number}. ${proj.title} (${proj.year})`, margin, y);

    doc.setFont("helvetica", "italic");
    doc.setFontSize(7.5);
    doc.setTextColor(royalBlue[0], royalBlue[1], royalBlue[2]);
    const techString = `Tech: ${proj.technologies.join(", ")}`;
    doc.text(techString, pageWidth - margin, y, { align: "right" });

    y += 3.8;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    const splitPDesc = doc.splitTextToSize(proj.description, contentWidth);
    doc.text(splitPDesc, margin, y);
    y += splitPDesc.length * 3.8 + 1.5;
  });

  // --- CERTIFICATIONS ---
  drawSectionHeader("Certifications & Key Qualifications");
  certificationItems.forEach((cert) => {
    checkPageBreak(8);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
    doc.text(`• ${cert.title}`, margin, y);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
    doc.text(`${cert.organization} (${cert.date})`, pageWidth - margin, y, { align: "right" });
    y += 4;
  });

  // --- ACHIEVEMENTS & WORKSHOP ---
  drawSectionHeader("Achievements, Leadership & Workshops");
  achievementItems.slice(0, 6).forEach((ach) => {
    checkPageBreak(7);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.text(`★  ${ach.title}${ach.year ? ` (${ach.year})` : ""}${ach.organization ? ` — ${ach.organization}` : ""}`, margin, y);
    y += 3.8;
  });

  checkPageBreak(10);
  y += 2;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(navyColor[0], navyColor[1], navyColor[2]);
  doc.text(`Workshop: ${workshopData.title} (${workshopData.year})`, margin, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text(workshopData.institution, pageWidth - margin, y, { align: "right" });
  y += 4;
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  const splitWs = doc.splitTextToSize(workshopData.description, contentWidth);
  doc.text(splitWs, margin, y);

  // Save the PDF
  doc.save("SWETHA_J_RESUME.pdf");
}
