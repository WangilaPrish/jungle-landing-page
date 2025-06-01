import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="bg-jungle-50 py-20 px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-jungle-700 mb-4">
                Welcome to the Jungle!
            </h1>
            <p className="text-lg md:text-xl text-jungle-600 max-w-xl mx-auto mb-6">
                A modern landing page using React, TypeScript, DaisyUI, and TailwindCSS.
            </p>
            <button className="btn bg-jungle-500 hover:bg-jungle-600 text-white">
                Get Started
            </button>
        </section>
    );
};

export default Hero;
