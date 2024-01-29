import { useQuery } from "react-query";
import http from "./http-common";

interface useGetProps {
    getQuery: string;
    url: string;
}

const useGet = ({ getQuery, url }: useGetProps) => {
    const { data } = useQuery(getQuery, async () => {
        const response = await http.get(url);
        return response.data;
    });

    return { data };
};

export default useGet;
