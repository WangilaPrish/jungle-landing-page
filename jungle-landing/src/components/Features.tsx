import React from 'react';
import { CheckCircle } from 'lucide-react';

const features = [
    'Fully responsive design',
    'Beautiful jungle green shades',
    'Clean typography',
    'Reusable DaisyUI components',
    'Built with TypeScript & TailwindCSS'
];

const Features: React.FC = () => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-jungle-700 mb-6">Features</h2>
                <div className="grid gap-4 md:grid-cols-2">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="card bg-jungle-50 shadow-md hover:shadow-lg transition"
                        >
                            <div className="card-body flex items-center">
                                <CheckCircle className="text-jungle-500 w-6 h-6 mr-3" />
                                <p className="text-jungle-700">{feature}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
