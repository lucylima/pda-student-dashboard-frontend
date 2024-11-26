import { useEffect, useState } from "react"
import axios from "axios"

export function StudentDashboard() {
    const [students, setStudents] = useState([
        {
            "fullName": "João Silva Oliveira",
            "cpf": "123.456.789-00",
            "birthDate": "1990-05-15",
            "email": "joao.silva@example.com",
            "telephone": "(11) 98765-4321",
            "gender": "Masculino",
            "address": "Rua das Flores, 123, Bairro Jardim, São Paulo, SP, 12345-678",
            "familyIncome": 3500,
            "studentClass": "Turma B - 3º ano",
            "status": "Ativo"
        },
        {
            "fullName": "Maria Clara Santos",
            "cpf": "234.567.890-11",
            "birthDate": "1988-08-25",
            "email": "maria.clara@example.com",
            "telephone": "(21) 98876-5432",
            "gender": "Feminino",
            "address": "Avenida Central, 456, Centro, Rio de Janeiro, RJ, 21000-789",
            "familyIncome": 2800,
            "studentClass": "Turma A - 2º ano",
            "status": "Ativo"
        },
        {
            "fullName": "Carlos Eduardo Lima",
            "cpf": "345.678.901-22",
            "birthDate": "1995-12-10",
            "email": "carlos.eduardo@example.com",
            "telephone": "(31) 97777-8888",
            "gender": "Masculino",
            "address": "Rua dos Pinhais, 789, Bairro Esperança, Belo Horizonte, MG, 31000-456",
            "familyIncome": 4500,
            "studentClass": "Turma C - 1º ano",
            "status": "Ativo"
        },
        {
            "fullName": "Ana Beatriz Ferreira",
            "cpf": "456.789.012-33",
            "birthDate": "2000-03-30",
            "email": "ana.beatriz@example.com",
            "telephone": "(41) 99999-1234",
            "gender": "Feminino",
            "address": "Travessa Alegria, 12, Bairro Novo Horizonte, Curitiba, PR, 80000-987",
            "familyIncome": 5200,
            "studentClass": "Turma D - 4º ano",
            "status": "Ativo"
        },
        {
            "fullName": "Rafael Moreira Costa",
            "cpf": "567.890.123-44",
            "birthDate": "1998-07-20",
            "email": "rafael.moreira@example.com",
            "telephone": "(51) 98765-3210",
            "gender": "Masculino",
            "address": "Rua da Liberdade, 321, Bairro Jardim das Acácias, Porto Alegre, RS, 91000-321",
            "familyIncome": 3900,
            "studentClass": "Turma A - 5º ano",
            "status": "Ativo"
        },
        {
            "fullName": "Juliana Mendes Souza",
            "cpf": "678.901.234-55",
            "birthDate": "1993-04-05",
            "email": "juliana.souza@example.com",
            "telephone": "(71) 98888-1111",
            "gender": "Feminino",
            "address": "Avenida Bahia, 987, Bairro Solar do Oeste, Salvador, BA, 40000-567",
            "familyIncome": 3100,
            "studentClass": "Turma B - 3º ano",
            "status": "Inativo"
        },
        {
            "fullName": "Pedro Henrique Alves",
            "cpf": "789.012.345-66",
            "birthDate": "1992-09-14",
            "email": "pedro.alves@example.com",
            "telephone": "(81) 97766-5544",
            "gender": "Masculino",
            "address": "Rua dos Girassóis, 654, Bairro Bela Vista, Recife, PE, 52000-654",
            "familyIncome": 4700,
            "studentClass": "Turma C - 6º ano",
            "status": "Ativo"
        },
        {
            "fullName": "Larissa Camargo Pinto",
            "cpf": "890.123.456-77",
            "birthDate": "1996-06-18",
            "email": "larissa.camargo@example.com",
            "telephone": "(91) 98777-6677",
            "gender": "Feminino",
            "address": "Travessa das Palmeiras, 333, Bairro São José, Belém, PA, 66000-444",
            "familyIncome": 2500,
            "studentClass": "Turma A - 2º ano",
            "status": "Ativo"
        },
        {
            "fullName": "Fernando Luiz Rocha",
            "cpf": "901.234.567-88",
            "birthDate": "1994-11-22",
            "email": "fernando.rocha@example.com",
            "telephone": "(62) 99900-2233",
            "gender": "Masculino",
            "address": "Avenida Goiás, 111, Bairro Morada do Sol, Goiânia, GO, 74000-555",
            "familyIncome": 3000,
            "studentClass": "Turma B - 7º ano",
            "status": "Ativo"
        },
        {
            "fullName": "Camila Torres Ribeiro",
            "cpf": "012.345.678-99",
            "birthDate": "1999-02-07",
            "email": "camila.ribeiro@example.com",
            "telephone": "(84) 98654-7890",
            "gender": "Feminino",
            "address": "Rua Nova Vida, 456, Bairro Primavera, Natal, RN, 59000-666",
            "familyIncome": 4200,
            "studentClass": "Turma C - 8º ano",
            "status": "Inativo"
        }
    ])

    const studentClasses = [
        { "id": 1, "name": "Turma B - 3º ano" },
        { "id": 2, "name": "Turma A - 2º ano" },
        { "id": 3, "name": "Turma C - 1º ano" },
        { "id": 4, "name": "Turma D - 4º ano" },
        { "id": 5, "name": "Turma A - 5º ano" },
        { "id": 6, "name": "Turma C - 6º ano" },
        { "id": 7, "name": "Turma B - 7º ano" },
        { "id": 8, "name": "Turma C - 8º ano" }
    ]

    const handleCheckboxChange = (event, id) => {
        console.log(event.target.value)
        setStudents(() => {
            students.filter((filteredByClass) => filteredByClass.studentClass == event.target.value)
        })
    }

    useEffect(() => {
        // const fetchStudents = async () => {
        //     const { data } = await axios.get("http://localhost:3000/student")
        //     setStudents(data)
        // }
        // fetchStudents()
    })

    return (
        <>
            <h1>Lista de estudantes</h1>
            {studentClasses.map((studentClass) => (
                <p key={studentClass.id}>
                    <label htmlFor={studentClass.name}>
                        <input type="checkbox" name="filterByClass" onChange={(event) => {
                            handleCheckboxChange(event, studentClass.id)
                        }} id={studentClass.name} value={studentClass.name} />
                        {studentClass.name}
                    </label>
                </p>
            ))}
            <table>
                <thead>
                    <tr>
                        <th>Nome completo</th>
                        <th>cpf</th>
                        <th>email</th>
                        <th>telefone</th>
                        <th>turma</th>
                        <th>data de nascimento</th>
                        <th>genero</th>
                        <th>local</th>
                        <th>status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>
                                {student.fullName}
                            </td>
                            <td>
                                {student.cpf}
                            </td>
                            <td>
                                {student.email}
                            </td>
                            <td>
                                {student.telephone}
                            </td>
                            <td>
                                {student.studentClass}
                            </td>
                            <td>
                                {student.birthDate}
                            </td>
                            <td>
                                {student.gender}
                            </td>
                            <td>
                                {student.address}
                            </td>
                            <td>
                                {student.status}
                            </td>
                            <td>
                                icone
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}