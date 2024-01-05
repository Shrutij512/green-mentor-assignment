import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function DropDownBtn({ title, a1, a2, a3 }) {
    return (

        <DropdownButton id="dropdown-basic-button" title={title}>
            <Dropdown.Item href="#/action-1">{a1}</Dropdown.Item>
            <Dropdown.Item href="#/action-2">{a2}</Dropdown.Item>
            <Dropdown.Item href="#/action-3">{a3}</Dropdown.Item>
        </DropdownButton>

    );
}

export default DropDownBtn;