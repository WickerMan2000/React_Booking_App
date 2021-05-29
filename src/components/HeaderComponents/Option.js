import React, { useEffect } from 'react';
import useHttpRequest from '../../CustomHooks/useHttpRequest';
import Select from '../../UI/Select';

const Option = React.memo(({ dataTransformation, dataType, className, property, eachOptionUrl, text, disabled }) => {
    const { error, isLoading, changeOptionHandler } = useHttpRequest();

    useEffect(() => {
        const abortController = new AbortController();
        changeOptionHandler(abortController, {
            url: eachOptionUrl
        }, dataTransformation);
        return () => abortController.abort();
    }, [changeOptionHandler, dataTransformation, eachOptionUrl])

    return (
        <div workingWithData={dataTransformation} className={className}>
            <Select
                isLoading={isLoading}
                error={error}
                data={dataType}
                property={property}
                text={text}
                disabled={disabled}
                onChange={changeOptionHandler.bind(null, new AbortController())}
            >
            </Select>
        </div>
    );
})

export default Option;