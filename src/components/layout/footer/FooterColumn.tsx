import React from 'react';

interface FooterColumnProps {
    title: string;
    children: React.ReactNode;
}

export const FooterColumn: React.FC<FooterColumnProps> = ({ title, children }) => {
    return (
        <div>
            <h3 className="font-semibold text-white mb-4">{title}</h3>
            <ul className="space-y-2">
                {children}
            </ul>
        </div>
    );
};
