import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-jungle-700 text-white py-6 text-center">
            <p>&copy; {new Date().getFullYear()} Jungle Landing Page. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
