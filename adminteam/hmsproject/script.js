
const doctors = [
    { name: 'Sravan Kumar', department: 'Allergists/Immunologists', mobile: '9390707891', status: 'Permanent' },
    { name: 'KiranKumar', department: 'Emergency Medicine Specialty', mobile: '7660984667', status: 'On Hold' },
    { name: 'Rama Rao', department: 'Allergist/Immunologists', mobile: '	957281024', status: 'Permanent' },
    { name: 'Ramesh Kumar',	department:'Emergency Medicine Specialty',	mobile:'9451254358', status:'On Hold' },
    { name: 'Raj kumar',department:'Demotologist',	mobile:'9373328297', status:'Permanent' }
];
const patients = [
    { name: 'Sandy', symptoms: 'Bleeding in nose', mobile: '9494984456', status: 'Admitted' },
    { name: 'Tharun', symptoms: 'Loose Motion', mobile: '9652523178', status: 'On Hold' },
    { name: 'Pandari', symptoms: 'Pain', mobile: '	9390707892', status: 'Discharged' },
    { name: 'Prabhas', symptoms: 'Cough', mobile: '	9423564578', status: 'Admitted' },
    { name: 'Krishna', symptoms: 'Headche', mobile: '9493265478', status: 'Admitted' }
];

function loadDoctors() {
    const doctorTable = document.querySelector('#doctor-table-body');
    doctorTable.innerHTML = ''; 
    doctors.forEach(doctor => {
        const row = `
            <tr>
                <td>${doctor.name}</td>
                <td>${doctor.department}</td>
                <td>${doctor.mobile}</td>
                <td>${doctor.status}</td>
            </tr>
        `;
        doctorTable.innerHTML += row;
    });
}

function loadPatients() {
    const patientTable = document.querySelector('#patient-table-body');
    patientTable.innerHTML = ''; 
    patients.forEach(patient => {
        const row = `
            <tr>
                <td>${patient.name}</td>
                <td>${patient.symptoms}</td>
                <td>${patient.mobile}</td>
                <td>${patient.status}</td>
            </tr>
        `;
        patientTable.innerHTML += row;
    });
}
function updateDashboard() {
    document.querySelector('.doctor-card p').textContent = doctors.length;
    document.querySelector('.patient-card p').textContent = patients.length;
    document.querySelector('.appointment-card p').textContent = 5; 
}
function simulateNewData() {
    setTimeout(() => {
        doctors.push({ name: 'Dr.Omer Mohammed', department: 'Neurologists', mobile: '9874243210', status: 'Permanent' });
        patients.push({ name: 'Mateen', symptoms: 'Fever', mobile: '9876542534', status: 'On Leave' });
        loadDoctors();
        loadPatients();
        updateDashboard();
    }, 5000); 
}


document.addEventListener('DOMContentLoaded', () => {
    loadDoctors();
    loadPatients();
    updateDashboard();
    simulateNewData();
});
