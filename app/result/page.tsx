'use client'
import React, { useState, useEffect } from 'react';

type Data = {
    nama: string;
    email: string;
    nomorhp: string;
    ipk: number;
    pilbe: string;
    semester: string;
}

const BeasiswaPage: React.FC = () => {
    const [data, setData] = useState<Data[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:6969/beasiswa');
                const responseData: Data[] = await res.json();
                setData(responseData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full m-auto mx-auto mt-5">
            <table className="w-full text-sm text-gray-500 dark:text-gray-400 text-center">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Nomor</th>
                        <th scope="col" className="px-6 py-3">Nama</th>
                        <th scope="col" className="px-6 py-3">Email</th>
                        <th scope="col" className="px-6 py-3">Nomor Hp</th>
                        <th scope="col" className="px-6 py-3">Semester</th>
                        <th scope="col" className="px-6 py-3">IPK</th>
                        <th scope="col" className="px-6 py-3">Jenis Beasiswa</th>
                        <th scope="col" className="px-6 py-3">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4">{index + 1}</td>
                            <td className="px-6 py-4">{item.nama}</td>
                            <td className="px-6 py-4">{item.email}</td>
                            <td className="px-6 py-4">{item.nomorhp}</td>
                            <td className="px-6 py-4">{item.semester}</td>
                            <td className="px-6 py-4">{item.ipk.toFixed(2)}</td>
                            <td className="px-6 py-4">{item.pilbe}</td>
                            <td className="px-6 py-4">
                                <p className='bg-red-600 text-white rounded-xl h-9 flex items-center justify-center'>Pengajuan</p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BeasiswaPage;
