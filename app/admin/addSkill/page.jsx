"use client";

import { useState } from "react";

const addSkill = () => {

    const [formData, setFormData] = useState({
        end: "",
        skill: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch('/api/skill', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="end">End</label>
                <select name="end" id="end" onChange={(e) => handleChange(e)} required>
                    <option value="">Select End</option>
                    <option value="frontend">Front-End</option>
                    <option value="backend">Back-End</option>
                </select>
                <label htmlFor="skill"></label>
                <input name="skill" type="text" placeholder="Enter your skill(s) (separated by comma)" onChange={(e) => handleChange(e)} required/>
                <button type="submit">Submit</button>
            </form>

        </>
    )

}

export default addSkill