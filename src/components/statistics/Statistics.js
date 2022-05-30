import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.statTitle}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={s.statListItem}
            style={{ background: getRandomHexColor() }}
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;

// <li className="item">
//             <span className="label">{stats.label}</span>
//             <span className="percentage">{stats.percentage}%</span>
//         </li>
//         <li className="item">
//             <span className="label">{stats.label}</span>
//             <span className="percentage">{stats.percentage}%</span>
//         </li>
//         <li className="item">
//             <span className="label">{stats.label}</span>
//             <span className="percentage">{stats.percentage}%</span>
//         </li>
//         <li className="item">
//             <span className="label">{stats.label}</span>
//             <span className="percentage">{stats.percentage}%</span>
//         </li>
