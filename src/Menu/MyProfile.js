import React from 'react';

// custom
import '../App.css';

//import image
import profile from '../img/Mask Group 1.png'

export default function home(){
    
    return(
        <div className="main">
            <div>
                <h1>My profile</h1>
            </div>
            <div className="profile">
                <img src={profile} width="150px" alt="fotoku"/>
                <p style={{fontSize:"24px", paddingTop:"10px"}}>I'm Khairul Imam</p>
                <p>Student of USU</p>
            </div>

            {/* Ini CV singkat ------------------------ */}
            <div class="new2">
                <div class="organization">
                    <h1>Organizations</h1>
                    <table>
                        <tr>
                            <td>Ketua Umum Remaja Islam Masjid Al-Munawwarah</td>
                            <td>2019 - Sekarang</td>
                        </tr>
                        <tr>
                            <td>Ketua Departemen Kaderisasi</td>
                            <td>2018 - 2019</td>
                        </tr>
                        <tr>
                            <td>Ketua Umum Gerakan Literasi Kreatif Siswa</td>
                            <td>2018</td>
                        </tr>
                    </table>
                </div>
                

                <div class="experiences">
                    <h1>Experiences</h1>
                    <table>
                        <tr>
                            <td>Peserta Training Islam Ceria dan Kreatif (TRICK) XV</td>
                            <td>2019</td>
                        </tr>
                        <tr>
                            <td>Peserta Islamic Youth Training</td>
                            <td>2019</td>
                        </tr>
                        <tr>
                            <td>Kelas Adobe Illustrator Sekdes.Id</td>
                            <td>2019</td>
                        </tr>
                    </table>
                </div>

            </div>
        </div>
    )
}