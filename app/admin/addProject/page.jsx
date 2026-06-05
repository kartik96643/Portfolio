"use client";

import { useState } from "react";

const addProject = () => {

    const [formData, setFormData] = useState({
        title: "",
        desc: "",
        tech: "",
        repo: "",
        link: "",
    })

    const [message, setMessage] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/project', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        const ress = await res.json()
        // console.log(ress)
        setMessage(ress?.message)
        setFormData({
            title: "",
            desc: "",
            tech: "",
            repo: "",
            link: "",
        })
        setTimeout(() => {
            setMessage("")
        }, 1500);
        

    }


    return (
        <>
            <h4>{message && message}</h4>

            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Project Title</label>
                <input type="text" name="title" onChange={handleChange} required />
                <label htmlFor="desc">Description</label>
                <input type="text" name="desc" onChange={handleChange} required />
                <label htmlFor="tech">Technologies Used:</label>
                <input type="text" name="tech" placeholder="Enter tech using comma(,) separated" onChange={handleChange} required />
                <label htmlFor="repo">Github Repo Link</label>
                <input type="text" name="repo" onChange={handleChange} required />
                <label htmlFor="link">Live Link</label>
                <input type="text" name="link" onChange={handleChange} required />
                <button type="submit">Add</button>
            </form>


        </>
    )

}

export default addProject;