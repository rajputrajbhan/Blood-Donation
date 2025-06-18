import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthForm from '../../components/AuthForm';
import OTPForm from '../../components/OTPForm';

const VerifyOTP = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState(location.state?.email || '');

  if (!email) {
    navigate('/register');
    return null;
  }

  const handleResendOTP = async () => {
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch('/api/auth/resend-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to resend OTP');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitOTP = async (otp) => {
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Invalid OTP');
      }
      
      navigate('/register/complete', { state: { email } });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <AuthForm title="Verify Your Email">
        <OTPForm
          email={email}
          onResendOTP={handleResendOTP}
          onSubmit={handleSubmitOTP}
          isLoading={isLoading}
          error={error}
        />
      </AuthForm>
    </div>
  );
};

export default VerifyOTP;