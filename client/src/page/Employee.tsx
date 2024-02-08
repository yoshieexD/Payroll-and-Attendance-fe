import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import Body from '../layout/Body';
import { useParams } from 'react-router-dom';
import useGet from '../api/useGet';

function Employee() {
    const { id } = useParams();
    const { data } = useGet({ getQuery: 'get-individual', url: `/employee/get/${id}` });
    return (
        <Layout>
            <Body>
                {data && (
                    <>
                        <div>Name: {data.name}</div>
                    </>
                )}
            </Body>
        </Layout>
    );
}

export default Employee;
