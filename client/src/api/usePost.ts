import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import http from './http-common';
import { toast } from 'react-hot-toast';

interface usePostProps {
    url: string;
    onSuccess: (data: any) => void;
    onError?: () => void;
    errors: String,
    datas: Record<string, any>;
    query?: String
}

const usePost = ({ url, onSuccess, onError, errors, datas, query }: usePostProps): UseMutationResult => {
    const queryClient = useQueryClient();
    return useMutation(
        async () => {
            const response = await http.post(url, datas);
            return response.data;
        },
        {
            onSuccess: async (data) => {
                onSuccess(data);
                await queryClient.invalidateQueries(`${query}`)

            },
            onError: () => {
                toast.error(`${errors}`);
                if (onError) {
                    onError();
                }
            },
        }
    );
};

export default usePost;
