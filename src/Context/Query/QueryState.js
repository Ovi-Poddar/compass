import React from 'react';
import { useState } from 'react';

import QueryContext from './QueryContext';

const QueryState = (props) => {
    const host = "http://localhost:5000";

    const queriesInitial = [];
    const [queries, setQueries] = useState(queriesInitial);

    // Get all Queries of this business using: GET "/api/query/getallqueries".
    const getQueries = async (business_id) => {
        // API Call
        const response = await fetch(
            `${host}/api/query/getallqueries/${business_id}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token"),
                },
            }
        );
        const json = await response.json();
        setQueries(json);
    }

    // Add a Query to a Business using: POST "/api/query/addquery/".
    const addQuery = async (text, business_id) => {
        // API Call
        const response = await fetch(
            `${host}/api/query/addquery/${business_id} `,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token"),
                },
                body: JSON.stringify({ text: text }),
            }
        );
        const addedQuery = await response.json();
        setQueries([addedQuery].concat(queries));
    }

    // Delete a Query using: DELETE "/api/query/deletequery/".
    const deleteQuery = async (query_id) => {
        // API Call
        const response = await fetch(
            `${host}/api/query/deletequery/${query_id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token"),
                },
            }
        );
        const json = response.json();

        const newQueries = queries.filter((query) => {
            return query._id !== query_id;
        });
        setQueries(newQueries);
    }

    // Edit a Query using: PUT "/api/query/editquery/".
    const editQuery = async (query_id, text) => {
        // API Call
        const response = await fetch(
            `${host}/api/query/editquery/${query_id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token"),
                },
                body: JSON.stringify({ text: text }),
            }
        );
        const json = await response.json();

        let newQueries = JSON.parse(JSON.stringify(queries));

        // Find the query with the given id and update its text.
        newQueries.forEach((query) => { 
            if (query._id === query_id) {
                query.text = text;
            }
        });
    
        setQueries(newQueries);
    }

    return (
        <QueryContext.Provider
        value={{ queries, getQueries, addQuery, deleteQuery, editQuery}}
        >
            {props.children}
        </QueryContext.Provider>
    );


};

export default QueryState;