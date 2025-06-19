import React, { useEffect, useState } from 'react'


const parseTime = (timeString: string | Date) => {


    try {
        console.log(typeof timeString)
        console.log(timeString)
        const [hourStr, minute, period] = timeString.split(/[: ]/);
        let hour = parseInt(hourStr, 10);
        return { hour: hour.toString().padStart(2, '0'), minute, period };
    } catch (e) {
        return { hour: '10', minute: '00', period: 'AM' };
    }
};


const FormTimePicker = ({ value, onChange, minTime = '9:00 AM', maxTime = '7:00 PM' }) => {
    console.log("Input value : ", value);

    const initialTime = value ? parseTime(value) : parseTime(minTime);
    // console.log(initialTime);


    const [selectedHour, setSelectedHour] = useState(initialTime.hour);
    const [selectedMinute, setSelectedMinute] = useState(initialTime.minute);
    const [selectedPeriod, setSelectedPeriod] = useState(initialTime.period);
    const [hours, setHours] = useState([]);



    useEffect(() => {
        if (value) {
            const initialTime = parseTime(value)
            setSelectedHour(initialTime.hour);
            setSelectedMinute(initialTime.minute);
            setSelectedPeriod(initialTime.period);
        }
    }, [value]);

    const handleTimeChange = () => {
        const timeValue = `${selectedHour}:${selectedMinute} ${selectedPeriod}`;
        console.log(timeValue);
        onChange(timeValue);
    };


    useEffect(() => {
        handleTimeChange()
    }, [selectedHour, selectedMinute]);






    const generateHourOptions = () => {
        const minTimeObj = parseTime(minTime);
        const maxTimeObj = parseTime(maxTime);

        const hours = [];

        if (selectedPeriod === 'AM') {
            for (let i = minTimeObj.hour; i <= 11; i++) {
                hours.push(i.toString().padStart(2, '0'));
            }
        } else if (selectedPeriod === 'PM') {
            let max_time = Number(maxTimeObj.hour)
            for (let i = 12; hours.length < max_time; i = (i % 12) + 1) {
                let hour12 = i.toString().padStart(2, '0');
                hours.push(hour12);
            }

        }
        return hours;
    };



    useEffect(() => {
        aaaaaaaaaaaaaaaaaa()
    }, [selectedPeriod])

    const aaaaaaaaaaaaaaaaaa = () => {
        const _hours = generateHourOptions()
       
        let isInit = false;
        if (isInit) {
            // setSelectedMinute('00')
            const timeValue = `${_hours[0]}:${selectedMinute} ${selectedPeriod}`;
            console.log(timeValue);
            onChange(timeValue);
            setSelectedHour(_hours[0])
        }
        isInit = true
         setHours(_hours)
    }

    const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

    return (
        <div className="flex items-center input input-bordered">
            <select
                className="bg-transparent text-lg appearance-none outline-none mr-4"
                value={selectedHour}
                onChange={(e) => {
                    setSelectedHour(e.target.value);
                }}
            >
                {hours.map((hour) => (
                    <option key={hour} value={hour}>
                        {hour}
                    </option>
                ))}
            </select>
            <span className="text-lg mr-3">:</span>
            <select
                className="bg-transparent text-lg appearance-none outline-none mr-4"
                value={selectedMinute}
                onChange={(e) => {
                    setSelectedMinute(e.target.value);
                }}
            >
                {minutes.map((minute) => (
                    <option key={minute} value={minute}>
                        {minute}
                    </option>
                ))}
            </select>
            <span className="text-lg mr-3">:</span>
            <select
                className="bg-transparent text-lg appearance-none outline-none mr-4"
                value={selectedPeriod}
                onChange={(e) => {
                    setSelectedPeriod(e.target.value);
                }}
            >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
            </select>
        </div>
    );
};


export default FormTimePicker