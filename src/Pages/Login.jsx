import React, {useState} from 'react';
import axios from "axios";
import {useAuth} from "../Context/AuthenticationContext";

export const Login = () => {
        const [otp, setOtp] = useState('');
        const [step, setStep] = useState(1);
        const {login} = useAuth();

        const onLogin = () => {
            axios.post('http://192.168.100.25:8000/api/login', {mobile: '03510935875'})
                .then(response => {
                    console.log(response.data)
                    setStep(2);
                    setOtp(response.data.code);
                })
                .catch(error => {

                })
        }

        const handleOtpChange = (e) => {
            setOtp(e.target.value);
        }

        const sendOtp = () => {
            axios.post('http://192.168.100.25:8000/api/otp', {mobile: '03510935875', code: otp})
                .then(response => {
                    setStep(1);
                    login(response.data)
                })
                .catch(error => {

                })
        }
        return (
            <div>
                <button className="bg-gray-400 hover:bg-gray-500 rounded-md py-2 px-3 text-base" onClick={onLogin}>ورود</button>
                {step === 2 ? <div
                    className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-75 text-base">
                    <div className="bg-white w-96 h-64 border border-gray-100 shadow-lg">
                        <div className="flex flex-col items-center justify-center h-full space-y-8">
                            <div>رمز یکبار مصرف</div>
                            <input className="border border-gray-200 rounded-md px-3 py-2 mt-1" type="text"
                                   value={otp}
                                   onChange={(e) => handleOtpChange}/>
                            <button className="bg-gray-400 hover:bg-gray-500 rounded-md py-2 px-3" onClick={sendOtp}>ارسال
                            </button>
                        </div>
                    </div>
                </div> : void (0)}
            </div>
        )
    }
;