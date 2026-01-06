import { Skill } from '@/type';
import { CirclePlus } from 'lucide-react';
import React, { useState } from 'react';

type Props = {
    skills: Skill[];
    setSkills: (skills: Skill[]) => void;
};

const SkillForm: React.FC<Props> = ({ skills, setSkills }) => {



    const [newSkill, setNewSkill] = useState<Skill>({
        name: '',
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fied: keyof Skill) => {
        setNewSkill({ ...newSkill, [fied]: e.target.value })
    }

    const handleAddSkill = () => {
        setSkills([...skills, newSkill])
        setNewSkill({
            name: '',
        }
        )
    }




    return (
        <div>
            <div className='mt-4'>
                <input
                    type="text"
                    placeholder="Nom de la compétence"
                    value={newSkill.name}
                    onChange={(e) => handleChange(e, 'name')}
                    className='input input-bordered w-full ml-4'
                />
            </div>

            <button
                    onClick={handleAddSkill}
                    className='btn btn-primary mt-4'
                >
                    Ajouter
                    <CirclePlus className='w-4' />
                </button>
        </div>
    );
};

export default SkillForm;
