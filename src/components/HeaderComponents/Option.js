import React, { useEffect } from 'react';
import useHttpRequest from '../../Hooks/useHttpRequest';
import Select from '../../UI/Select';

const Option = ({ dataTransformation, dataType, className, property, eachOptionUrl }) => {
    const { error, isLoading, changeOptionHandler } = useHttpRequest();

    useEffect(() => {
        const abortController = new AbortController();
        changeOptionHandler(abortController, {
            url: eachOptionUrl
        }, dataTransformation);
        return () => abortController.abort();
    }, [changeOptionHandler, dataTransformation, eachOptionUrl])

    return (
        <div workingWithData={dataTransformation}>
            <Select
                className={className}
                isLoading={isLoading}
                error={error}
                data={dataType}
                property={property}
                onChange={changeOptionHandler.bind(null, new AbortController())}
            >
            </Select>
        </div>
    );
}

export default Option;