import React, { useEffect, useState } from 'react';
import { getCountries } from '../api';

const CitiesField = ({ field, values }) => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const json = await getCountries();
      setData(json.filter(country => country.name === values.country)[0].cities);
    };

    if (values.country !== '') {
      fetchData();
    }
  }, [values.country]);

  if (values.country === '') {
    return (
      <select {...field} disabled={true}>
        <option value="">Choose city</option>
      </select>
    );
  }

  return (
    data ?
      <select {...field} disabled={false}>
        {data.map(city =>
          <option key={city.name} value={city.name}>{city.name}</option>,
        )}
      </select>
      :
      <div>Data is loading...</div>
  );
};

export default CitiesField;
