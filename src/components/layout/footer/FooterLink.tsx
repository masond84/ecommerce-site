import React from 'react';
import { Link } from 'react-router-dom';

interface FooterLinkProps {
    to: string;
    children: React.ReactNode;
}

export const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
    return (
        <li>
            <Link
                to={to}
                className="text-gray-300 hover:text-white transition-colors"
            >
                {children}
            </Link>
        </li>
    );
};
