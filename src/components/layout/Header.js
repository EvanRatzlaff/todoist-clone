import { React } from 'react';
import { FaAngellist } from 'react-icons/fa'

export const Header = () => {
    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src="/iages/logo.png" alt="Todoist" />
                </div>
                <div className="settings">
                    <ul>
                        <li>*</li>
                        <li><FaAngellist /></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}