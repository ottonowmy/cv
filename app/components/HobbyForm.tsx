import { Hobby } from '@/type';
import { CirclePlus } from 'lucide-react';
import React, { useState } from 'react';

type Props = {
    hobbies: Hobby[];
    setHobbies: (hobbies: Hobby[]) => void;
};

const HobbyForm: React.FC<Props> = ({ hobbies, setHobbies }) => {



    const [newHobby, setNewHobby] = useState<Hobby>({
        name: '',
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fied: keyof Hobby) => {
        setNewHobby({ ...newHobby, [fied]: e.target.value })
    }

    const handleAddHobby = () => {
        setHobbies([...hobbies, newHobby])
        setNewHobby({
            name: '',
        }
        )
    }


    return (
        <div>
            <div className='mt-4'>
                <input
                    type="text"
                    placeholder="Nom du loisir "
                    value={newHobby.name}
                    onChange={(e) => handleChange(e, 'name')}
                    className='input input-bordered w-full ml-4'
                />
            </div>

            <button
                    onClick={handleAddHobby}
                    className='btn btn-primary mt-4'
                >
                    Ajouter
                    <CirclePlus className='w-4' />
                </button>
        </div>
    );
};

export default HobbyForm;
