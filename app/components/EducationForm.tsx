import { Education, Experience } from '@/type';
import { CirclePlus } from 'lucide-react';
import React, { useState } from 'react';

type Props = {
    educations: Education[];
    setEducation: (educations: Education[]) => void;
};

const EducationForm: React.FC<Props> = ({ educations, setEducation }) => {



    const [newEducation, setNewEducation] = useState<Education>({
        school: "",
        degree: "",
        description: "",
        startDate: "",
        endDate: "",
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fied: keyof Education) => {
        setNewEducation({ ...newEducation, [fied]: e.target.value })
    }

    const handleAddEducation = () => {
        setEducation([...educations, newEducation])
        setNewEducation({
            school: "",
            degree: "",
            description: "",
            startDate: "",
            endDate: "",
        }
        )
    }




    return (
        <div>
            <div className='flex flex-col gap-4'>

                <div className='flex justify-between'>
                    <input
                        type="text"
                        placeholder="Nom de l'école"
                        value={newEducation.school}
                        onChange={(e) => handleChange(e, 'school')}
                        className='input input-bordered w-full'
                    />

                    <input
                        type="text"
                        placeholder="Nom du diplôme"
                        value={newEducation.degree}
                        onChange={(e) => handleChange(e, 'degree')}
                        className='input input-bordered w-full ml-4'
                    />
                </div>

                <div className='flex justify-between'>
                    <input
                        type="text"
                        placeholder="Début"
                        onFocus={(e) => e.target.type = "date"}
                        onBlur={(e) => {
                            if (!e.target.value) e.target.type = "text"
                        }}
                        value={newEducation.startDate}
                        onChange={(e) => handleChange(e, 'startDate')}
                        className='input input-bordered w-full'
                    />

                    <input
                        type="text"
                        placeholder="Fin"
                        onFocus={(e) => e.target.type = "date"}
                        onBlur={(e) => {
                            if (!e.target.value) e.target.type = "text"
                        }}
                        value={newEducation.endDate}
                        onChange={(e) => handleChange(e, 'endDate')}
                        className='input input-bordered w-full ml-4'
                    />


                </div>
                <textarea
                    placeholder="Description"
                    value={newEducation.description}
                    onChange={(e) => handleChange(e, 'description')}
                    className="input input-bordered w-full min-h-[250px]"
                />


            </div>

            <button
                onClick={handleAddEducation}
                className='btn btn-primary mt-4'
            >
                Ajouter
                <CirclePlus className='w-4' />
            </button>
        </div>
    );
};

export default EducationForm;
