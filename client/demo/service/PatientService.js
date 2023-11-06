import axios from "axios";
export const URL = '//localhost:5000';

export const PatientService = {

    async postPatientC(chamber, specialist, doctor, date1, time1, name, age, gender, phone, details) {

        const data = {
            chamber,
            specialist,
            doctor,
            date1,
            time1,
            name,
            age,
            gender,
            phone,
            details,
            status: "NotUpdate",
        }

        await axios.post(`${URL}/post-patient`, data)
    },

    async postPatient(chamber, specialist, doctor, date1, time1, name, age, gender, phone, details, serial) {
        
        console.log("Check--1");
        const data =  {
            chamber,
            specialist,
            doctor,
            date1,
            time1,
            name,
            age,
            gender,
            phone,
            details,
            serial,
            status: 'Updated'
        }

        await axios.post(`${URL}/post-patient`, data);
    },

    async editPatient(chamber, specialist, doctor, date1, time1, name, age, gender, phone , serial, _id, details) {
        const data = {
            chamber,
            specialist,
            doctor,
            date1,
            time1,
            name,
            age,
            gender,
            phone,
            serial,
            details,
            status: 'Updated'
        }

        await axios.post(`${URL}/edit-patient/` + _id, data);
    },

    async getPatient() {
        const response = await axios.get(`${URL}/get-patient`);
        return response;
    }
}