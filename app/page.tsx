"use client"
import { Download, Eye, RefreshCcw, RotateCw, Save } from "lucide-react";
import Image from "next/image";
import PersonalDetailsForms from "./components/PersonalDetailsForms";
import { useEffect, useRef, useState } from "react";
import { Education, Experience, Hobby, Language, PersonalDetails, Skill } from "@/type";
import { educationsPreset, experiencesPreset, hobbiesPreset, languagesPreset, personalDetailsPreset, skillsPreset } from "@/presets";
import CVPreview from "./components/CVPreview";
import ExperienceForm from "./components/ExperienceForm";
import EducationForm from "./components/EducationForm";
import LanguagesForm from "./components/LanguagesForm";
import SkillForm from "./components/SkillForm";
import HobbyForm from "./components/HobbyForm";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import confetti from "canvas-confetti";
import React, { forwardRef } from 'react';


export default function Home() {
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>(personalDetailsPreset)
  const [file, setFile] = useState<File | null>(null)
  const [theme, setTheme] = useState<string>('lemonade')
  const [zoom, setZoom] = useState<number>(130)
  const [experiences, setExperience] = useState<Experience[]>(experiencesPreset)
  const [educations, setEducation] = useState<Education[]>(educationsPreset)
  const [languages, setLanguages] = useState<Language[]>(languagesPreset)
  const [skills, setSkills] = useState<Skill[]>(skillsPreset)
  const [hobbies, setHobbies] = useState<Hobby[]>(hobbiesPreset)


  useEffect(() => {
    const defaultImageUrl = '/profil.png';
    fetch(defaultImageUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const defaultFile = new File([blob], "profil.png", { type: blob.type });
        setFile(defaultFile);
      });
  }, []);


  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ]




  const handleResetExperiences = () => setExperience([])
  const handleResetEducation = () => setEducation([])
  const handleResetLanguages = () => setLanguages([])
  const handleResetSkills = () => setSkills([])
  const handleResetHobbies = () => setHobbies([])



  const handleDownloadPdf = async () => {
    const element = cvPreviewRef.current
    if (element) {
      try {
        const canvas = await html2canvas(element, {
          scale: 3,
          useCORS: true,
        })
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "cm",
          format: "A4",
        })

        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`cv.pdf`);

        const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
        if (modal) {
          modal.close()
        }

        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          zIndex: 9999,
        });
      }

      catch (error) {
        console.error('Erreur lors du téléchargement du PDF')
      }
    }
  }

  const handleResetPersonalDetails = () => setPersonalDetails({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    photoUrl: "",
    description: "",
    postSeeking: ""
  }
  )

  const cvPreviewRef = useRef<HTMLDivElement>(null);


  return (
    <div data-theme="forest">
      <div className="hidden lg:block">

        <section className="flex items-center h-screen">
          <div className="w-1/3 h-full p-10 bg-base-200 scrollable no-scrollbar">
            <div className="mb-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold italic">Collégium <span className="text-primary">Validae</span></h1>

              <button onClick={handleDownloadPdf} className="btn btn-accent">Télécharger< Download className="w-4" /></button>
            </div>

            <div className="flex flex-col gap-6 rounded-lg mb-4">
              <div className="flex items-center justify-between">
                <span className="badge badge-secondary badge-outline">
                  Qui es-tu ?
                </span>

                <button
                  onClick={handleResetPersonalDetails}
                  className="btn btn-primary btn-square btn-sm">
                  <RefreshCcw className="w-4 h-4" />
                </button>

              </div>
              <PersonalDetailsForms
                personalDetails={personalDetails}
                setPersonalDetails={setPersonalDetails}
                setFile={setFile}
              />

            </div>




            <div className="flex flex-col gap-6 rounded-lg mb-4">
              <div className="flex items-center justify-between">
                <span className="badge badge-secondary badge-outline">
                  Expérience
                </span>

                <button
                  onClick={handleResetExperiences}
                  className="btn btn-primary btn-square btn-sm">
                  <RefreshCcw className="w-4 h-4" />
                </button>
              </div>

              <ExperienceForm
                experience={experiences}
                setExperiences={setExperience}
              />
            </div>

            <div className="flex flex-col gap-6 rounded-lg mb-4">
              <div className="flex items-center justify-between">
                <span className="badge badge-secondary badge-outline">
                  Scolarité
                </span>

                <button
                  onClick={handleResetEducation}
                  className="btn btn-primary btn-square btn-sm">
                  <RefreshCcw className="w-4 h-4" />
                </button>
              </div>
              <EducationForm
                educations={educations}
                setEducation={setEducation}
              />

              <div className="flex flex-col gap-6 rounded-lg mb-4">

                <div className="flex items-center justify-between">
                  <span className="badge badge-secondary badge-outline">
                    Langues
                  </span>

                  <button
                    onClick={handleResetLanguages}
                    className="btn btn-primary btn-square btn-sm">
                    <RefreshCcw className="w-4 h-4" />
                  </button>
                </div>

                <LanguagesForm
                  languages={languages}
                  setLanguages={setLanguages}
                />

                <div className="flex justify-between">
                  <div className="w-1/2">
                    <div className="flex items-center justify-between">
                      <span className="badge badge-secondary badge-outline">
                        Compétences
                      </span>

                      <button
                        onClick={handleResetSkills}
                        className="btn btn-primary btn-square btn-sm">
                        <RefreshCcw className="w-4 h-4" />
                      </button>


                    </div>

                    <SkillForm skills={skills} setSkills={setSkills} />


                  </div>

                  <div className="w-1/2 ml-4">
                    <div className="flex items-center justify-between">
                      <span className="badge badge-secondary badge-outline">
                        Loisirs
                      </span>

                      <button
                        onClick={handleResetHobbies}
                        className="btn btn-primary btn-square btn-sm">
                        <RefreshCcw className="w-4 h-4" />
                      </button>


                    </div>

                    <HobbyForm hobbies={hobbies} setHobbies={setHobbies} />


                  </div>

                </div>

              </div>

            </div>
          </div>



          <div className="w-2/3 h-full bg-base-100 scrollable-preview">

            <div className="flex items-center justify-center fixed z-[9999] top-5 right-5">

              <p className="mr-4 text-sm text-primary">{zoom}</p>
              <input type="range"
                min={50} max={200}
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                className="range range-xs range-primary" />


            </div>



            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="select select-bordered fixed z-[999] select-sm top-12 right-5 w-35 z-[9999]"
            >
              {themes.map((themeName) => (
                <option key={themeName} value={themeName}>
                  {themeName}
                </option>
              ))}
            </select>


            <div
              className="flex justify-center items-center"
              style={{
                transform: `scale(${zoom / 200})`
              }}
            >
              <CVPreview
                personalDetails={personalDetails}
                file={file}
                theme={theme}  // <-- Vérifie que cette valeur est bien celle sélectionnée
                experiences={experiences}
                educations={educations}
                languages={languages}
                skills={skills}
                hobbies={hobbies}
                download={false}
                ref={cvPreviewRef}
              />

            </div>
          </div>
        </section>



        <div style={{ position: "absolute", left: "-9999px", top: 0 }}>
          <CVPreview
            personalDetails={personalDetails}
            file={file}
            theme={theme}
            experiences={experiences}
            educations={educations}
            languages={languages}
            skills={skills}
            hobbies={hobbies}
            download={true}
            ref={cvPreviewRef}
          />
        </div>

      </div >

      <div className="lg:hidden">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Oups...</h1>
              <Image
                src="/sorry.png"
                width={200}
                height={200}
                alt="Picture of the author"
                className="mx-auto my-6"
              />
              <p className="py-6">
                Collégium Validae n'est accesible que sur ordinateur !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
