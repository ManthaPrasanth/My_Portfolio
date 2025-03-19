"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  BookOpen,
  BrainCircuit,
  Code2,
  Database,
  Github,
  LineChart,
  Mail,
  MapPin,
  Linkedin,
  FileText,
  Award,
  Cpu,
} from "lucide-react"

export default function Portfolio() {
  const scrollToSection = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 64, // Adjust for header height
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 w-full bg-sky-100">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-sky-800">Sai Prasanth Mantha</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="text-sm font-medium text-sky-800 hover:text-sky-600 hover:underline underline-offset-4"
            >
              About
            </a>
            <a
              href="#experience"
              onClick={(e) => scrollToSection(e, "experience")}
              className="text-sm font-medium text-sky-800 hover:text-sky-600 hover:underline underline-offset-4"
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className="text-sm font-medium text-sky-800 hover:text-sky-600 hover:underline underline-offset-4"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={(e) => scrollToSection(e, "skills")}
              className="text-sm font-medium text-sky-800 hover:text-sky-600 hover:underline underline-offset-4"
            >
              Skills
            </a>
            <a
              href="#education"
              onClick={(e) => scrollToSection(e, "education")}
              className="text-sm font-medium text-sky-800 hover:text-sky-600 hover:underline underline-offset-4"
            >
              Education
            </a>
          </nav>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="border-sky-300 text-sky-700 hover:bg-sky-50" asChild>
              <Link href="https://www.linkedin.com/in/mantha-sai-prasanth/" target="_blank">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
            <Button
              size="sm"
              className="bg-amber-100 hover:bg-amber-200 text-amber-800"
              onClick={(e) => scrollToSection(e, "contact")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="about" className="py-12 md:py-16 bg-sky-50 scroll-mt-20">
          <div className="container">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1.5 bg-amber-100 rounded-full text-amber-800 text-sm font-medium mb-2">
                  Master's Student in Data Science
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-sky-800">
                  Data Scientist & Software Engineer
                </h1>
                <p className="max-w-[600px] text-sky-700 md:text-xl">
                  Master's student in Data Science at University of North Texas with professional experience in software
                  engineering. Passionate about leveraging data-driven approaches to solve complex problems in machine
                  learning, deep learning, and data analytics.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    className="bg-amber-100 hover:bg-amber-200 text-amber-800"
                    onClick={(e) => scrollToSection(e, "contact")}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Button>
                  <Button
                    variant="outline"
                    className="border-sky-300 text-sky-700 hover:bg-sky-50"
                    onClick={(e) => scrollToSection(e, "projects")}
                  >
                    <Cpu className="mr-2 h-4 w-4" />
                    View Projects
                  </Button>
                  <Button variant="secondary" className="bg-white text-sky-700 hover:bg-sky-50" asChild>
                    <a href="/Sai_Prasanth_Mantha_Resume.pdf" download>
                      <FileText className="mr-2 h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-amber-100">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prasanth%20Mantha.jpg-zkWliafyb7CEV1Mqf0m6p6HcpFT0O9.jpeg"
                    alt="Sai Prasanth Mantha"
                    className="object-cover object-top w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 md:py-16 bg-white scroll-mt-20">
          <div className="container">
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Award className="mr-2 h-6 w-6 text-emerald-600" />
                <h2 className="text-3xl font-bold tracking-tight text-emerald-800">Professional Experience</h2>
              </div>
              <p className="text-gray-600">My professional journey in software engineering and data science.</p>
            </div>

            <div className="space-y-8">
              <TimelineItem
                title="Jr Software Engineer"
                organization="Cognizant Technology Solutions"
                location="Hyderabad, India"
                date="July 2022 - Feb 2024"
                color="emerald"
                description={[
                  "Two years of project experience in analysis, design, development, and implementation of IT projects using Java and Spring",
                  "Identified and fixed bugs, performance issues, and other technical problems in Java code",
                  "Coordinated with offshore team members for client-specific tasks, enhancing collaboration and reducing turnaround time by 25%",
                  "Performed root-cause analysis and solution development for issues and concerns",
                  "Provided ongoing maintenance and support for Java applications, improving system stability by 30%",
                  "Maintained systems by tracking and resolving software errors, reducing bug resolution time by 40%",
                ]}
              />
              <TimelineItem
                title="Programmer Analyst Trainee"
                organization="Cognizant Technology Solutions"
                location="Hyderabad, India"
                date="Dec 2021 - Jun 2022"
                color="emerald"
                description={[
                  "Developed high-level design documentation for Portfolio Management System using Spring Boot and SQL, improving system clarity by 75%",
                  "Designed and implemented user authentication processes, improving security by 30%",
                  "Developed and tested React-based modules for managing user portfolios",
                  "Participated in creating system design diagrams and documenting component inventory",
                  "Designed and implemented optimized SQL database schema, improving query performance by 80%",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-16 bg-violet-50 scroll-mt-20">
          <div className="container">
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <LineChart className="mr-2 h-6 w-6 text-violet-600" />
                <h2 className="text-3xl font-bold tracking-tight text-violet-800">Featured Projects</h2>
              </div>
              <p className="text-violet-700">A collection of my data science and machine learning projects.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ProjectCard
                title="Statistical Analysis of Cybersecurity Breaches"
                description="Conducted in-depth data analysis of cybersecurity breaches across U.S. states from 2010 to 2014, focusing on breach types, geographical distribution, and temporal patterns."
                tags={["Python", "Tableau", "Data Analysis", "Visualization", "Cybersecurity"]}
                image="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop"
                color="violet"
                points={[
                  "Analyzed 1,000+ records of cybersecurity breaches",
                  "Created detailed visualizations including time series, pie charts, and bubble maps",
                  "Identified key trends and high-risk areas like California and Texas",
                  "Examined business associate involvement correlation with breach incidents",
                ]}
                githubUrl="https://github.com/ManthaPrasanth/Statistical-Analysis-of-Cybersecurity-Breaches"
              />
              <ProjectCard
                title="Drowsiness Detection Using Raspberry Pi and OpenCV"
                description="Developed a real-time drowsiness detection system using Raspberry Pi and OpenCV, designed to enhance driver safety by monitoring signs of fatigue."
                tags={["Python", "OpenCV", "Raspberry Pi", "Machine Learning", "Computer Vision"]}
                image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop"
                color="violet"
                points={[
                  "Implemented facial landmark detection with 85% accuracy",
                  "Integrated ML algorithms achieving 90% detection rate",
                  "Optimized for low-power devices and real-time performance",
                  "Designed user-friendly interface for different environments",
                ]}
              />
              <ProjectCard
                title="Addressing the Lack of Public Spaces for Teenagers"
                description="Conducted extensive data analysis on static and real-time datasets from Chicago and Washington D.C. to identify gaps in recreational facilities."
                tags={["GCP", "Hive", "Spark", "BigQuery", "Data Analysis"]}
                image="https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?q=80&w=1000&auto=format&fit=crop"
                color="violet"
                points={[
                  "Processed datasets using OpenRefine, addressing 98% of missing values",
                  "Designed and executed queries to explore facility types and usage patterns",
                  "Utilized cloud platforms for efficient storage and visualization",
                  "Recommended solutions for enhancing accessibility to public spaces",
                ]}
                githubUrl="https://github.com/ManthaPrasanth/Lack-of-public-space-for-Teenagers"
              />
              <ProjectCard
                title="Medical Insurance Cost Prediction"
                description="Developed a machine learning model to predict individual medical insurance costs based on factors like age, gender, BMI, smoking status, and geographic location."
                tags={["Python", "Machine Learning", "Scikit-learn", "Pandas", "Data Analysis"]}
                image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop"
                color="violet"
                points={[
                  "Achieved 78% prediction accuracy",
                  "Implemented algorithms like linear regression and decision trees",
                  "Conducted data preprocessing and feature selection",
                  "Identified key drivers of insurance costs for personalized pricing",
                ]}
                githubUrl="https://github.com/ManthaPrasanth/medical-insurance-cost-predictor-main"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-16 bg-amber-50 scroll-mt-20">
          <div className="container">
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Code2 className="mr-2 h-6 w-6 text-amber-600" />
                <h2 className="text-3xl font-bold tracking-tight text-amber-800">Technical Skills</h2>
              </div>
              <p className="text-amber-700">My technical expertise and tools I work with.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <SkillCard
                title="Programming Languages"
                skills={["Python", "Java", "JavaScript", "SQL", "R"]}
                icon={<Code2 className="h-8 w-8 text-amber-600" />}
                color="amber"
              />
              <SkillCard
                title="Machine Learning & AI"
                skills={["Scikit-learn", "TensorFlow", "PyTorch", "Keras", "Deep Learning", "NLP", "Computer Vision"]}
                icon={<BrainCircuit className="h-8 w-8 text-amber-600" />}
                color="amber"
              />
              <SkillCard
                title="Data Processing & Analysis"
                skills={["Pandas", "NumPy", "Data Mining", "Statistical Analysis", "Predictive Analytics"]}
                icon={<Database className="h-8 w-8 text-amber-600" />}
                color="amber"
              />
              <SkillCard
                title="Data Visualization"
                skills={["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly"]}
                icon={<BarChart3 className="h-8 w-8 text-amber-600" />}
                color="amber"
              />
              <SkillCard
                title="Web Development"
                skills={["React", "Spring Boot", "RESTful APIs", "HTML/CSS", "Node.js"]}
                icon={<LineChart className="h-8 w-8 text-amber-600" />}
                color="amber"
              />
              <SkillCard
                title="Tools & Platforms"
                skills={["Docker", "Git", "CI/CD", "Jupyter", "GCP", "AWS", "Azure"]}
                icon={<BookOpen className="h-8 w-8 text-amber-600" />}
                color="amber"
              />
            </div>
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section id="education" className="py-12 md:py-16 bg-sky-50 scroll-mt-20">
          <div className="container">
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <BookOpen className="mr-2 h-6 w-6 text-sky-600" />
                <h2 className="text-3xl font-bold tracking-tight text-sky-800">Education & Certifications</h2>
              </div>
              <p className="text-sky-700">My academic background and professional certifications.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-8">
                <h3 className="text-xl font-semibold text-sky-700">Education</h3>
                <TimelineItem
                  title="Master of Science in Data Science (MSDS)"
                  organization="University of North Texas"
                  location="Denton, TX"
                  date="Expected Dec 2025"
                  color="sky"
                  description={["GPA: 4.0/4.0"]}
                />
                <TimelineItem
                  title="Bachelor of Technology: Electronics & Communication Engineering"
                  organization="Centurion University of Technology & Management"
                  location="Vizianagaram, AP"
                  date="May 2022"
                  color="sky"
                  description={["CGPA: 7.89/10"]}
                />
              </div>

              <div className="space-y-8">
                <h3 className="text-xl font-semibold text-sky-700">Certifications</h3>
                <Card className="bg-white border border-sky-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sky-700">Professional Certifications</CardTitle>
                    <CardDescription>Industry-recognized credentials</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-sky-50 hover:bg-sky-100 transition-colors">
                      <Award className="h-5 w-5 text-sky-600" />
                      <span>Applied Data Science - Hitachi Vantara</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-sky-50 hover:bg-sky-100 transition-colors">
                      <Award className="h-5 w-5 text-sky-600" />
                      <span>Data Analytics Professional Certificate – Google</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-sky-50 hover:bg-sky-100 transition-colors">
                      <Award className="h-5 w-5 text-sky-600" />
                      <span>Cloud Data Governance & Catalog Foundation Series Certification – Informatica</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-sky-50 hover:bg-sky-100 transition-colors">
                      <Award className="h-5 w-5 text-sky-600" />
                      <span>Data Engineering Foundation Certification 2024/2025 - Informatica</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-16 bg-emerald-50 scroll-mt-20">
          <div className="container">
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Mail className="mr-2 h-6 w-6 text-emerald-600" />
                <h2 className="text-3xl font-bold tracking-tight text-emerald-800">Get In Touch</h2>
              </div>
              <p className="text-emerald-700">Feel free to reach out for collaborations or just a chat.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-white border border-emerald-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-emerald-700">Contact Information</CardTitle>
                  <CardDescription>Ways to connect with me</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 transition-colors">
                    <Mail className="mr-2 h-5 w-5 text-emerald-600" />
                    <span>saiprasanthmantha@gmail.com</span>
                  </div>
                  <div className="flex items-center p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 transition-colors">
                    <Linkedin className="mr-2 h-5 w-5 text-emerald-600" />
                    <Link
                      href="https://www.linkedin.com/in/mantha-sai-prasanth/"
                      target="_blank"
                      className="hover:underline"
                    >
                      linkedin.com/in/mantha-sai-prasanth
                    </Link>
                  </div>
                  <div className="flex items-center p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 transition-colors">
                    <Github className="mr-2 h-5 w-5 text-emerald-600" />
                    <Link
                      href="https://github.com/ManthaPrasanth?tab=repositories"
                      target="_blank"
                      className="hover:underline"
                    >
                      github.com/ManthaPrasanth
                    </Link>
                  </div>
                  <div className="flex items-center p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 transition-colors">
                    <MapPin className="mr-2 h-5 w-5 text-emerald-600" />
                    <span>Denton, TX (Open to Relocate)</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-emerald-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-emerald-700">Send a Message</CardTitle>
                  <CardDescription>I'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input id="name" className="w-full rounded-md border border-emerald-200 bg-white px-3 py-2" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full rounded-md border border-emerald-200 bg-white px-3 py-2"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <input id="subject" className="w-full rounded-md border border-emerald-200 bg-white px-3 py-2" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full rounded-md border border-emerald-200 bg-white px-3 py-2"
                      ></textarea>
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-emerald-100 hover:bg-emerald-200 text-emerald-800">Send Message</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 md:py-8 bg-sky-100">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <BrainCircuit className="h-5 w-5 text-sky-600" />
            <span className="text-sm font-semibold text-sky-800">Sai Prasanth Mantha</span>
          </div>
          <p className="text-center text-sm text-sky-700 md:text-left">
            &copy; {new Date().getFullYear()} Sai Prasanth Mantha. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="mailto:saiprasanthmantha@gmail.com"
              className="text-sm text-sky-700 hover:text-sky-600 hover:underline"
            >
              Email
            </Link>
            <Link
              href="https://www.linkedin.com/in/mantha-sai-prasanth/"
              target="_blank"
              className="text-sm text-sky-700 hover:text-sky-600 hover:underline"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Project Card Component
function ProjectCard({ title, description, tags, image, points, color, githubUrl }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col bg-white border border-violet-100">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-all hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-violet-700">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} className="bg-violet-50 text-violet-700 hover:bg-violet-100">
              {tag}
            </Badge>
          ))}
        </div>
        <ul className="list-disc pl-5 space-y-1">
          {points.map((point, index) => (
            <li key={index} className="text-sm text-gray-600">
              {point}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          size="sm"
          className="border-violet-200 text-violet-700 hover:bg-violet-50"
          asChild={!!githubUrl}
        >
          {githubUrl ? (
            <Link href={githubUrl} target="_blank">
              <FileText className="mr-2 h-4 w-4" />
              View Details
            </Link>
          ) : (
            <>
              <FileText className="mr-2 h-4 w-4" />
              View Details
            </>
          )}
        </Button>
        <Button size="sm" className="bg-violet-100 hover:bg-violet-200 text-violet-800" asChild={!!githubUrl}>
          {githubUrl ? (
            <Link href={githubUrl} target="_blank">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          ) : (
            <>
              <Github className="mr-2 h-4 w-4" />
              Code
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

// Skill Card Component
function SkillCard({ title, skills, icon, color }) {
  return (
    <Card className="h-full bg-white border border-amber-100">
      <CardHeader className="flex flex-row items-center gap-4">
        {icon}
        <div>
          <CardTitle className="text-amber-700">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} className="bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Timeline Item Component
function TimelineItem({ title, organization, location, date, description, color }) {
  const getColor = (color) => {
    const colors = {
      sky: "bg-sky-100",
      emerald: "bg-emerald-100",
      violet: "bg-violet-100",
      amber: "bg-amber-100",
    }
    return colors[color] || "bg-sky-100"
  }

  const getTextColor = (color) => {
    const textColors = {
      sky: "text-sky-700",
      emerald: "text-emerald-700",
      violet: "text-violet-700",
      amber: "text-amber-700",
    }
    return textColors[color] || "text-sky-700"
  }

  return (
    <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gray-200">
      <div className={`absolute left-[-8px] top-1 h-4 w-4 rounded-full ${getColor(color)}`}></div>
      <div className="space-y-3">
        <div>
          <h3 className={`font-semibold text-lg ${getTextColor(color)}`}>{title}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600">
            <span className="font-medium">{organization}</span>
            {location && (
              <>
                <span className="hidden sm:inline mx-2">•</span>
                <span>{location}</span>
              </>
            )}
            <span className="hidden sm:inline mx-2">•</span>
            <span>{date}</span>
          </div>
        </div>
        {Array.isArray(description) ? (
          <ul className="list-disc pl-5 space-y-1">
            {description.map((item, index) => (
              <li key={index} className="text-sm text-gray-600">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-600">{description}</p>
        )}
      </div>
    </div>
  )
}

