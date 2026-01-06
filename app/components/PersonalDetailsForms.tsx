import { PersonalDetails } from '@/type';
import React from 'react'

type Props = {
    personalDetails: PersonalDetails;
    setPersonalDetails: (pd: PersonalDetails) => void;
    setFile: (file: File | null) => void;
}

const PersonalDetailsForms: React.FC<Props> = ({ personalDetails, setPersonalDetails, setFile }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fied: keyof PersonalDetails) => {
        setPersonalDetails({ ...personalDetails, [fied]: e.target.value })
    }

    

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };


    return (
        <div className='flex flex-col gap-4'>
            <input
                type="text"
                placeholder='Nom complet'
                value={personalDetails.fullname}
                onChange={(e) => handleChange(e, 'fullname')}
                className='input input-bordered w-full'
            />

            <div className='flex'>
                <input
                    type="email"
                    placeholder='Email'
                    value={personalDetails.email}
                    onChange={(e) => handleChange(e, 'email')}
                    className='input input-bordered w-full'
                />

                <input
                    type="email"
                    placeholder='Numéro de téléphone'
                    value={personalDetails.phone}
                    onChange={(e) => handleChange(e, 'phone')}
                    className='input input-bordered w-full ml-4'
                />
            </div>

            <input
                type="text"
                placeholder='Adresse'
                value={personalDetails.address}
                onChange={(e) => handleChange(e, 'address')}
                className='input input-bordered w-full'
            />


            <input
                type="file"
                accept='image/*'
                onChange={handleFileChange}
                className='file-input file-input-bordered file-input-primary w-full'
            />


            <input
                type="text"
                placeholder='Stage Recherché'
                value={personalDetails.postSeeking}
                onChange={(e) => handleChange(e, 'postSeeking')}
                className='input input-bordered w-full'
            />


            <textarea
                placeholder="Une présentation de toi"
                value={personalDetails.description}
                onChange={(e) => handleChange(e, 'description')}
                className="input input-bordered w-full min-h-[250px]"
            />




        </div>



    )
}

export default PersonalDetailsForms