import { useEffect, useState } from 'react';
import axios from 'axios';
import {token, city} from '../config/config'

function Card() {

  const [data, setData] = useState(null);
  
  useEffect(() => {
    
    axios.get('http://api.hgbrasil.com/weather?format=json-cors&city_name='+ city + '&key=' + token)
      .then(response => {
          setData(response.data)
      })
      .catch(error => {
          console.log(error)
      });
  }, []);

  return (
        <div className="card bg-slate-200/50 mx-auto rounded-xl p-8 shadow-2xl border border-black border-opacity-10 transition duration-500 hover:scale-105">
          {data ? (
            <div className='flex p-4'>
              <div className='w-1/4 flex my-auto p-2 mr-4'>
                <span className="material-symbols-outlined text-8xl">
                {
                  data.results.currently === 'dia'
                    ? 'sunny'
                    : 'dark_mode'
                }
                </span>
              </div>
              <div className='flex-1 p-4'>
                <div className='text-center'>
                  <h1 className='text-slate-600 p-2 mb-1'>{data.results.date}</h1>
                  <h1 className='text-4xl font-medium'>{data.results.city_name}</h1>
                  <h2 className='text-2xl text-slate-600'>{data.results.description}</h2>
                </div>
                <div className='text-lg text-slate-700 p-2 text-center'>
                  <p>Temperatura: {data.results.temp}ºC</p>
                  <p>Umidade: {data.results.humidity}%</p>
                  <p>Velocidade do vento: {data.results.wind_speedy}</p>
                </div>
              </div>
            </div>
          ) : (
              <h1 className='text-4xl font-medium p-8'>Carregando informações...</h1>
          )}
          </div>
  );
}

export default Card;
