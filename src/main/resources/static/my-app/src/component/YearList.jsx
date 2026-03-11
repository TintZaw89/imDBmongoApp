import React, { useState } from 'react';

const YearList = (props) => {

  const currentYear = new Date().getFullYear(); // 2026 [13]
  const startYear = currentYear - 125;
  const years = [];

  // Generate years from current down to 100 years ago
  for (let i = currentYear; i >= startYear; i--) {
    years.push(i);
  }

  const [selectedYear, setSelectedYear] = useState(currentYear);
  props.onValueChange(selectedYear);

  return (
    <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
}

export default YearList;