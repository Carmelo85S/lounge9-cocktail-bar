import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  selected: Date | null;
  onChange: (date: Date | null) => void;
}

const DateFilter: React.FC<Props> = ({ selected, onChange }) => (
  <DatePicker
    selected={selected}
    onChange={onChange}
    placeholderText="Filter by date"
    className="px-4 py-2 border border-night/20 rounded-lg"
  />
);

export default DateFilter;
