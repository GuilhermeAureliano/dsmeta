import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
    dateType: boolean;
}

function Input({ dateType }: Props) {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    return (
        <DatePicker
            selected={dateType ? minDate : maxDate}
            onChange={(date: Date) => { dateType ? setMinDate(date) : setMaxDate(date) }}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
        />
    );
}

export default Input;
