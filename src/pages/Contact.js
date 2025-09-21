import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaDownload, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/Contact.css';

function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ 
    from_name: '', 
    from_email: '', 
    message: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const resumeUrl = 'https://drive.google.com/file/d/1k1-QLtvzodylf6IM_rcwlFpaJLcvPLcN/view?usp=sharing';

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.from_name || !formData.from_email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission - replace with actual emailjs implementation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Message sent successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Resume.pdf';
    link.click();
  };

  const openGoogleMaps = () => {
    window.open("https://www.google.com/maps", "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const contactInfo = [
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      content: '+91-9766440296',
      action: 'Write me →',
      link: 'https://wa.me/9766440296',
      color: '#25D366'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      content: 'Nanded, Maharashtra',
      action: 'Reach to me →',
      link: openGoogleMaps,
      color: '#EA4335'
    },
    {
      icon: FaEnvelope,
      title: 'E-mail',
      content: 'arjunahanwate358@gmail.com',
      action: 'Mail me →',
      link: 'mailto:arjunahanwate358@gmail.com',
      color: '#1877F2'
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/arjun-hanwate-94a424230/",
      color: '#0A66C2',
      name: 'LinkedIn'
    },
    {
      icon: FaGithub,
      href: "https://github.com/ArjunAHanwate",
      color: '#171515',
      name: 'GitHub'
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/arjuna_hanwate/",
      color: '#E4405F',
      name: 'Instagram'
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/arjun.hanwate.96",
      color: '#1877F2',
      name: 'Facebook'
    }
  ];

  return (
    <div className="contact-container">
      {/* Cursor Follower */}
      <div 
        className="cursor-follower"
        style={{
          left: mousePosition.x * window.innerWidth - 10,
          top: mousePosition.y * window.innerHeight - 10,
        }}
      />

      {/* Floating Particles */}
      <div className="particles">
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 10}s`
            }}
          />
        ))}
      </div>

      {/* Background Effects */}
      <div className="contact-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Header Section */}
      <motion.section 
        className="contact-header"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="header-content" variants={itemVariants}>
          <h1>
            <span className="main-title">Get In Touch</span>
            <span className="sub-title">Contact Me</span>
          </h1>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <section className="contact-main">
        <div className="contact-content">
          
          {/* Contact Info Section */}
          <motion.div 
            className="contact-info-section"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
          >
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-info-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="info-icon" style={{ color: info.color }}>
                    <info.icon />
                  </div>
                  <div className="info-content">
                    <h3>{info.title}</h3>
                    <p>{info.content}</p>
                    <a 
                      href={typeof info.link === 'string' ? info.link : '#'}
                      onClick={typeof info.link === 'function' ? info.link : undefined}
                      target={typeof info.link === 'string' ? "_blank" : undefined}
                      rel={typeof info.link === 'string' ? "noopener noreferrer" : undefined}
                    >
                      {info.action}
                    </a>
                  </div>
                  <div className="card-glow" style={{ background: `radial-gradient(circle, ${info.color}20 0%, transparent 70%)` }}></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div 
            className="contact-form-section"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
          >
            <motion.form 
              className="contact-form"
              ref={form}
              onSubmit={handleSubmit}
              variants={itemVariants}
            >
              <div className="form-header">
                <h2>Send Message</h2>
                <p>Let's start a conversation</p>
              </div>

              <div className="form-fields">
                <div className="input-group">
                  <input 
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    className={formData.from_name ? 'filled' : ''}
                  />
                  <label>Name</label>
                  <div className="input-highlight"></div>
                </div>

                <div className="input-group">
                  <input 
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    className={formData.from_email ? 'filled' : ''}
                  />
                  <label>Email</label>
                  <div className="input-highlight"></div>
                </div>

                <div className="input-group textarea-group">
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={formData.message ? 'filled' : ''}
                    rows="5"
                  ></textarea>
                  <label>Message</label>
                  <div className="input-highlight"></div>
                </div>
              </div>

              <div className="form-buttons">
                <motion.button 
                  type="submit"
                  className="btn-send"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="loading-spinner"></div>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>

                <motion.button 
                  type="button"
                  className="btn-resume"
                  onClick={handleDownloadClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload />
                  Resume
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <motion.section 
        className="social-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="social-content">
          <h2>Connect With Me</h2>
          <p>Follow my journey on social media</p>
          
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 5,
                  boxShadow: `0 0 20px ${social.color}40`
                }}
                whileTap={{ scale: 0.9 }}
                style={{ '--hover-color': social.color }}
              >
                <social.icon />
                <span className="social-tooltip">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="faq-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="faq-content">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How quickly do you respond?</h3>
              <p>I typically respond within 24 hours during weekdays.</p>
            </div>
            <div className="faq-item">
              <h3>What services do you offer?</h3>
              <p>Full-stack web development, mobile app development, and consulting.</p>
            </div>
            <div className="faq-item">
              <h3>Do you work remotely?</h3>
              <p>Yes, I work with clients worldwide and offer flexible arrangements.</p>
            </div>
            <div className="faq-item">
              <h3>What's your preferred communication method?</h3>
              <p>Email for formal discussions, WhatsApp for quick updates.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="contact-cta"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="cta-content">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss how we can bring your ideas to life with modern technology and innovative solutions.</p>
          <div className="cta-stats">
            <div className="stat">
              <h3>24hrs</h3>
              <p>Response Time</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat">
              <h3>15+</h3>
              <p>Projects Delivered</p>
            </div>
          </div>
        </div>
      </motion.section>

      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Contact;