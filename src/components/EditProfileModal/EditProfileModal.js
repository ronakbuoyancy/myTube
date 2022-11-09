import React, { useState, useRef } from 'react'
import styles from './EditProfileModal.module.css'
import { MdClose } from "react-icons/md";
import { FcCheckmark } from "react-icons/fc";
import Avatar from 'react-avatar';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditProfileModal({ setEditProfileModal }) {
    const [passwordChangeModal, setPasswordChangeModal] = useState(false)
    const [userData, setUserData] = useState({
        profile: '',
        email: 'jigarpatel@gmail.com',
        userName: 'jigar',
    })
    const [updatePassword, setUpdatePassword] = useState({
        currentPassword: '',
        newPassword: '',
        retypePassword: '',
    })
    const inputFile = useRef(null)
    const attachIconclick = () => {
        inputFile.current.click();
    }
    function handleChange(event) {
        // console.log('event', event.target.files[0]);
        // setFile(event.target.files[0])
        let reader = new FileReader()
        reader.readAsDataURL(event.target.files[0])
        reader.onload = () => {
            setUserData((preData) => {
                return ({
                    ...preData,
                    profile: reader.result
                })
            })
        }
    }
    const inputEventHandler = (e) => {
        const { name, value } = e.target
        setUserData((preData) => {
            return ({
                ...preData,
                [name]: value
            })
        })
    }
    const inputEventHandlerForPassword = (e) => {
        const { name, value } = e.target
        setUpdatePassword((preData) => {
            return ({
                ...preData,
                [name]: value
            })
        })
    }
    const editProfileHandler = () => {
        if (userData.email !== '' && userData.userName !== '') {
            toast.success('Edit Profile Successfully Done', {
                position: "top-center",
                toastId: 'Success1',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(() => {
                setEditProfileModal(false)
            }, 2000);
        }
        else {
            toast.error('Please enter a valid data', {
                position: "top-center",
                toastId: 'error1',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        console.log(userData);
    }
    const passwordChangeHandler = () => {
        if (updatePassword.currentPassword !== '' && updatePassword.newPassword !== '' && updatePassword.newPassword === updatePassword.retypePassword) {
            toast.success('Change Password Successfully', {
                position: "top-center",
                toastId: 'Success2',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setPasswordChangeModal(false)
        }
        else {
            toast.error('Please enter a valid data', {
                position: "top-center",
                toastId: 'error2',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        console.log(updatePassword);
    }
    return (
        <div className={styles.editProfileModal}>
            <div className={styles.header}>
                <div className={styles.editProfilTitle}>
                    <MdClose className={styles.icon}
                        onClick={() => {
                            passwordChangeModal ? setPasswordChangeModal(false) :
                                setEditProfileModal(false)
                        }} />
                    <p className={styles.headFirst}>
                        {passwordChangeModal ? 'Change Password' : 'Edit Profile'}
                    </p>
                    <FcCheckmark className={styles.Checkicon}
                        onClick={() => {
                            passwordChangeModal ?
                                passwordChangeHandler() :
                                editProfileHandler()
                        }} />
                </div>
            </div>
            {
                passwordChangeModal ?
                    <div style={{ paddingTop: '50px' }}>
                        <div className={styles.form}>
                            <input type="password"
                                value={updatePassword.currentPassword}
                                name='currentPassword'
                                onChange={inputEventHandlerForPassword}
                                className={styles.form__input} autocomplete="off" placeholder=" " />
                            <label htmlFor="email" className={styles.form__label}>current password</label>
                        </div>
                        <div className={styles.form}>
                            <input type="password"
                                value={updatePassword.newPassword}
                                name='newPassword'
                                onChange={inputEventHandlerForPassword}
                                className={styles.form__input} autocomplete="off" placeholder=" " />
                            <label htmlFor="email" className={styles.form__label}>new password</label>
                        </div>
                        <div className={styles.form}>
                            <input type="password"
                                value={updatePassword.retypePassword}
                                name='retypePassword'
                                onChange={inputEventHandlerForPassword}
                                className={styles.form__input} autocomplete="off" placeholder=" " />
                            <label htmlFor="email" className={styles.form__label}>retype password</label>
                        </div>
                    </div>
                    : <>
                        <div style={{ width: '400px', position: 'fixed' }}>
                            <div className={styles.profilePic}>
                                {userData.profile === '' ?
                                    <Avatar name={userData.userName}
                                        className={styles.avatar} /> :
                                    <img src={userData.profile} />}
                            </div>
                            <p className={styles.profileText}
                                onClick={attachIconclick}>
                                Change profile photo</p>
                            <input type='file' id='file' ref={inputFile}
                                onChange={handleChange}
                                style={{ display: 'none' }} />
                        </div>
                        <div style={{ width: '400px', position: 'fixed', marginTop: "200px" }} >
                            <div className={styles.form}>
                                <input type="text"
                                    value={userData.email}
                                    name='email'
                                    onChange={inputEventHandler}
                                    className={styles.form__input} autocomplete="off" placeholder=" " />
                                <label htmlFor="email" className={styles.form__label}>email</label>
                            </div>
                            <div className={styles.form}>
                                <input type="text"
                                    value={userData.userName}
                                    name='userName'
                                    onChange={inputEventHandler}
                                    className={styles.form__input} autocomplete="off" placeholder=" " />
                                <label htmlFor="email" className={styles.form__label}>user Name</label>
                            </div>
                            <div className={styles.changePassword} >
                                <p onClick={() => setPasswordChangeModal(true)}>
                                    Change password ?
                                </p>
                            </div>
                        </div>
                    </>
            }
            <ToastContainer transition={Zoom}
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default EditProfileModal