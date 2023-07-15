import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    formsData: {
        personalInfo: {
            fName: "",
            lName: "",
            age: "",
            gender: "",
        },

        contactInfo: {
            email: "",
            phoneNum: "",
            address: "",
        },

        tallerDetails: {
            taller: "",
            mode: "",
            hour: "",
        },

        participationDetails: {
            selectExperience: "",
            experience: "",
            preferences: "",
            expected: "",
        },
    }
};

const formsDataSlice = createSlice({
    name: 'formsData',
    initialState,
    reducers: {
        updatePersonalInfo: (state, action) => {
        state.formsData.personalInfo = {
            ...state.formsData.personalInfo,
            ...action.payload,
        };
        },
        updateContactInfo: (state, action) => {
        state.formsData.contactInfo = {
            ...state.formsData.contactInfo,
            ...action.payload,
        };
        },
        updateTallerDetails: (state, action) => {
        state.formsData.tallerDetails = {
            ...state.formsData.tallerDetails,
            ...action.payload,
        };
        },
        updateParticipationDetails: (state, action) => {
        state.formsData.participationDetails = {
            ...state.formsData.participationDetails,
            ...action.payload,
        };
        },
        resetFormsData: (state) => {
        state.formsData = initialState.formsData;
        },
    },
});

export const {
    updatePersonalInfo,
    updateContactInfo,
    updateTallerDetails,
    updateParticipationDetails,
    resetFormsData,
} = formsDataSlice.actions;

export default formsDataSlice.reducer;