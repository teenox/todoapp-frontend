import { useState } from "react";
import './checkbox.css'

const Checkbox = ({ label, checked, ...props }) => {
    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);
    return (
        <div className="checkbox-wrapper">
            <label className="container">
                {label}
                <input
                    type="checkbox"
                    value={isChecked}
                    checked={isChecked}
                    onChange={() => setIsChecked((prev) => !prev)}
                    {...props}
                />
                <span className="checkmark"></span>
            </label>
        </div>
    );
};
export default Checkbox;