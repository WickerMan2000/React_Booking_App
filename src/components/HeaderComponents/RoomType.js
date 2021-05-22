import React, { useEffect, useState } from 'react';
import useHttpRequest from '../../Hooks/useHttpRequest'
import Select from '../../UI/Select';
import styles from './RoomType.module.css';

const RoomType = () => {
    const [roomTypes, setRoomTypes] = useState([]);
    const { error, isLoading, changeOptionHandler: changeRoomTypeHandler } = useHttpRequest();

    useEffect(() => {
        const abortController = new AbortController();
        const workingWithRoomTypesData = async data => {
            const result = await data.roomtypes.map(roomData => {
                return {
                    roomtype: roomData.name
                };
            })
            setRoomTypes(result);
        }
        changeRoomTypeHandler(abortController, {
            url: 'https://mybooking-28176-default-rtdb.firebaseio.com/0.json'
        }, workingWithRoomTypesData);
        return () => abortController.abort();
    }, [changeRoomTypeHandler])

    return (
        <Select
            className={styles.RoomType}
            onChange={changeRoomTypeHandler.bind(null, new AbortController())}
            isLoading={isLoading}
            error={error}
            data={roomTypes}
            property={"roomtype"}
        >
        </Select>
    );
}

export default RoomType;