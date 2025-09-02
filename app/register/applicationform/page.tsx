"use client";

import React, { useEffect, useRef } from 'react';
import { Header } from "../../../components/navigation/Header";
import { Footer } from "../../../components/Footer/Footer";

interface ApplicationFormProps {
  title?: string;
  height?: string;
  width?: string;
  showTitle?: boolean;
  className?: string;
  containerClassName?: string;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ 
  title = "Application Form",
  height = "1200px", // Increased default height
  width = "100%",
  showTitle = false,
  className = "",
  containerClassName = ""
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://form.jotform.com") return;
      
      if (event.data && event.data.action === 'resize' && iframeRef.current) {
        const newHeight = Math.max(event.data.height, 800); // Minimum height
        iframeRef.current.style.height = newHeight + 'px';
      }
    };

    // Set initial height after iframe loads
    const handleLoad = () => {
      if (iframeRef.current) {
        iframeRef.current.style.height = height;
      }
    };

    window.addEventListener('message', handleMessage);
    
    if (iframeRef.current) {
      iframeRef.current.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('message', handleMessage);
      if (iframeRef.current) {
        iframeRef.current.removeEventListener('load', handleLoad);
      }
    };
  }, [height]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="flex-1">
        <div className={`application-form-container ${containerClassName}`}>
          {showTitle && title && (
            <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
          )}
          
          <div className={`application-form-wrapper ${className}`} style={{ minHeight: height }}>
            <iframe
              ref={iframeRef}
              src="https://form.jotform.com/252088586542062"
              width={width}
              height={height}
              frameBorder="0"
              scrolling="auto"
              title={title}
              style={{
                border: 'none',
                maxWidth: '100%',
                minHeight: height,
                display: 'block'
              }}
              allow="geolocation; microphone; camera"
            />
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ApplicationForm;