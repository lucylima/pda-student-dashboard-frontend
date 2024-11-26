import { useEffect, useState } from "react"
import axios from "axios"

export function StudentDashboard() {
    const [students, setStudents] = useState()

    useEffect(() => {
        const fetchStudents = async () => {
            const { data } = await axios.get("http://localhost:3000/student")
            setStudents(data)
        }
        fetchStudents()
    })

    return (
        <>
            <h1> Hello world</h1>
            {students}
        </>
    )
}