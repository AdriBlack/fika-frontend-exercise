import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { StyleSheet, Text, View } from 'react-native';

function List() {
    const [data, setData] = useState({ results: [ ] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios('https://api.themoviedb.org/3/movie/now_playing?api_key=c7834f2eca26aa9529361492fdaeab03&language=en-US&page=1')
                setData(result.data)
            } catch (err) {
                console.log(err)
                return err
            }
        }
        fetchData();
    }, [])

    return (
        <ul>
            {data.results.map(film => {
                return (
                    <li key={film.title}>{film.title}</li>
                )
            })}
        </ul>
    )

}

export default List