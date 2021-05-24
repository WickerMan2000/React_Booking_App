import React, { useEffect } from 'react';
import Select from '../../UI/Select';
import useHttpRequest from '../../CustomHooks/useHttpRequest';
import styles from './SortingOptions.module.css';

const SortingOptions = ({ dataTransformation, sortingOptionUrl, dataType, property, text }) => {
    const { error, isLoading, changeOptionHandler } = useHttpRequest();

    useEffect(() => {
        const abortController = new AbortController();
        changeOptionHandler(abortController, {
            url: sortingOptionUrl
        }, dataTransformation);
        return () => abortController.abort();
    }, [changeOptionHandler, dataTransformation, sortingOptionUrl])

    return (
        <div className={styles.SortingOptions}>
            <Select
                isLoading={isLoading}
                error={error}
                data={dataType}
                property={property}
                text={text}
                onChange={changeOptionHandler.bind(null, new AbortController())}
            >
            </Select>
        </div>
    );
}

export default SortingOptions;