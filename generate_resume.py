import os
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

def create_docx(filename):
    doc = Document()
    
    # Page setup - 0.5 in margins for clean single-page layout
    for section in doc.sections:
        section.top_margin = Inches(0.5)
        section.bottom_margin = Inches(0.5)
        section.left_margin = Inches(0.55)
        section.right_margin = Inches(0.55)
        
    normal_style = doc.styles['Normal']
    normal_style.font.name = 'Calibri'
    normal_style.font.size = Pt(10)
    normal_style.font.color.rgb = RGBColor(30, 30, 30)

    def add_header(title):
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(8)
        p.paragraph_format.space_after = Pt(2)
        run = p.add_run(title.upper())
        run.bold = True
        run.font.size = Pt(10.5)
        run.font.color.rgb = RGBColor(15, 23, 42)
        # bottom border or line
        p_border = doc.add_paragraph()
        p_border.paragraph_format.space_before = Pt(0)
        p_border.paragraph_format.space_after = Pt(4)
        run_line = p_border.add_run("―" * 68)
        run_line.font.size = Pt(5)
        run_line.font.color.rgb = RGBColor(148, 163, 184)

    # Name and Title
    p_name = doc.add_paragraph()
    p_name.paragraph_format.space_before = Pt(0)
    p_name.paragraph_format.space_after = Pt(2)
    p_name.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r_name = p_name.add_run("BOYA AJAY VARMA")
    r_name.bold = True
    r_name.font.size = Pt(18)
    r_name.font.color.rgb = RGBColor(15, 23, 42)

    # Contact line
    p_contact = doc.add_paragraph()
    p_contact.paragraph_format.space_after = Pt(4)
    p_contact.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_contact.paragraph_format.line_spacing = 1.15
    run_contact = p_contact.add_run(
        "Bengaluru, India (Open to Relocate)  |  +91 9010413027  |  ajayvarmaboya@gmail.com\n" | Linkdein:https://www.linkedin.com/in/ajay-b-a099b2447/"
        "GitHub: github.com/ajayvarmaboya  |  LeetCode: leetcode.com/u/ajayvarmab  |  Portfolio: ajayvarmaboya.github.io/portfolio"
    )
    run_contact.font.size = Pt(9)
    run_contact.font.color.rgb = RGBColor(71, 85, 105)

    # Target Headline
    p_head = doc.add_paragraph()
    p_head.paragraph_format.space_after = Pt(5)
    p_head.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r_head = p_head.add_run("Backend & AI Engineer  |  Open-Source Contributor  |  Python, Java, FastAPI & LangGraph")
    r_head.bold = True
    r_head.font.size = Pt(10)
    r_head.font.color.rgb = RGBColor(30, 41, 59)

    # Professional Summary
    add_header("Professional Summary")
    p_sum = doc.add_paragraph()
    p_sum.paragraph_format.space_after = Pt(4)
    p_sum.paragraph_format.line_spacing = 1.14
    p_sum.add_run(
        "Computer Science (AI & ML) graduate and open-source contributor specializing in scalable backend engineering and document-grounded GenAI architectures. "
        "Experienced in developing modular, containerized REST APIs with FastAPI and Spring Boot, orchestrating stateful LangGraph RAG workflows, "
        "and building developer automation tools. Strong Git/GitHub fluency (PR workflows, code reviews, issue triage), reproducible Docker environments, "
        "and disciplined algorithmic problem solving in Java and Python."
    )

    # Technical Skills
    add_header("Technical Skills")
    skills = [
        ("Programming Languages", "Java (17/21), Python, JavaScript, SQL"),
        ("Backend & APIs", "FastAPI, Spring Boot 3, RESTful APIs, JDBC, Pydantic, Uvicorn, OAuth 2.0, Maven"),
        ("AI & Vector Systems", "LangGraph (StateGraph), LangChain, Pinecone, FAISS, Sentence Transformers, RAG Pipelines"),
        ("Open Source & DevOps", "Git & GitHub (PRs, Code Reviews, Actions), Docker, Docker Compose, Linux, Pytest, JUnit"),
        ("Databases & Architecture", "PostgreSQL, MySQL, Schema Design, Relational Modeling, Layered DAO Pattern, Indexing"),
        ("Core Engineering", "Data Structures & Algorithms (DSA), OOP, Error Handling, API Contract Design, Clean Code")
    ]
    for cat, items in skills:
        p_sk = doc.add_paragraph()
        p_sk.paragraph_format.space_after = Pt(2)
        p_sk.paragraph_format.line_spacing = 1.08
        r_c = p_sk.add_run(f"• {cat}: ")
        r_c.bold = True
        r_c.font.size = Pt(9.5)
        r_i = p_sk.add_run(items)
        r_i.font.size = Pt(9.5)

    # Selected Projects
    add_header("Selected Projects & Open-Source Contributions")
    projects = [
        (
            "Legixo RAG — Document-Grounded GenAI Pipeline (Primary Code Sample)",
            "Python, FastAPI, LangGraph, Pinecone, Groq LLM, Sentence Transformers, Pydantic, Docker",
            [
                "Architected an asynchronous document QA pipeline using LangGraph StateGraph, orchestrating conditional routing between retrieval relevance validation, source attribution, and response synthesis.",
                "Integrated Pinecone vector database with Sentence Transformers for semantic chunk retrieval; verified 12/12 automated evaluation test scenarios for hallucination reduction on out-of-domain queries.",
                "Containerized service using Docker and exposed high-throughput REST endpoints via FastAPI with strict Pydantic schemas, comprehensive error handling, and modular test coverage."
            ]
        ),
        (
            "LeetCode GitHub Sync — Open-Source Developer Automation Tool",
            "Java, Spring Boot 3, JavaScript, Chrome Manifest V3, GitHub REST API, OAuth 2.0, Maven",
            [
                "Engineered an automated browser extension and backend microservice that detects accepted submissions and commits structured solution files directly to user GitHub repositories via GitHub REST API.",
                "Implemented secure GitHub OAuth 2.0 token exchange through a Spring Boot service, integrating Monaco editor DOM extraction, UTF-8 Base64 encoding, and sync retry mechanisms.",
                "Built validation logic to eliminate duplicate commits, handle wrong-answer edge cases, and log granular sync diagnostics, automating daily developer workflows."
            ]
        ),
        (
            "OpenWork — Open-Source Agentic AI Desktop Application",
            "Open Source, Python, Docker, Git/GitHub, Linux, Agentic Workflows",
            [
                "Active contributor to an open-source desktop application powering guided agentic workflows, collaborating with maintainers on issue triage, PR reviews, and code contributions.",
                "Configured and validated multi-container Docker environments to safely sandbox local autonomous agents and verify end-to-end integration test runs."
            ]
        ),
        (
            "JobPrep OS & StockFlow — Layered Backend & Database System",
            "Java 17, Spring Boot 3, PostgreSQL, Docker Compose, Maven, Relational Modeling",
            [
                "Designed relational database schemas with indexed PostgreSQL tables to support interview preparation tracking and order/inventory management workflows.",
                "Implemented presentation, service, and DAO layers with constructor dependency injection, PreparedStatement SQL injection defense, and custom exception handling.",
                "Containerized application and database services via Docker Compose for reproducible local setup across development and testing environments."
            ]
        )
    ]

    for p_title, p_tech, bullets in projects:
        p_proj = doc.add_paragraph()
        p_proj.paragraph_format.space_before = Pt(4)
        p_proj.paragraph_format.space_after = Pt(1)
        r_pt = p_proj.add_run(p_title)
        r_pt.bold = True
        r_pt.font.size = Pt(10)
        
        p_tc = doc.add_paragraph()
        p_tc.paragraph_format.space_after = Pt(2)
        r_tch = p_tc.add_run(f"Technologies: {p_tech}")
        r_tch.font.size = Pt(8.5)
        r_tch.italic = True
        r_tch.font.color.rgb = RGBColor(100, 116, 139)

        for b in bullets:
            p_b = doc.add_paragraph()
            p_b.paragraph_format.space_after = Pt(2)
            p_b.paragraph_format.left_indent = Inches(0.2)
            p_b.paragraph_format.line_spacing = 1.12
            r_dot = p_b.add_run("• ")
            r_dot.bold = True
            r_txt = p_b.add_run(b)
            r_txt.font.size = Pt(9)

    # Education
    add_header("Education")
    p_edu = doc.add_paragraph()
    p_edu.paragraph_format.space_after = Pt(1)
    r_deg = p_edu.add_run("Bachelor of Technology (B.Tech) in Computer Science & Engineering (AI & ML)")
    r_deg.bold = True
    r_deg.font.size = Pt(9.5)
    
    p_inst = doc.add_paragraph()
    p_inst.paragraph_format.space_after = Pt(4)
    r_inst = p_inst.add_run("Sri Venkateswara Engineering College, Tirupati, India  |  Graduation: 2025  |  CGPA: 8.2 / 10")
    r_inst.font.size = Pt(9)
    r_inst.font.color.rgb = RGBColor(71, 85, 105)

    # Certifications & Honors
    add_header("Certifications & Key Honors")
    p_cert = doc.add_paragraph()
    p_cert.paragraph_format.space_after = Pt(2)
    p_cert.paragraph_format.left_indent = Inches(0.2)
    p_cert.add_run("• NPTEL National Certification: Fundamentals of Cloud, Edge, IoT & ML — Top 5% National Rank").font.size = Pt(9)

    p_dsa = doc.add_paragraph()
    p_dsa.paragraph_format.space_after = Pt(2)
    p_dsa.paragraph_format.left_indent = Inches(0.2)
    p_dsa.add_run("• Algorithmic Practice: Active problem-solving in Java & Python with structured solutions in neetcode-submissions repository.").font.size = Pt(9)

    doc.save(filename)
    print(f"DOCX created: {filename}")


def create_pdf(filename):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=32,
        bottomMargin=32
    )

    styles = getSampleStyleSheet()

    # Custom styles
    title_style = ParagraphStyle(
        'DocTitle',
        fontName='Helvetica-Bold',
        fontSize=16,
        leading=18,
        textColor=colors.HexColor('#0f172a'),
        alignment=1
    )
    contact_style = ParagraphStyle(
        'Contact',
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor('#475569'),
        alignment=1
    )
    headline_style = ParagraphStyle(
        'Headline',
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        textColor=colors.HexColor('#1e293b'),
        alignment=1,
        spaceAfter=4
    )
    heading_style = ParagraphStyle(
        'Heading',
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=11,
        textColor=colors.HexColor('#0f172a'),
        spaceBefore=5,
        spaceAfter=2
    )
    body_style = ParagraphStyle(
        'Body',
        fontName='Helvetica',
        fontSize=8.5,
        leading=10.8,
        textColor=colors.HexColor('#1e293b'),
        spaceAfter=3
    )
    bullet_style = ParagraphStyle(
        'Bullet',
        fontName='Helvetica',
        fontSize=8.3,
        leading=10.5,
        textColor=colors.HexColor('#1e293b'),
        leftIndent=12,
        spaceAfter=2
    )
    tech_style = ParagraphStyle(
        'Tech',
        fontName='Helvetica-Oblique',
        fontSize=7.8,
        leading=9.5,
        textColor=colors.HexColor('#64748b'),
        spaceAfter=2
    )

    story = []

    # Header
    story.append(Paragraph("BOYA AJAY VARMA", title_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph(
        "Bengaluru, India (Open to Relocate) &nbsp;|&nbsp; +91 9010413027 &nbsp;|&nbsp; ajayvarmaboya@gmail.com<br/>"
        "GitHub: github.com/ajayvarmaboya &nbsp;|&nbsp; LeetCode: leetcode.com/u/ajayvarmab &nbsp;|&nbsp; Portfolio: ajayvarmaboya.github.io/portfolio",
        contact_style
    ))
    story.append(Spacer(1, 3))
    story.append(Paragraph("Backend & AI Engineer &nbsp;|&nbsp; Open-Source Contributor &nbsp;|&nbsp; Python, Java, FastAPI & LangGraph", headline_style))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#cbd5e1'), spaceBefore=2, spaceAfter=3))

    # Summary
    story.append(Paragraph("PROFESSIONAL SUMMARY", heading_style))
    story.append(Paragraph(
        "Computer Science (AI & ML) graduate and open-source contributor specializing in scalable backend engineering and document-grounded GenAI architectures. "
        "Experienced in developing modular, containerized REST APIs with FastAPI and Spring Boot, orchestrating stateful LangGraph RAG workflows, "
        "and building developer automation tools. Strong Git/GitHub fluency (PR workflows, code reviews, issue triage), reproducible Docker environments, "
        "and disciplined algorithmic problem solving in Java and Python.",
        body_style
    ))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#e2e8f0'), spaceBefore=2, spaceAfter=2))

    # Skills
    story.append(Paragraph("TECHNICAL SKILLS", heading_style))
    skills = [
        "<b>Programming Languages:</b> Java (17/21), Python, JavaScript, SQL",
        "<b>Backend & APIs:</b> FastAPI, Spring Boot 3, RESTful APIs, JDBC, Pydantic, Uvicorn, OAuth 2.0, Maven",
        "<b>AI & Vector Systems:</b> LangGraph (StateGraph), LangChain, Pinecone, FAISS, Sentence Transformers, RAG Pipelines",
        "<b>Open Source & DevOps:</b> Git & GitHub (PRs, Code Reviews, Actions), Docker, Docker Compose, Linux, Pytest, JUnit",
        "<b>Databases & Architecture:</b> PostgreSQL, MySQL, Schema Design, Relational Modeling, Layered DAO Pattern, Indexing",
        "<b>Core Engineering:</b> Data Structures & Algorithms (DSA), OOP, Error Handling, API Contract Design, Clean Code"
    ]
    for s in skills:
        story.append(Paragraph(f"• {s}", bullet_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#e2e8f0'), spaceBefore=2, spaceAfter=2))

    # Projects
    story.append(Paragraph("SELECTED PROJECTS & OPEN-SOURCE CONTRIBUTIONS", heading_style))
    
    # Project 1
    story.append(Paragraph("<b>Legixo RAG — Document-Grounded GenAI Pipeline (Primary Code Sample)</b>", body_style))
    story.append(Paragraph("Technologies: Python, FastAPI, LangGraph, Pinecone, Groq LLM, Sentence Transformers, Pydantic, Docker", tech_style))
    story.append(Paragraph("• Architected an asynchronous document QA pipeline using LangGraph StateGraph, orchestrating conditional routing between retrieval relevance validation, source attribution, and response synthesis.", bullet_style))
    story.append(Paragraph("• Integrated Pinecone vector database with Sentence Transformers for semantic chunk retrieval; verified 12/12 automated evaluation test scenarios for hallucination reduction on out-of-domain queries.", bullet_style))
    story.append(Paragraph("• Containerized service using Docker and exposed high-throughput REST endpoints via FastAPI with strict Pydantic schemas, comprehensive error handling, and modular test coverage.", bullet_style))
    story.append(Spacer(1, 1.5))

    # Project 2
    story.append(Paragraph("<b>LeetCode GitHub Sync — Open-Source Developer Automation Tool</b>", body_style))
    story.append(Paragraph("Technologies: Java, Spring Boot 3, JavaScript, Chrome Manifest V3, GitHub REST API, OAuth 2.0, Maven", tech_style))
    story.append(Paragraph("• Engineered an automated browser extension and backend microservice that detects accepted submissions and commits structured solution files directly to user GitHub repositories via GitHub REST API.", bullet_style))
    story.append(Paragraph("• Implemented secure GitHub OAuth 2.0 token exchange through a Spring Boot service, integrating Monaco editor DOM extraction, UTF-8 Base64 encoding, and sync retry mechanisms.", bullet_style))
    story.append(Paragraph("• Built validation logic to eliminate duplicate commits, handle wrong-answer edge cases, and log granular sync diagnostics, automating daily developer workflows.", bullet_style))
    story.append(Spacer(1, 1.5))

    # Project 3
    story.append(Paragraph("<b>OpenWork — Open-Source Agentic AI Desktop Application</b>", body_style))
    story.append(Paragraph("Technologies: Open Source, Python, Docker, Git/GitHub, Linux, Agentic Workflows", tech_style))
    story.append(Paragraph("• Active contributor to an open-source desktop application powering guided agentic workflows, collaborating with maintainers on issue triage, PR reviews, and code contributions.", bullet_style))
    story.append(Paragraph("• Configured and validated multi-container Docker environments to safely sandbox local autonomous agents and verify end-to-end integration test runs.", bullet_style))
    story.append(Spacer(1, 1.5))

    # Project 4
    story.append(Paragraph("<b>JobPrep OS & StockFlow — Layered Backend & Database System</b>", body_style))
    story.append(Paragraph("Technologies: Java 17, Spring Boot 3, PostgreSQL, Docker Compose, Maven, Relational Modeling", tech_style))
    story.append(Paragraph("• Designed relational database schemas with indexed PostgreSQL tables to support interview preparation tracking and order/inventory management workflows.", bullet_style))
    story.append(Paragraph("• Implemented presentation, service, and DAO layers with constructor dependency injection, PreparedStatement SQL injection defense, and custom exception handling.", bullet_style))
    story.append(Paragraph("• Containerized application and database services via Docker Compose for reproducible local setup across development and testing environments.", bullet_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#e2e8f0'), spaceBefore=2, spaceAfter=2))

    # Education
    story.append(Paragraph("EDUCATION", heading_style))
    story.append(Paragraph("<b>Bachelor of Technology (B.Tech) in Computer Science & Engineering (AI & ML)</b>", body_style))
    story.append(Paragraph("Sri Venkateswara Engineering College, Tirupati, India &nbsp;|&nbsp; Graduation: 2025 &nbsp;|&nbsp; CGPA: <b>8.2 / 10</b>", contact_style))
    story.append(Spacer(1, 3))

    # Honors
    story.append(Paragraph("CERTIFICATIONS & KEY HONORS", heading_style))
    story.append(Paragraph("• <b>NPTEL National Certification:</b> Fundamentals of Cloud, Edge, IoT & ML — <b>Top 5% National Rank</b>", bullet_style))
    story.append(Paragraph("• <b>Algorithmic Practice:</b> Active problem-solving in Java & Python with structured solutions in public <i>neetcode-submissions</i> repository.", bullet_style))

    doc.build(story)
    print(f"PDF created: {filename}")

if __name__ == "__main__":
    base_dir = os.path.dirname(os.path.abspath(__file__))
    docx_path = os.path.join(base_dir, "Boya_Ajay_Varma_Resume.docx")
    pdf_path_public = os.path.join(base_dir, "public", "resume.pdf")
    pdf_path_root = os.path.join(base_dir, "Boya_Ajay_Varma_Resume.pdf")
    
    os.makedirs(os.path.join(base_dir, "public"), exist_ok=True)
    create_docx(docx_path)
    create_pdf(pdf_path_public)
    create_pdf(pdf_path_root)
    print("All resume deliverables successfully generated!")
