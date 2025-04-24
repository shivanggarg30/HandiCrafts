import React, { useState, useEffect } from 'react';
import { getAuth, sendEmailVerification } from "firebase/auth";

const VerifyEmail = () => {
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const auth = getAuth();
    const user = auth.currentUser;

    useEffect(() => {
        if (user) {
            setIsEmailVerified(user.emailVerified);
        }
    }, [user]);

    const resendEmail = async () => {
        try {
            await sendEmailVerification(user);
            alert('Verification email resent. Please check your inbox.');
        } catch (error) {
            console.error("Error resending email verification:", error);
            alert('Failed to resend verification email.');
        }
    };

    return (
        <div>
            <p>Please verify your email to continue using our services.</p>
            <button onClick={resendEmail}>
                Resend Verification Email
            </button>
        </div>
    );
};

export default VerifyEmail;
