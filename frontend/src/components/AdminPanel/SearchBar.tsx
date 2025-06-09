interface Props {
  value: string;
  onChange: (val: string) => void;
}

const SearchBar: React.FC<Props> = ({ value, onChange }) => (
  <input
    type="search"
    placeholder="Search by name..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="w-full md:max-w-md px-4 py-2 border border-night/20 rounded-lg focus:ring-2 focus:ring-amber-dark focus:outline-none"
  />
);

export default SearchBar;
