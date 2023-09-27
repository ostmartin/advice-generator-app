import Skeleton from "../components/skeleton/Skeleton";
import { Spinner } from "@chakra-ui/react";
import Error from "../components/error/Error";

const setContent = (process, Component, data) => {
    switch (process){
        case 'waiting':
            return <Skeleton/>;
        case 'loading':
            return <Spinner/>;
        case 'success':
            return <Component data={data}/>;
        case 'error':
            return <Error/>;
        default:
            throw new Error('Unexpected process state');
    }
}

export default setContent;