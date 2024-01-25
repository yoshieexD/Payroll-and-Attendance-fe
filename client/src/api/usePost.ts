import { useMutation, UseMutationResult } from 'react-query';
import http from './http-common';
import { toast } from 'react-hot-toast';

interface usePostProps {
    url: string;
    onSuccess: (data: any) => void;
    onError?: () => void;
    errors: String,
    datas: Record<string, any>;
}

const usePost = ({ url, onSuccess, onError, errors, datas }: usePostProps): UseMutationResult => {

    return useMutation(
        async () => {
            const response = await http.post(url, datas);
            return response.data;
        },
        {
            onSuccess: (data) => {
                onSuccess(data);
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
