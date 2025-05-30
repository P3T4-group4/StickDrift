import React, { useState } from 'react';
import './Calendar.css';

interface Props {
  month: number; // 1-12
  year: number;
}

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendar: React.FC<Props> = () => {
    const today = new Date();
    const [month, setMonth] = useState(today.getMonth());
    const [year, setYear] = useState(today.getFullYear());

    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDay = firstDay.getDay();

    const handlePrevMonth = () => {
        if (month === 0) {
            setMonth(11);
            setYear(prev => prev - 1);
        } else {
            setMonth(prev => prev - 1);
        }
    }

    const handleNextMonth = () => {
        if (month === 11) {
            setMonth(0);
            setYear(prev => prev + 1);
        } else {
            setMonth(prev => prev + 1);
        }
    }

    const cells = [];

    for (let i = 0; i < startDay; i++) {
        cells.push(<div key={`empty-${i}`} className="cell empty" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        cells.push(<div key={day} className="cell">{day}</div>);
    }

    return (
        <div>
            <h1>Release Calendar</h1>
            <div className="navigation">
                <button onClick={handlePrevMonth}>← Previous</button>
                <h2>
                {firstDay.toLocaleString('default', { month: 'long' })} {year}
                </h2>
                <button onClick={handleNextMonth}>Next →</button>
            </div>

            <div className="weekdays">
                {weekdays.map(day => (
                <div key={day} className="cell2 header">{day}</div>
                ))}
            </div>

            <div className="grid">
                {cells}
            </div>

            <p>This is the release calendar page.</p>
        </div>
    );
};

export default Calendar;