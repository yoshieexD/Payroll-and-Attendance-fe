import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import http from './http-common';
import { toast } from 'react-hot-toast';

interface useDeleteProps {
    url: string;
    onSuccess: (data: any) => void;
    errors: string;
    query?: string;
}

const useDelete = ({ url, onSuccess, errors, query }: useDeleteProps): UseMutationResult => {
    const queryClient = useQueryClient();

    return useMutation(
        async () => {
            const response = await http.delete(url);
            return response.data;
        },
        {
            onSuccess: async (data) => {
                onSuccess(data);
                await queryClient.invalidateQueries(`${query}`);
            },
            onError: () => {
                toast.error(`${errors}`);
            },
        }
    );
};

export default useDelete;
