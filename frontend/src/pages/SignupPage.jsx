import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, UserPlus, User } from 'lucide-react';
import './AuthPages.css';

/**
 * Signup Page
 * Basic form validation for name, email and password (UI only)
 */
const SignupPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="page-container auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-icon">
            <UserPlus size={28} color="#e74c3c" />
          </div>
          <h2>Create Account</h2>
          <p>Join FireGuard to monitor your safety</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form" noValidate>
          <div className={`form-group ${errors.name ? 'form-error' : ''}`}>
            <label htmlFor="name">
              <User size={16} />
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className={`form-group ${errors.email ? 'form-error' : ''}`}>
            <label htmlFor="email">
              <Mail size={16} />
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className={`form-group ${errors.password ? 'form-error' : ''}`}>
            <label htmlFor="password">
              <Lock size={16} />
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          <button type="submit" className="btn btn-primary btn-full">
            Sign Up
          </button>

          {submitted && (
            <div className="auth-success">
              Account created! (Demo mode — no backend auth)
            </div>
          )}
        </form>

        <div className="auth-footer">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="auth-link">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
